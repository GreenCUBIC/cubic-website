import React, { useState } from "react";
import fs from "fs";
import path from "path";
import yaml from "js-yaml";
import Member from "../components/Member";
import Layout from "../components/Layout";
import ContentLayout from "../components/ContentLayout";
import MemberProfile from "../components/MemberProfile";
import * as styles from "./team.module.scss";

import members from "../../static/members.yaml";

const Members = () => {
  const [selectedMemberId, setSelectedMemberId] = useState<string | null>(null);
  return (
    <Layout title="cuBIC | Team">
      <ContentLayout>
        <h1>Lab members</h1>
        <p>
          The collaboratory is composed of a set of highly motivated researchers
          working under the supervision of Professor James R. Green.
        </p>
        <h2>Our PI</h2>
        <div className={`${styles.memberGroup}`}>
          {members
            .filter((member) => member.degree === "PI")
            .map((member) => (
              <Member
                img={member.img}
                name={member.name}
                email={member.email}
                website={member.website}
                scholarurl={member.scholarurl}
                orcidurl={member.orcidurl}
                title={member.title}
                research={member.thesis}
                background={member.background}
                quote={member.quote}
                openProfile={() => setSelectedMemberId(member.memberid)}
              ></Member>
            ))}
        </div>

        <h2>PhD students</h2>
        <div className={`${styles.memberGroup}`}>
          {members
            .filter((member) => member.degree === "PhD")
            .map((member) => (
              <Member
                img={member.img}
                name={member.name}
                email={member.email}
                website={member.website}
                scholarurl={member.scholarurl}
                orcidurl={member.orcidurl}
                title={member.title}
                research={member.thesis}
                background={member.background}
                quote={member.quote}
                openProfile={() => setSelectedMemberId(member.memberid)}
              ></Member>
            ))}
        </div>
        <h2>MASc and MEng Students</h2>
        <div className={`${styles.memberGroup}`}>
          {members
            .filter((member) => ["MASc", "MEng"].includes(member.degree))
            .map((member) => (
              <Member
                img={member.img}
                name={member.name}
                email={member.email}
                website={member.website}
                scholarurl={member.scholarurl}
                orcidurl={member.orcidurl}
                title={member.title}
                research={member.thesis}
                background={member.background}
                quote={member.quote}
                openProfile={() => setSelectedMemberId(member.memberid)}
              ></Member>
            ))}
        </div>
      </ContentLayout>
      {members.map((member) => (
        <MemberProfile
          isOpen={selectedMemberId === member.memberid}
          memberInfo={member}
          close={() => setSelectedMemberId(null)}
        />
      ))}
    </Layout>
  );
};

export default Members;
