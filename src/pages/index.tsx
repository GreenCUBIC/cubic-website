import * as React from "react";
import { Link } from "gatsby";
import * as styles from "./index.module.scss";
import Layout from "../components/Layout";
import Button from "../components/Button";
import CoolBar from "../components/CoolBar";
import NewsBar from "../components/NewsBar";

import news from "../../static/news.yaml";

const IndexPage = () => (
  <Layout title="cuBIC | Home">
    <CoolBar />
    <NewsBar news={news} />
    <div className={`${styles.container}`}>
      <div className={`${styles.whoWeAre}`}>
        <div className={`${styles.whoWeAreText}`}>
          <h2>Who we are</h2>
          <p>
            The Carleton University Biomedical Informatics Collaboratory (cuBIC)
            headed by Prof. James R. Green (SMIEEE) is group of researchers
            conducting research in biomedical informatics within the Department
            of Systems and Computer Engineering at Carleton University.
          </p>
          <p>
            From the heart of the Canadian capital, we tackle problems in
            biomedical informatics and bioinformatics head on. We apply
            traditional machine learning, deep learning, signal processing, and
            data science to solve problems related to a variety of domains. Our
            team consists of highly qualified graduate students and
            post-doctoral researchers with a passion for engineering.
          </p>
          <p>
            Check out our{" "}
            <a
              href="https://www.youtube.com/channel/UClCD40CVSnGCwjy0MzYT_eA"
              style={{ color: "white" }}
            >
              YouTube channel
            </a>
            !
          </p>
        </div>
      </div>
      <div className={`${styles.emptyBlock}`} />
      <div className={`${styles.emptyBlock}`} />
      <div className={`${styles.expertise}`}>
        <div className={`${styles.expertiseText}`}>
          <h2>Our areas of expertise</h2>
          <p>
            The collaboratory is unique in that its members possess a wide
            variety of skills and background ranging from biology to photonics.
            The vast palette of expertise in the laboratory creates an
            environment highly conducive to interdisciplinary research.{" "}
          </p>
          <p>
            Current areas of expertise in the lab include:
            <ul>
              <li>Real-time, non-invasive patient monitoring (NICU)</li>
              <li>Bioinformatics (proteomics, miRNA prediction, ...)</li>
              <li>Audiology and telemedicine</li>
              <li>Computer vision for remote sensing</li>
              <li>High-performance computing</li>
            </ul>
          </p>

          <Link to="/research">
            <Button inverted>Learn more</Button>
          </Link>
        </div>
      </div>
    </div>
    <div className={`${styles.partners}`}>
      <h2>Industry Partners</h2>
      <p>
        The collaboratory regularly conducts research in collaboration with
        industry partners. We would be happy to discuss collaboration
        opportunities with you. Current industry partners include:
      </p>
      <div className={`${styles.partnersWrapper}`}>
        <img src="/images/partners/ibm.jpg" />
        <img src="/images/partners/nrcan.jpg" />
        <img src="/images/partners/shoebox.png" />
        <img src="/images/partners/wsib.png" />
        <img src="/images/partners/toh.png" />
      </div>
    </div>
  </Layout>
);

export default IndexPage;
