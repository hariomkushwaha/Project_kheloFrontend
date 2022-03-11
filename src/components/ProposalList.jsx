import React from "react";
import DummyTender from "./AdminDashboard/DummyTender";
import "./css/ProposalList.css";
import ProposalListItem from "./ProposalListItem";

export default function ProposalList() {
  return (
    <div className="ProposalList">
      {DummyTender.map((item) => (
        <ProposalListItem
          key={item.TenderID}
          TitleName={item.Title}
          Desc={item.WorkDescription}
          org={item.Organisation}
        />
      ))}
    </div>
  );
}
