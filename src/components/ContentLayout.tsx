import * as React from "react";
import * as styles from "./ContentLayout.module.scss";

interface Props {
  children: any;
}

const ContentLayout = (props: Props) => {
  return <div className={`${styles.container}`}>{props.children}</div>;
};

export default ContentLayout;
