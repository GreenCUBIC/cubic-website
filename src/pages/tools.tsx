import React, { useState } from "react";
import path from "path";
import yaml from "js-yaml";
import Showdown from "showdown";
import Layout from "../components/Layout";
import ContentLayout from "../components/ContentLayout";
import * as styles from "./tools.module.scss";

interface Props {
  tools: any;
}

const Tools = (props: Props) => {
  return (
    <Layout title="cuBIC | Tools">
      <ContentLayout>
        <h1>Tools</h1>
        <div style={{ flex: 20 }}>Please come back later...</div>
      </ContentLayout>
    </Layout>
  );
};

/*
export async function getStaticProps() {
  const toolsPath = path.resolve(
    process.cwd(),
    "public",
    "data",
    "tools.yaml"
  );
  
  const tools = yaml.safeLoad(fs.readFileSync(toolsPath, "utf-8"));
  return {
    props: {
    tools
    }
  };
}
 */

export default Tools;
