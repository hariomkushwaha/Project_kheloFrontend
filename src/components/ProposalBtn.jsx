import React from "react";
import './css/ProposalButton.css';

export default function ProposalButton(props){
    return(
        <div className="ProposalButton">
            <span>{props.value}</span>
        </div>
    );
}