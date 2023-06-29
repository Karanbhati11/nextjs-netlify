import { Canvas,useLoader } from "@react-three/fiber";
import { useLayoutEffect, useRef, useState } from "react";
import styles from "../app/page.module.css";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MyCube() {
  const { nodes, materials } = useLoader(GLTFLoader, "/cube.glb");
  const cubeRef = useRef(null);
  const tl = useRef(null);
  const [radius, setRadius] = useState(0.5);

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      scrollTrigger: {
        trigger: "#CubeModel",
        start: "top top",
        endTrigger: "#ContactPage",
        end: "top top",
        scrub: 2,
        markers: true,
      },
    });
    console.log(cubeRef)
    tl.current.to(cubeRef.current?.scale, { x:"1.5",y:"1.5",z:"1.5"},0.1);
    tl.current.to(cubeRef.current?.position, { x:"0",y:"0",z:"0"},0.1);
    tl.current.to(cubeRef.current?.rotation, { y: "+=1.55" },3);
    tl.current.to(cubeRef.current?.rotation, { y: "+=1.6" },6 );
    tl.current.to(cubeRef.current?.rotation, { y: "+=2" },10);
  }, []);
  return (
    <Canvas className={styles.CanvasImg}>
      <ambientLight intensity={1} />
      <group scale={radius} position={[1, 2, 1]} dispose={null} ref={cubeRef}>
        <mesh
          geometry={nodes.Cube_1.geometry}
          material={materials["Image ONE"]}
        />
        <mesh
          geometry={nodes.Cube_2.geometry}
          material={materials["Image TWO"]}
        />
        <mesh
          geometry={nodes.Cube_3.geometry}
          material={materials["Image THREE"]}
        />
        <mesh
          geometry={nodes.Cube_4.geometry}
          material={materials["Image FOUR"]}
        />
        <mesh
          geometry={nodes.Cube_5.geometry}
          material={materials["Image FIVE"]}
        />
        <mesh
          geometry={nodes.Cube_6.geometry}
          material={materials["Image SIX"]}
        />
      </group>
    </Canvas>
  );
}

