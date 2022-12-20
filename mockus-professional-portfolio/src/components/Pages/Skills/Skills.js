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
import TypeIt from "react-typing-effect";

export default function Skills() {
  const [open, set] = useState(false);

  const springApi = useSpringRef();
  const { size, ...rest } = useSpring({
    ref: springApi,
    config: config.stiff,
    from: { size: "20%", background: "black", text: "white" },
    to: {
      size: open ? "100%" : "20%",
      background: open ? "white" : "black",
    },
  });
  const transApi = useSpringRef();
  const transition = useTransition(open ? data : [], {
    ref: transApi,
    trail: 400 / data.length,
    from: { opacity: 0, scale: 0 },
    enter: { opacity: 1, scale: 1 },
    leave: { opacity: 0, scale: 0 },
  });

  // This will orchestrate the two animations above, comment the last arg and it creates a sequence
  useChain(open ? [springApi, transApi] : [transApi, springApi], [
    0,
    open ? 0.1 : 0.6,
  ]);

  return (
    <div className={styles.wrapper}>
      <animated.div
        style={{ ...rest, width: size, height: size }}
        className={styles.container}
        onClick={() => set((open) => !open)}
      >
        {transition((style, item) => (
          <animated.div
            className={styles.item}
            style={{ ...style, background: item.css }}
          />
        ))}
        <div className="skillsText">
          <div>
            <TypeIt
              element={"h3"}
              getBeforeInit={(instance) => {
                instance
                  .type("My Skills...")
                  .pause(750)
                  .delete(2)

                  .pause(500)
                  .type("ex!");
                return instance;
              }}
            />
          </div>
          <div>
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
        </div>
      </animated.div>
    </div>
  );
}
