import React from "react";
import LogoBar from "./LogoBar";
import TitleRibbon from "./TitleRibbon";
import ProposalList from "./ProposalList";
import SearchBar from "./SearchBar";

import DummyTender from "./AdminDashboard/DummyTender";
const Home = () => {
  return (
    <div className="HomePage">
      <LogoBar />
      <TitleRibbon title="Proposals" bgColor="rgba(196,23,23,1)" />
      <br />

      <SearchBar />
      <br />
      <ProposalList />
    </div>
  );
};

export default Home;
