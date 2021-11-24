import * as React from "react";
import { useState } from "react";

import * as styles from "./NewsBar.module.scss";

const NewsBar = (news) => {
  const [selectedIndex, setIndex] = useState(0);
  setInterval(() => {
    if (selectedIndex === news.news.length - 1) {
      setIndex(0);
    } else {
      setIndex(selectedIndex + 1);
    }
  }, 10000);
  return (
    <div className={styles.newsbar}>
      <b>{news.news[selectedIndex].date}:</b> {news.news[selectedIndex].text}
    </div>
  );
};

export default NewsBar;
