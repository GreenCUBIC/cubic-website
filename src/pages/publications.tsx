import React, { useState } from "react";
import yaml from "js-yaml";
import Showdown from "showdown";
import Select from "react-select";
import Layout from "../components/Layout";
import Button from "../components/Button";
import ContentLayout from "../components/ContentLayout";
import * as styles from "./publications.module.scss";
import publications from "../../static/publications.yaml";
import members from "../../static/members.yaml";

export const formatJournal = (entry) => {
  const converter = new Showdown.Converter();
  const vol = `${entry.volume}`;
  const no = entry.number ? `(${entry.number})` : "";
  const pages = entry.pages ? `:${entry.pages}` : "";
  const doi = entry.doi
    ? `, doi:[${entry.doi}](http://doi.org/${entry.doi})`
    : "";
  const formatted = `${entry.authors.join(", ")}, ${entry.year}. "${
    entry.title
  }", *${entry.journal}* ${
    entry.status == "in press"
      ? ", *in press*"
      : `${vol}` + `${no}` + `${pages}`
  }${doi}.`;
  return converter.makeHtml(formatted).replace("<p>", "").replace("</p>", "");
};

export const formatConference = (entry) => {
  const converter = new Showdown.Converter();
  const vol = `${entry.volume}`;
  const no = entry.number ? `(${entry.number})` : "";
  const pages = entry.pages ? `:${entry.pages}` : "";
  const doi = entry.doi
    ? `, doi:[${entry.doi}](http://doi.org/${entry.doi})`
    : "";
  const formatted = `${entry.authors.join(", ")}, "${entry.title}", *${
    entry.conference
  }*, ${entry.location}, ${entry.date}${doi}`;
  return converter.makeHtml(formatted).replace("<p>", "").replace("</p>", "");
};

const Publications = () => {
  const [typeFilter, setTypeFilter] = useState(null);
  const [allJournalsShown, setAllJournalsShown] = useState(false);
  const [allConferencesShown, setAllConferencesShown] = useState(false);
  const [selectedAuthor, setSelectedAuthor] = useState<any>({
    value: "",
    label: "All",
  });

  const isAuthorSelected = () => {
    return !!selectedAuthor.value;
  };

  const getFilteredJournalPubs = () => {
    const journalPubs = publications
      .filter((pub) => pub.type === "article")
      .filter((pub, i) => {
        if (selectedAuthor.value) {
          return pub.memberids && pub.memberids.includes(selectedAuthor.value);
        } else {
          return !allJournalsShown ? i < 10 : true;
        }
      });

    if (journalPubs.length > 0) {
      return journalPubs.map((pub, i) => (
        <div
          className={`${styles.journalPub} ${i % 2 === 0 && styles.inverted}`}
          dangerouslySetInnerHTML={{
            __html: formatJournal(pub),
          }}
        />
      ));
    } else {
      return (
        <p>
          {selectedAuthor.label} currently doesn't have any journal
          publications, but they might in a bit! 😉
        </p>
      );
    }
  };

  const numJournalPubs = () => {
    return publications
      .filter((pub) => pub.type === "article")
      .filter((pub, i) => {
        if (selectedAuthor.value) {
          return pub.memberids && pub.memberids.includes(selectedAuthor.value);
        } else {
          return true;
        }
      }).length;
  };

  const numConferencePubs = () => {
    return publications
      .filter((pub) => pub.type === "conference")
      .filter((pub, i) => {
        if (selectedAuthor.value) {
          return pub.memberids && pub.memberids.includes(selectedAuthor.value);
        } else {
          return true;
        }
      }).length;
  };

  const getFilteredConferencePubs = () => {
    const conferencePubs = publications
      .filter((pub) => pub.type === "conference")
      .filter((pub, i) => {
        if (selectedAuthor.value) {
          return pub.memberids && pub.memberids.includes(selectedAuthor.value);
        } else {
          return !allConferencesShown ? i < 10 : true;
        }
      });

    if (conferencePubs.length > 0) {
      return conferencePubs.map((pub, i) => (
        <div
          className={`${styles.journalPub} ${i % 2 === 0 && styles.inverted}`}
          dangerouslySetInnerHTML={{
            __html: formatConference(pub),
          }}
        />
      ));
    } else {
      return (
        <p>
          {selectedAuthor.label} currently doesn't have any conference
          publications, but they might in a bit! 😉
        </p>
      );
    }
  };

  return (
    <Layout title="cuBIC | Publications">
      <ContentLayout>
        <h1>Publications</h1>
        You can view all papers published by cuBIC or browse by (recent) lab
        member.
        <div style={{ width: 300 }}>
          <Select
            value={selectedAuthor}
            onChange={(author) => setSelectedAuthor(author)}
            options={[{ value: "", label: "All" }].concat(
              members
                .filter((member) => member.memberid !== "jrgreen")

                .map((member) => {
                  return { value: member.memberid, label: member.name };
                })
            )}
          />
        </div>
        <h2>Journal papers ({numJournalPubs()})</h2>
        {getFilteredJournalPubs()}
        <div>
          {!allJournalsShown && (
            <Button onClick={() => setAllJournalsShown(true)}>Show all</Button>
          )}
        </div>
        <h2>Conference papers ({numConferencePubs()})</h2>
        {getFilteredConferencePubs()}
        <div>
          {!allConferencesShown && (
            <Button onClick={() => setAllConferencesShown(true)}>
              Show all
            </Button>
          )}
        </div>
        <h2>Datasets</h2>
        <p>
          cuBIC takes great pride in sharing its data whenever possible. Please
          take a look at our datasets in our Dataverse portal.
        </p>
        <a
          href="https://dataverse.scholarsportal.info/dataverse/CUBIC"
          target="_blank"
        >
          <img src="/images/misc/dataverse-logo.png" />
        </a>
      </ContentLayout>
    </Layout>
  );
};

export default Publications;
