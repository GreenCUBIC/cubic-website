import * as React from "react";
import { useState } from "react";

import * as styles from "./NewsBar.module.scss";

const NewsBar = (news) => {
  const [selectedIndex, setIndex] = useState(0);
  return (
    <div className={styles.wrapper}>
      <div className={styles.newsbar}>
        <div
          style={{ cursor: "pointer" }}
          onClick={() =>
            setIndex(
              selectedIndex === 0 ? news.news.length - 1 : selectedIndex - 1
            )
          }
        >
          <i
            className={`fas fa-chevron-left`}
            style={{ height: 20, width: 20 }}
          ></i>
        </div>
        <div>
          <b>{news.news[selectedIndex].date}:</b>{" "}
          {news.news[selectedIndex].text}
        </div>
        <div
          onClick={() =>
            setIndex(
              selectedIndex === news.news.length - 1 ? 0 : selectedIndex + 1
            )
          }
        >
          <i
            style={{ cursor: "pointer" }}
            className={`fas fa-chevron-right`}
            style={{ height: 20, width: 20 }}
          ></i>
        </div>
      </div>
      <div className={styles.circlesBar}>
        {news.news.map((news, i) => (
          <div onClick={() => setIndex(i)} style={{ cursor: "pointer" }}>
            <i
              className={`fa${selectedIndex === i ? "s" : "r"} fa-circle ${
                styles.circle
              }`}
              style={{ height: 5, width: 5 }}
            ></i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsBar;
