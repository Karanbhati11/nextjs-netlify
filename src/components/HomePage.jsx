import styles from "../app/page.module.css";
import TypingText from "./TypingText";
const HomePage = () => {
  return (
    <div className={styles.HomeContainer}>
      <div className={styles.VideoContainer}>
        <video className={styles.ParallaxVideo} autoPlay={true} loop muted>
          <source src="/tunnel.mp4" />
        </video>
      </div>
      <text className={styles.HomeHeading}>Nova</text>
      <TypingText />
    </div>
  );
};

export default HomePage;
