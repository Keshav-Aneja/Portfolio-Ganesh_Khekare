import React from "react";
import Heading from "../components/Heading";
import Subheading from "../components/Subheading";
import { researchTableData } from "../data/ResearchTable";
import ResearchPublicationList from "../components/ResearchPublicationList";
import Table from "../components/Table";
const Research = () => {
  return (
    <div className="w-full h-full font-poppins">
      <Heading title={"Research"} />
      <div className="w-[80%]">
        The research section serves as a comprehensive repository showcasing my
        academic endeavors and contributions to the realm of knowledge. It
        encapsulates a wealth of information encompassing research publications,
        their intricate details, and pertinent profile links. In essence, the
        research section is a testament to my dedication to advancing knowledge,
        offering a glimpse into the intellectual journey that underpins my
        academic identity.
      </div>
      <Subheading title="Research Publications" />
      <Table data={researchTableData} />
      <Subheading title="Profile Links" />
      <ul className="profile-links">
        <li>Web of Science ResearcherID: R-7775-2019</li>
        <li>
          Orchid id:{" "}
          <a href="https://orcid.org/0000-0002-1687-4699">
            https://orcid.org/0000-0002-1687-4699
          </a>
        </li>
        <li>
          Publons Profile Link:{" "}
          <a href="https://publons.com/a/2984887/">
            https://publons.com/a/2984887/
          </a>
        </li>
        <li>
          Google Scholar Profile Link:
          <a href="https://scholar.google.com/citations?hl=en&user=SEekJEUAAAAJ&view_op=list_works">
            https://scholar.google.com/citations?hl=en&user=SEekJEUAAAAJ&view_op=list_works
          </a>
        </li>
        <li>
          Scopus Profile Link:
          <a href="https://www.scopus.com/authid/detail.uri?authorId=55792057400">
            https://www.scopus.com/authid/detail.uri?authorId=55792057400
          </a>
        </li>
      </ul>
      <Subheading title="Consultancy" />
      <ul className="consultancy">
        <li>
          Fog Server Setup for FusionSpan India Pvt. Ltd., IT Park, Nagpur from
          15th June 2018 to 14th December 2020, for Rs. 5,75,000
        </li>
      </ul>
      <Subheading title="Grant Received" />
      <ul className="grants">
        <li>
          Received a SEED Grant (RGEMS) of Rs.3,50,000 /- under the
          Multidisciplinary / Transdisciplinary Scheme - Research at Vellore
          Institute of Technology, Vellore.
        </li>
      </ul>
      <Subheading title="Publication Details" />
      <div className="publication-details w-full">
        <ResearchPublicationList />
      </div>
    </div>
  );
};

export default Research;
