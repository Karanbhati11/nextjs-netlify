import styles from '../app/page.module.css'
import TypingText from './TypingText'
const HomePage = () => {


  return (
    <div className={styles.HomeContainer}>
       <video className={styles.ParallaxVideo} autoPlay={true} loop muted >
        <source src="/background_video.mp4" />
      </video>
    <TypingText/>
    </div>
  )
}

export default HomePage