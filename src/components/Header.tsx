import * as React from "react";
import { useState } from "react";
import { Link } from "gatsby";
import * as styles from "./Header.module.scss";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const SECTIONS = [
  { name: "Home", href: "/" },
  { name: "Research", href: "/research" },
  { name: "Team", href: "/team" },
  { name: "Publications", href: "/publications" },
  { name: "Tools", href: "/tools" },
  { name: "Contact", href: "/contact" },
];

const Header = () => {
  const [expanded, toggleExpanded] = useState(false);
  return (
    <header className={`${styles.styledHeader}`}>
      <div className={`${styles.imageAndDrawer}`}>
        <img
          className={`${styles.logo}`}
          src="/images/logos/cubic-logo-blue-01.png"
          height={60}
          style={{ margin: 0 }}
        />
        <div className={styles.icon} onClick={() => toggleExpanded(!expanded)}>
          <i
            className={`fa fa-${expanded ? "times" : "bars"}`}
            style={{ height: 20, width: 20 }}
          ></i>
        </div>
      </div>
      <div className={`${styles.links}`}>
        {SECTIONS.map((section) => (
          <div className={`${styles.linkWrapper}`}>
            <Link href={section.href}>{section.name}</Link>
            <div />
          </div>
        ))}
      </div>
      <SlideDown>
        {expanded && (
          <div className={`${styles.mobileLinks} ${expanded}`}>
            {SECTIONS.map((section) => (
              <div className={`${styles.linkWrapper}`}>
                <Link to={section.href}>{section.name}</Link>
                <div />
              </div>
            ))}
          </div>
        )}
      </SlideDown>
    </header>
  );
};
export default Header;
