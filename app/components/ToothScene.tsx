"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  OrbitControls,
} from "@react-three/drei";
import * as THREE from "three";
import { useMemo, useRef } from "react";

/* -------------------------------------------------------
   REALISTIC WIREFRAME TOOTH
------------------------------------------------------- */

function createToothGeometry() {
  const geometry = new THREE.BufferGeometry();

  const segments = 96;
  const rings = 42;

  const positions: number[] = [];
  const indices: number[] = [];

  /*
    Crown profile.
    y = vertical position
    radius = width of tooth at that height
  */
  const profile = [
    { y: -0.15, r: 0.92 },
    { y: 0.05, r: 1.02 },
    { y: 0.30, r: 1.12 },
    { y: 0.65, r: 1.18 },
    { y: 1.05, r: 1.20 },
    { y: 1.40, r: 1.16 },
    { y: 1.70, r: 1.05 },
    { y: 1.92, r: 0.88 },
    { y: 2.08, r: 0.68 },
  ];

  for (let j = 0; j < profile.length; j++) {
    const p = profile[j];

    for (let i = 0; i < segments; i++) {
      const angle = (i / segments) * Math.PI * 2;

      /*
        Four major cusps + smaller secondary anatomy.
      */
      const cusp =
        1 +
        0.10 * Math.cos(angle * 4) +
        0.035 * Math.cos(angle * 8);

      /*
        Slightly wider from front/back than sides.
      */
      const oval = 1 + 0.07 * Math.cos(angle);

      const x = Math.cos(angle) * p.r * cusp * oval;
      const z = Math.sin(angle) * p.r * cusp;

      /*
        Make the top surface dip between cusps.
      */
      let y = p.y;

      if (j >= 6) {
        const cuspHeight =
          0.10 * Math.cos(angle * 4) +
          0.025 * Math.cos(angle * 8);

        y += cuspHeight * ((j - 5) / 3);
      }

      positions.push(x, y, z);
    }
  }

  /*
    Connect crown rings.
  */
  for (let j = 0; j < profile.length - 1; j++) {
    for (let i = 0; i < segments; i++) {
      const a = j * segments + i;
      const b = j * segments + ((i + 1) % segments);
      const c = (j + 1) * segments + ((i + 1) % segments);
      const d = (j + 1) * segments + i;

      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }

  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3)
  );

  geometry.setIndex(indices);
  geometry.computeVertexNormals();

  return geometry;
}

/* -------------------------------------------------------
   ROOT
------------------------------------------------------- */

function Root({
  position,
  rotation = [0, 0, 0],
  width = 0.34,
  height = 1.75,
}: {
  position: [number, number, number];
  rotation?: [number, number, number];
  width?: number;
  height?: number;
}) {
  const geometry = useMemo(() => {
    const geo = new THREE.CylinderGeometry(
      width * 0.62,
      width * 0.20,
      height,
      28,
      18
    );

    /*
      Slightly taper and curve the root.
    */
    const pos = geo.attributes.position;

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = pos.getZ(i);

      const normalized = (y + height / 2) / height;

      pos.setX(
        i,
        x * (0.78 + normalized * 0.22)
      );

      pos.setZ(
        i,
        z * (0.78 + normalized * 0.22)
      );

      /*
        Gentle natural root curvature.
      */
      pos.setX(
        i,
        pos.getX(i) + Math.sin(normalized * Math.PI) * 0.08
      );
    }

    pos.needsUpdate = true;
    geo.computeVertexNormals();

    return geo;
  }, [width, height]);

  return (
    <mesh
      geometry={geometry}
      position={position}
      rotation={rotation}
    >
      <meshBasicMaterial
        color="#8fd8ff"
        wireframe
        transparent
        opacity={0.95}
      />
    </mesh>
  );
}

/* -------------------------------------------------------
   TOOTH
------------------------------------------------------- */

function Tooth() {
  const group = useRef<THREE.Group>(null);

  const crownGeometry = useMemo(
    () => createToothGeometry(),
    []
  );

  useFrame((state) => {
    if (!group.current) return;

    const t = state.clock.getElapsedTime();

    group.current.rotation.y = t * 0.18;

    group.current.position.y =
      Math.sin(t * 0.7) * 0.035;
  });

  return (
    <group ref={group}>
      {/* ---------------- CROWN ---------------- */}

      <mesh
        geometry={crownGeometry}
        position={[0, 0.25, 0]}
      >
        <meshBasicMaterial
          color="#9cddff"
          wireframe
          transparent
          opacity={0.96}
        />
      </mesh>

      {/* ---------------- ROOTS ---------------- */}

      <Root
        position={[-0.43, -1.05, 0.18]}
        rotation={[0.04, 0, -0.08]}
        width={0.38}
        height={1.85}
      />

      <Root
        position={[0.02, -1.12, 0]}
        rotation={[0, 0, 0.02]}
        width={0.40}
        height={1.95}
      />

      <Root
        position={[0.43, -1.05, 0.18]}
        rotation={[0.04, 0, 0.08]}
        width={0.36}
        height={1.82}
      />
    </group>
  );
}

/* -------------------------------------------------------
   SCENE
------------------------------------------------------- */

export default function ToothScene() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        minHeight: "520px",
        position: "relative",
      }}
    >
      <Canvas
        camera={{
          position: [0, 0.5, 5.4],
          fov: 32,
        }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
        }}
      >
        <ambientLight intensity={1.4} />

        <directionalLight
          position={[3, 4, 5]}
          intensity={2}
        />

        <directionalLight
          position={[-3, 2, -4]}
          intensity={1}
        />

        <Tooth />

        <Environment preset="studio" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  );
}