'use client'
import { useEffect } from "react";
import styles from "../app/page.module.css";
import { init } from "ityped";
const TypingText = () => {
  useEffect(() => {
    const myElement = document.querySelector(".myElement");
    init(myElement, {
      cursorChar: "|",
      typeSpeed: 100,
      showCursor: true,
      strings: ["typingtext 1", "typingtext 2", "typingtext 3"],
    });
  }, []);

  return <div className={`myElement ${styles.myElementt}`}></div>;
};

export default TypingText;
