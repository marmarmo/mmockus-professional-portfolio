import React, { useState } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";

import {
  FaGithubAlt,
  FaReact,
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaNpm,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMysql,
  SiMongodb,
  SiSequelize,
  SiHandlebarsdotjs,
} from "react-icons/si";

import data from "./Data";
import styles from "./styles.module.css";
import "./Skills.css";
import ReactTypingEffect from "react-typing-effect";

export default function Skills() {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "var(--dark)", text: "white" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "var(--orange)" : "var(--dark)",
    },
  });
  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    // trail: 0 / data.length,
    // from: { opacity: 0, scale: 0 },
    // enter: { opacity: 1, scale: 0 },
    // leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.2 : 0.1,
  ]);

  return (
    <div className={styles.wrapper}>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={styles.container}
        
      >
        <p className= "exit" onClick={() => set((open) => !open)}>&times;</p>
        {transition((style, item) => (
          <animated.div
            className={styles.item}
            style={{ ...style, background: item.css }}
          />
        ))}
        {open ? (<div className="skillsText">
          <div className= "mySkills">
            <ReactTypingEffect
              element={"header"}
              text={'My Skills...'}
            />
          </div>
          <div className= "skillsText align-middle">
            <p>
              HTML <FaHtml5 />
            </p>
            <p>
              CSS <FaCss3 />
            </p>
            <p>
              JavaScript <SiJavascript />
            </p>
            <p>
              React <FaReact />
            </p>
            <p>
              Node.js <FaNodeJs />
            </p>
            <p>
              Npm <FaNpm />
            </p>
            <p>
              Handlebars <SiHandlebarsdotjs />
            </p>
            <p>
              MySQL <SiMysql />
            </p>
            <p>
              MongoDB <SiMongodb />
            </p>
            <p>
              Sequelize <SiSequelize />
            </p>
            <p>
              Git <FaGithubAlt />
            </p>
          </div>
        </div>): (<button className= "button" style={{backgroundColor: 'var(--dark)', color: 'var(--tan)'}} onClick={() => set((open) => !open)}> 👆 </button>)}
      </animated.div>
    </div>
  );
}
