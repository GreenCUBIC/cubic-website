import * as React from "react";
import Fading from "./Fading";
import * as styles from "./CoolBar.module.scss";

const CoolBar = () => (
  <div className={styles.coolBar}>
    <Fading offset={200}>
      <div
        style={{
          fontSize: 30,
          position: "absolute",
          top: "10%",
          left: "5%",
          userSelect: "none",
        }}
      >
        Patient monitoring
      </div>
    </Fading>

    <Fading offset={100}>
      <div
        style={{
          fontSize: 40,
          position: "absolute",
          top: "35%",
          left: "10%",
          userSelect: "none",
        }}
      >
        Machine learning
      </div>
    </Fading>

    <Fading offset={0}>
      <div
        style={{
          position: "absolute",
          top: "60%",
          left: "2%",
          userSelect: "none",
        }}
      >
        Signal processing
      </div>
    </Fading>

    <Fading offset={400}>
      <div
        style={{
          fontSize: 24,
          position: "absolute",
          top: "23%",
          right: "15%",
          userSelect: "none",
        }}
      >
        Computer vision
      </div>
    </Fading>

    <Fading offset={500}>
      <div
        style={{
          fontSize: 24,
          position: "absolute",
          top: "50%",
          userSelect: "none",
          right: "5%",
        }}
      >
        High-performance computing
      </div>
    </Fading>

    <Fading offset={600}>
      <div
        style={{
          fontSize: 40,
          position: "absolute",
          top: "74%",
          right: "20%",
          userSelect: "none",
        }}
      >
        Bioinformatics
      </div>
    </Fading>
    <svg
      style={{ position: "absolute", left: "45%", top: "10%", height: 150 }}
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 276.2 288.4"
      enable-background="new 0 0 276.2 288.4"
    >
      <g>
        <rect
          x="23.9"
          y="30.6"
          fill="none"
          stroke="#FFFFFF"
          stroke-width="12"
          stroke-miterlimit="10"
          width="177.6"
          height="177.6"
        />
        <polyline
          fill="none"
          stroke="#FFFFFF"
          stroke-width="12"
          stroke-miterlimit="10"
          points="79.2,192 79.2,85 168,85 	"
        />
        <polyline
          fill="none"
          stroke="#FFFFFF"
          stroke-width="12"
          stroke-miterlimit="10"
          points="219.9,85 256.8,85 256.8,262.5 
		79.2,262.5 79.2,225.4 	"
        />
        <line
          fill="none"
          stroke="#FFFFFF"
          stroke-width="12"
          stroke-miterlimit="10"
          x1="168"
          y1="85"
          x2="179.7"
          y2="85"
        />
        <path
          fill="#010101"
          stroke="#FFFFFF"
          stroke-miterlimit="10"
          d="M189.6,73.7c0.1,0,0.2-0.1,0.3-0.1c0.1,0.1,0.1,0.1,0.2,0.2
		c-0.1,0-0.2,0-0.3,0C189.7,73.9,189.7,73.7,189.6,73.7z"
        />
      </g>
    </svg>
  </div>
);
export default CoolBar;
