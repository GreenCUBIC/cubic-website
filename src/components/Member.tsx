import React from "react";
import * as styles from "./Member.module.scss";
import Button from "./Button";

const Member = (props) => {
  return (
    <div
      className={`${styles.memberCard} ${props.fullWidth && styles.fullWidth}`}
    >
      <img
        style={{ height: 140 }}
        src={`/images/lab_members/${props.img || "na.jpg"}`}
      />
      <div className={`${styles.memberText}`}>
        <div className={`${styles.memberName}`}>{props.name}</div>
        <Button onClick={props.openProfile}>View Profile</Button>
      </div>
    </div>
  );
};

export default Member;
