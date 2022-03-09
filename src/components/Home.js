import React from "react";
import LogoBar from "./LogoBar";
import TitleRibbon from "./TitleRibbon";
import ProposalList from "./ProposalList";

const Home = () => {
  return (
    <>
      <LogoBar />
      <TitleRibbon title="Proposals" bgColor="rgba(196,23,23,1)" />
      <br />
      <br />
      <ProposalList />
    </>
  );
};

export default Home;
