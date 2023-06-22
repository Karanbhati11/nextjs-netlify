import styles from "../app/page.module.css";
import CanvasComponent from "./CanvasComponent";

const About = () => {
  return (
    <div className={styles.AboutContainer}>
      <div className={styles.AboutContentContainer}>
        <div className={styles.box1}>
          <div className={styles.AboutText}>
            <text className={styles.AboutHeading}>About</text>
            <div className={styles.AboutCard}>
              <text className={styles.AboutSubText}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                totam eius tempore facere voluptas, dolorum voluptates dolor
                nisi neque numquam beatae architecto facilis non quasi fugit
                accusamus a magni modi!
              </text>
            </div>
          </div>
           <CanvasComponent/>
        </div>
      </div>
      <div className={styles.AboutParallax}></div>
    </div>
  );
};

export default About;
