import styles from './page.module.css'
import Navbar from '@/components/Navbar'
import About from '@/components/About'
import Footer from '@/components/Footer'
import Work from '@/components/Work'
import Contact from '@/components/Contact'
import HomePage from '@/components/HomePage'

export default function Home() {
  return (
   <div>
    <div ><Navbar/></div>
      <div id='home' className={styles.HomeContainer}><HomePage/></div>
      <div id='about' className={styles.AboutContainer}> <About/></div>
      <div id='work' className={styles.WorkContainer}><Work/></div>
      <div id='contact' className={styles.ContactContainer}><Contact/></div>
      <div className={styles.FooterContainer}><Footer/></div>
   </div>
  )
}
