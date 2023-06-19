import styles from '../app/page.module.css'
const HomePage = () => {
  return (
    <div >
       <video className={styles.ParallaxVideo} autoPlay={true} loop muted >
        <source src="/background_video.mp4" />
      </video>
    </div>
  )
}

export default HomePage