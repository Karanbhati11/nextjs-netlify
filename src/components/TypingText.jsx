"use client";
import styles from "../app/page.module.css";
import Typewriter from "typewriter-effect";

const TypingText = () => {
  return (
    <>
      <div className={styles.HomeSubHeading}>We dont create websites, we create dreams</div>
      <div
        
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <text className={styles.HomeSubSubHeading}> we are&nbsp;</text>  
        <Typewriter
          options={{
            strings: ["Designers","developers","creators"],
            autoStart: true,
            loop: true,
            wrapperClassName: styles.Typewriter,
          }}
        />
      </div>
    </>
  );
};

export default TypingText;
