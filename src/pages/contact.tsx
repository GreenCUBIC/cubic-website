import React, { useState } from "react";
import yaml from "js-yaml";
import Showdown from "showdown";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import ContentLayout from "../components/ContentLayout";
import * as styles from "./contact.module.scss";

interface Props {}

const Contact = (props: Props) => {
  return (
    <Layout title="cuBIC | Contact">
      <div>
        <div className={`${styles.verticalBlank}`}>
          <div className={`${styles.left}`}>
            <div className={`${styles.blueBlock}`}>
              <div className={`${styles.text}`}>
                <h2>Contact information</h2>
                <p>
                  For general inquiries about the collaboratory or for
                  collaboration/funding opportunities, please contact Jim (PI):
                </p>
                <p>
                  Email:{" "}
                  <a
                    style={{ color: "white", textDecoration: "underline" }}
                    href="mailto:jrgreen@sce.carleton.ca"
                  >
                    jrgreen@sce.carleton.ca
                  </a>
                  <br />
                  Tel: (613) 520-2600 x1463 <br />
                  Fax: (613) 520-5727
                </p>
                <p>
                  Contact information of other collab members is available in
                  their{" "}
                  <a
                    style={{ color: "white", textDecoration: "underline" }}
                    href="/team"
                  >
                    profile
                  </a>
                  .
                </p>
                <h2>Location</h2>
                <p>
                  The collaboratory is located on the Carleton University
                  campus, about 15 minutes away from the Ottawa International
                  Airport and 15 minutes away from the Byward Market.
                </p>
                <p>
                  Our offices are situated in the Canal Building (Rm 6105), a
                  modern, eco-friendly building that offers an incredible view
                  on the Rideau Canal, one of the longest skating rink in the
                  world come winter.
                </p>
              </div>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d879.590375917792!2d-75.69916087885899!3d45.38405417434732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cce0676261dae75%3A0xd38a2e7b64f9ee4d!2sCanal%20Building!5e0!3m2!1sen!2sca!4v1590851071790!5m2!1sen!2sca" />
            </div>
          </div>
          <div className={`${styles.flexEnd}`}>
            <div className={`${styles.blueBlock}`}>
              <div className={`${styles.text}`}>
                <h2>Joining cuBIC</h2>
                <p>
                  The collaboratory is frequently on the lookout for strong,
                  motivated students to join its ranks. The collaboratory values
                  skills that are relevant to the research that it conducts, and
                  students who succeed best in the collaboratory tend to have
                  strong skills in:
                  <ul>
                    <li>Software/web development;</li>
                    <li>Machine learning and/or deep learning;</li>
                    <li>Statistics;</li>
                    <li>Science communication (written and oral).</li>
                  </ul>
                </p>
                <p>
                  Demonstrated experience in the industry and/or in academic
                  laboratories is also considered to be a strong asset in
                  students wishing to join the collaboratory.
                </p>
                <p>
                  If you believe that you would succeed at cuBIC and are
                  motivated to pursue a graduate degree, please contact our PI{" "}
                  <a
                    style={{ color: "white", textDecoration: "underline" }}
                    href="mailto:jrgreen@sce.carleton.ca"
                  >
                    James Green
                  </a>
                  , with a CV and a description of how your skills and
                  experience could be applicable to problems (see publications)
                  we tackle in the collaboratory.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
