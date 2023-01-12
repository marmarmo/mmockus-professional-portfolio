import { useRef } from "react";
import { useInView } from "framer-motion";
import "./Home.css";

function Section({ children }) {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true });
  
	return (
	  <section className= "slideText" ref={ref}>
		<span
		  style={{
			transform: isInView ? "none" : "translateX(-500px)",
			opacity: isInView ? 1 : 0,
			transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.8s"
		  }}
		>
		  {children}
		</span>
	  </section>
	);
  }

  export default function Home() {
	return (
	  <>
		<Section>Welcome</Section>
		<Section>to</Section>
		<Section>MarMo's</Section>
		<Section>Portfolio</Section>
	  </>
	);
  }
