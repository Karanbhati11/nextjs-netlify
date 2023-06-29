"use client";
import { Canvas, useLoader } from "@react-three/fiber";
import styles from "../app/page.module.css";
// import { OrbitControls, useGLTF, useScroll } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);
const Work = () => {
  const [radius, setRadius] = useState(1.5);
  const MyCube = () => {
    const cubeRef = useRef(null);
    const tl = useRef();
    const { nodes, materials } = useLoader(GLTFLoader, "/cube.glb");
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
      tl.current.to(cubeRef.current?.rotation, { y: "+=1.55" },3);
      tl.current.to(cubeRef.current?.rotation, { y: "+=1.6" },6 );
      tl.current.to(cubeRef.current?.rotation, { y: "+=2" },10);
    }, []);
    return (
      <group scale={radius} position={[0, 0, 0]} dispose={null} ref={cubeRef}>
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
    );
  };

  return (
    <section className={styles.WorkSection}>
      <div className={styles.WorkTextOverLay}>
        <div className={`${styles.WorkChar} ${styles.WorkChar1}`}>W</div>
        <div className={`${styles.WorkChar} ${styles.WorkChar2}`}>O</div>
        <div className={`${styles.WorkChar} ${styles.WorkChar3}`}>R</div>
        <div className={`${styles.WorkChar} ${styles.WorkChar4}`}>K</div>
        <div className={`${styles.WorkChar} ${styles.WorkChar5}`}>S</div>
      </div>
      <div className={styles.WorkContentContainer}>
        <div className={styles.WorkContentOne}>
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorem
            labore a cum beatae, fugit facilis et eius, consequatur, dolorum
            itaque voluptatum modi. Minima consectetur possimus at corporis
            deleniti sapiente! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequuntur, harum recusandae dolores adipisci
            eos eveniet incidunt minima architecto ipsum. Qui exercitationem
            quaerat quo debitis ea inventore esse, voluptas magnam harum?Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
            et alias, nesciunt at explicabo numquam dolor esse veritatis optio
            reprehenderit doloribus quisquam harum nostrum voluptatem debitis
            veniam enim odio pariatur?Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Eos, delectus distinctio iste vitae magni dolore
            nisi ratione iusto id praesentium ducimus modi culpa eveniet
            accusantium facere quod iure, nam placeat. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Provident quidem consequatur
            suscipit maiores explicabo amet ullam aliquam ratione quia,
            praesentium nihil velit iure mollitia non? Incidunt, sint!
            Laboriosam, sunt officiis! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Rem vel laudantium facere quia? Magnam quis iure,
            cum ullam voluptas, vero inventore quos dolores consequatur dolore,
            quasi pariatur ipsam totam consequuntur! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quas optio eaque illo laudantium
            doloribus velit quod libero iusto ducimus nam pariatur consequuntur
            modi ab assumenda, minus, facilis, obcaecati odio fuga?
          </p>
        </div>
        <div className={styles.WorkContentTwo}>
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorem
            labore a cum beatae, fugit facilis et eius, consequatur, dolorum
            itaque voluptatum modi. Minima consectetur possimus at corporis
            deleniti sapiente! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequuntur, harum recusandae dolores adipisci
            eos eveniet incidunt minima architecto ipsum. Qui exercitationem
            quaerat quo debitis ea inventore esse, voluptas magnam harum?Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
            et alias, nesciunt at explicabo numquam dolor esse veritatis optio
            reprehenderit doloribus quisquam harum nostrum voluptatem debitis
            veniam enim odio pariatur?Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Eos, delectus distinctio iste vitae magni dolore
            nisi ratione iusto id praesentium ducimus modi culpa eveniet
            accusantium facere quod iure, nam placeat. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Provident quidem consequatur
            suscipit maiores explicabo amet ullam aliquam ratione quia,
            praesentium nihil velit iure mollitia non? Incidunt, sint!
            Laboriosam, sunt officiis! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Rem vel laudantium facere quia? Magnam quis iure,
            cum ullam voluptas, vero inventore quos dolores consequatur dolore,
            quasi pariatur ipsam totam consequuntur! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quas optio eaque illo laudantium
            doloribus velit quod libero iusto ducimus nam pariatur consequuntur
            modi ab assumenda, minus, facilis, obcaecati odio fuga?
          </p>
        </div>
        <div className={styles.WorkContentThree}>
          <h2>Heading</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In dolorem
            labore a cum beatae, fugit facilis et eius, consequatur, dolorum
            itaque voluptatum modi. Minima consectetur possimus at corporis
            deleniti sapiente! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequuntur, harum recusandae dolores adipisci
            eos eveniet incidunt minima architecto ipsum. Qui exercitationem
            quaerat quo debitis ea inventore esse, voluptas magnam harum?Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem
            et alias, nesciunt at explicabo numquam dolor esse veritatis optio
            reprehenderit doloribus quisquam harum nostrum voluptatem debitis
            veniam enim odio pariatur?Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Eos, delectus distinctio iste vitae magni dolore
            nisi ratione iusto id praesentium ducimus modi culpa eveniet
            accusantium facere quod iure, nam placeat. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Provident quidem consequatur
            suscipit maiores explicabo amet ullam aliquam ratione quia,
            praesentium nihil velit iure mollitia non? Incidunt, sint!
            Laboriosam, sunt officiis! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Rem vel laudantium facere quia? Magnam quis iure,
            cum ullam voluptas, vero inventore quos dolores consequatur dolore,
            quasi pariatur ipsam totam consequuntur! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Quas optio eaque illo laudantium
            doloribus velit quod libero iusto ducimus nam pariatur consequuntur
            modi ab assumenda, minus, facilis, obcaecati odio fuga?
          </p>
        </div>
      </div>
      <div className={styles.imgBx} id="CubeModel">
        <Canvas className={styles.CanvasImg}>
          <ambientLight intensity={1} />
          <MyCube />
          {/* <OrbitControls enableZoom={false} autoRotate /> */}
        </Canvas>
      </div>
    </section>
  );
};

export default Work;
