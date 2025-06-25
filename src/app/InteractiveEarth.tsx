"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const InteractiveEarth = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const currentMount = mountRef.current;
    if (!currentMount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, currentMount.clientWidth / currentMount.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    currentMount.appendChild(renderer.domElement);

    camera.position.z = 3.0;

    const textureLoader = new THREE.TextureLoader();
    const earthTexture = textureLoader.load('/textures/earth_daymap.jpg');
    
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    const material = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.7,
      metalness: 0.5,
    });
    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    let lastScrollY = window.scrollY;
    let rotationSpeed = 0;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      rotationSpeed += (scrollY - lastScrollY) * 0.0005;
      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', handleScroll);

    const animate = () => {
      requestAnimationFrame(animate);

      rotationSpeed *= 0.95;

      earth.rotation.y += 0.0005 + rotationSpeed;
      earth.rotation.x = 0.5;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      if (currentMount) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default InteractiveEarth;
