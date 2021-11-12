# cuBIC webpage

This repository holds the source code and assets for the cuBIC webpage. It
is built with [Gatsby](https://www.gatsbyjs.com/) which is a React-based
static site generator.

I built the website so that content can easily be added/modified in the
static folder without having to actually modify the source code in `src`.
The YAML files in `static` can be modified (by adding/modifying/removing entries, while
preserving structure). Other changes may require modifying the source code.

## Running locally

To build the webpage locally, you will need to have Node.js and Gatsby installed
on your machine. Instructions to install these should be easy to find for your
machine (Windows/macOS/Linux).

Once this is done, install the dependencies

```
npm install
```

To view the webpage locally, you can run in dev mode with the command (running
from project root)

```
gatsby develop
```

and browsing `http://localhost:8000`.

## Modifying the code/deploy

The website runs on Netlify, so changes will be immediate (excluding build time)
once pushed to the `master` branch.

## Adding an entry to Publications page

Entries to the Publications YAML file follow a similar format to a BibTeX record.

To add a new entry to the Publications page, add a new record to the top of `static/publications.yaml` file. The format of a record for a journal article is as follows:

```yaml
- title: "RGB-D Scene Analysis in the NICU"
  type: "article"
  projectid: monitoring
  year: 2021
  authors:
    - "Y Souley Dosso"
    - "K Greenwood" 
    - "J Harrold" 
    - "JR Green"
  memberids:
    - ysouleydosso
    - jrgreen
  journal: "Computers in Biology and Medicine"
  volume: "138"
  number: ""
  doi: "10.1016/j.compbiomed.2021.104873"
```

Make sure to reference the `projectid` of an existing project in the `static/projects.yaml` file, and the `memberids` of every contributing team member from the `static/members.yaml` file.

The format of a record for a conference paper is as follows: 

```yaml
- title: "Bottle-Feeding Intervention Detection in the NICU"
  type: conference
  conference:  "IEEE Engineering in Medicine and Biology Conference"
  date: "1-5 Nov 2021"
  authors:
    - Y Souley Dosso
    - K Greenwood
    - J Harrold
    - JR Green
  memberids:
    - ysouleydosso
    - jrgreen
  location: "Guadalajara, Mexico"
```

## Updating team member profile

To update your profile on the Team page you can change update the records found in the `static\members.yaml` following the same format:

```yaml
- name: Zein Hajj-Ali
  joined: September 2020
  memberid: zhajjali
  title: Masters Student
  interests: Machine Learning, Software Development, Systems Design
  email: zein.hajjali@carleton.ca
  website: http://zeinh.ca
  scholarurl: ""
  orcidurl: "https://orcid.org/0000-0003-3919-1193"
  img: hajj-ali.png
  degree: MASc
  thesis: TBD
  background: Computer Systems Engineering
  quote: For me, I am driven by two main philosophies, know more today about the world than I knew yesterday. And along the way, lessen the suffering of others. You'd be surprised how far that gets you. (Neil deGrasse Tyson)
  biography: I am a masters student interested in the use of Machine Learning in a wide range of applications. I would like to play a part in advancing the practical uses of machine learning and artificial intelligence as a whole in the medical field. I have an inclination towards academics and learning, and a desire to share my love of engineering with the world. Aside from that, I try to spend as much time as possible outdoors in the sun.
```