import React from "react";
import { Link } from "gatsby";
import Modal from "react-modal";
import * as styles from "./MemberProfile.module.scss";
import Button from "./Button";

const style = {
  content: {
    maxWidth: "700px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    width: "80%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
  },
};

const ExternalLink = (props) => (
  <div className={`${styles.externalLink}`}>
    <Link href={props.href}>{props.children}</Link>
  </div>
);

const MemberProfile = ({ isOpen, memberInfo, close }) => {
  if (!memberInfo) return null;
  return (
    <Modal isOpen={isOpen} style={style}>
      <div className={`${styles.imageAndName}`}>
        <img
          style={{ height: 140, marginRight: 15 }}
          src={`images/lab_members/${memberInfo.img}`}
        />
        <div>
          <div className={`${styles.memberName}`}>{memberInfo.name}</div>
          <div className={`${styles.memberTitle}`}>{memberInfo.title}</div>
          <div className={`${styles.contact}`}>
            {memberInfo.email && (
              <ExternalLink href={`mailto:${memberInfo.email}`} target="_blank">
                <i className="fa fa-envelope-square ai-2x"></i>
              </ExternalLink>
            )}
            {memberInfo.website && (
              <ExternalLink href={memberInfo.website} target="_blank">
                <i className="fas fa-globe-americas ai-2x"></i>
              </ExternalLink>
            )}
            {memberInfo.scholarurl && (
              <ExternalLink href={memberInfo.scholarurl} target="_blank">
                <i className="ai ai-google-scholar-square ai-2x"></i>
              </ExternalLink>
            )}
            {memberInfo.orcidurl && (
              <ExternalLink href={memberInfo.orcidurl} target="_blank">
                <i className="ai ai-orcid-square ai-2x"></i>
              </ExternalLink>
            )}
          </div>

          <div>
            <b>Joined: </b>
            {memberInfo.joined || "N/A"}
          </div>
          <div>
            <b>Thesis: </b>
            {memberInfo.thesis || "TBD"}
          </div>
          <div>
            <b>Interests: </b>
            {memberInfo.interests || "N/A"}
          </div>
        </div>
      </div>
      <div className={`${styles.memberBio}`}>{memberInfo.biography}</div>
      <div style={{ margin: 15 }}>
        <div style={{ textAlign: "center", fontWeight: "bold" }}>
          Favorite quote
        </div>
        <i>{memberInfo.quote || "N/A"}</i>
      </div>
      <Button onClick={close}>Close</Button>
    </Modal>
  );
};
export default MemberProfile;
