"use client";
import { Canvas } from "@react-three/fiber";
import { Model as Earth } from "./Earth";
import styles from "../app/page.module.css";
import { useState } from "react";
const CanvasComponent = () => {
  const [radius, setRadius] = useState(2);

  return (
    <div className={styles.AboutContent}>
      <Canvas className={styles.AboutCanvas}>
        <ambientLight intensity={0.1} />
        <Earth scale={radius} position={[0, 0, 0]} />
      </Canvas>
    </div>
  );
};

export default CanvasComponent;
