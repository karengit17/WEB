'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

function AnimatedSphere() {
  const meshRef = useRef(null);

  return (
    <Sphere args={[1, 100, 100]} scale={2.5} ref={meshRef}>
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__canvas">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#8b5cf6" />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <p className="hero__greeting">Привет, меня зовут</p>
          <h1 className="hero__title">
            <span className="hero__name">Карен Карапетян</span>
          </h1>
          <p className="hero__subtitle">
            Full-Stack разработчик, создающий современные веб-приложения
          </p>
          <p className="hero__description">
            Специализируюсь на создании производительных и масштабируемых решений 
            с использованием современных технологий
          </p>
          <div className="hero__buttons">
            <a href="#projects" className="btn btn-primary">
              Смотреть проекты
            </a>
            <a href="#contacts" className="btn btn-secondary">
              Связаться со мной
            </a>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Прокрутить вниз">
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
