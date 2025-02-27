"use client";
import { useEffect, useState } from "react";
import styles from "./Introduction.module.css";
import { socials } from "../../config";
import Icon from "../Icon/Icon";

export default function Introduction() {
  const [index, setIndex] = useState(0);
  const words = [
    "Hello",
    "Hola",
    "Bonjour",
    "สวัสดี",
    "Ciao",
    "안녕하세요",
    "Hallo",
    "Olá",
    "你好",
    "Hej",
    "こんにちは",
    "Cześć",
    "Xin chào",
    "Aloha",
    "Привіт",
    "Merhaba",
    "Alo",
    "नमस्ते",
    "Dia duit",
    "Ahoj",
  ];

  useEffect(() => {
    let interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [words.length]);
  return (
    <div className={styles.container}>
      <h1 className={styles["title"]}>Frank Rojas</h1>
      <h3 className={styles["subtitle"]}>Software Engineer</h3>
      <span className={styles["footer"]}>
        {socials.map((link, index) => {
          return (
            <a
              key={index}
              className={styles["links"]}
              target="_blank"
              href={link.name !== "email" ? link.url : "mailto:" + link.url}
              aria-label={link.name + " (Opens in a new tab)"}
            >
              <Icon name={link.name} />
            </a>
          );
        })}
      </span>
      {/* <div className={styles["scroller-container"]}> */}
      {/* <div className={styles.scroller} style={{ transform: `translateY(-${index * 100}%)`}}>
                    {words.map((word, i) => (
                        <h1 key={i} className={styles.hello}>{word}!</h1>
                    ))}
                </div>  */}
      {/* </div> */}
      {/* <p>
                My name is Frank Rojas and I'm a Software Engineer based in Austin, TX. I have a passion for front-end development and problem solving. Over the past few years, I've worked on projects ranging from enhancing authentication flows to building micro front-end applications. My experience includes modern web technologies like TypeScript, JavaScript, React.js, Stencil.js, Next.js, and more. I enjoy collaborating with teams to create secure, user-friendly solutions. Outside of coding, I'm a gamer, car enthusiast, and avid photographer of birds. 
            </p> */}
    </div>
  );
}
