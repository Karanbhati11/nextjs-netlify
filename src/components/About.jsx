import styles from "../app/page.module.css";
// import CanvasComponent from "./CanvasComponent";

const About = () => {
  return (
    <div className={styles.AboutContainer}>
      <div className={styles.AboutContentContainer}>
        <div className={styles.box1}>
          <div className={styles.AboutText}>
            <text className={styles.AboutHeading}>About</text>
            <div className={styles.AboutCard}>
              <text className={styles.AboutSubText}>
               {/* About Text Here */}
              </text>
            </div>
          </div>
          {/* Canvas here  */}
          {/* <CanvasComponent/> */}
        </div>
      </div>
      <div className={styles.AboutParallax}></div>
    </div>
  );
};

export default About;
