"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 1400;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.y = t * 0.02;
    ref.current.rotation.x = Math.sin(t * 0.05) * 0.05;
    ref.current.position.x = state.mouse.x * 0.4;
    ref.current.position.y = state.mouse.y * 0.4;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#00f5ff"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
}

function GlowSphere({
  position,
  color,
  speed,
  scale,
}: {
  position: [number, number, number];
  color: string;
  speed: number;
  scale: number;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const initial = useRef(position);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.getElapsedTime();
    ref.current.position.y = initial.current[1] + Math.sin(t * speed) * 0.6;
    ref.current.position.x =
      initial.current[0] + Math.cos(t * speed * 0.6) * 0.4 + state.mouse.x * 0.6;
    ref.current.rotation.y = t * 0.15;
  });

  return (
    <mesh ref={ref} position={position} scale={scale}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color={color} transparent opacity={0.12} />
    </mesh>
  );
}

function Rig() {
  const { camera } = useThree();
  useFrame((state) => {
    camera.position.x += (state.mouse.x * 0.5 - camera.position.x) * 0.03;
    camera.position.y += (state.mouse.y * 0.3 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ThreeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-80">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
      >
        <Rig />
        <Particles />
        <GlowSphere position={[-3, 1, -2]} color="#00f5ff" speed={0.3} scale={1.6} />
        <GlowSphere position={[3, -1.5, -3]} color="#7c3aed" speed={0.22} scale={2.2} />
        <GlowSphere position={[1.5, 2, -4]} color="#00f5ff" speed={0.35} scale={1} />
      </Canvas>
    </div>
  );
}
