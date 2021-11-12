import React, { useState } from "react";
import { Link } from "gatsby";
import path from "path";
import yaml from "js-yaml";
import Showdown from "showdown";
import Layout from "../components/Layout";
import ContentLayout from "../components/ContentLayout";
import * as styles from "./research.module.scss";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";
import members from "../../static/members.yaml";
import projects from "../../static/projects.yaml";

interface Props {
  projects: any;
  members: any;
}

const Research = () => {
  const [expandedProject, setExpandedProject] = useState(null);
  const getMemberNames = (project: any, members: any) => {
    return project.memberids.map((memberId: string) => {
      const matchingMembers = members.filter(
        (member: any) => member.memberid === memberId
      );
      if (matchingMembers.length === 0) {
        return null;
      } else {
        return matchingMembers[0].name;
      }
    });
  };

  const toggle = (index: number) => {
    if (expandedProject === index) setExpandedProject(null);
    else setExpandedProject(index);
  };

  return (
    <Layout title="cuBIC | Research">
      <ContentLayout>
        <h1>Research Projects</h1>
        <div>
          The collaboratory is actively pursing a variety of research projects
          rooted in biomedical informatics, signal processing, bioinformatics,
          and computer vision. Below are some of the ongoing research projects:
        </div>
        {projects.map((project: any, i: number) => (
          <div className={`${styles.projectCard}`}>
            <div className={`${styles.projectTitle}`}>
              {project.project}
              <div className={styles.icon} onClick={() => toggle(i)}>
                <i
                  className={`fa fa-${
                    expandedProject === i ? "times" : "bars"
                  } ${styles.icon}`}
                  style={{ height: 20, width: 20 }}
                ></i>
              </div>
            </div>
            <SlideDown>
              {expandedProject === i && (
                <div className={`${styles.projectContent}`}>
                  <img
                    src={`/images/project_images/${project.img}`}
                    className={`${styles.projectImg}`}
                  />
                  <div className={`${styles.projectDescription}`}>
                    <div className={`${styles.projectSection}`}>
                      <div className={`${styles.sectionTitle}`}>
                        Students involved
                      </div>
                      {getMemberNames(
                        project,
                        members.filter((member) => !member.alumni)
                      )
                        .filter((name) => name !== null)
                        .join(", ")}
                    </div>
                    <div className={`${styles.projectSection}`}>
                      {project.collaborators && (
                        <div className={`${styles.sectionTitle}`}>
                          Collaborators
                        </div>
                      )}
                      {project.collaborators &&
                        project.collaborators.map((collaborator) => (
                          <div>
                            <a href={collaborator.url}>{collaborator.name}</a>{" "}
                          </div>
                        ))}
                    </div>
                    <div className={`${styles.projectSection}`}>
                      <div className={`${styles.sectionTitle}`}>
                        Project description
                      </div>
                      <div
                        className={`${styles.projectDescription}`}
                        dangerouslySetInnerHTML={{
                          __html: new Showdown.Converter().makeHtml(
                            project.description
                          ),
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </SlideDown>
          </div>
        ))}
      </ContentLayout>
    </Layout>
  );
};

export default Research;
