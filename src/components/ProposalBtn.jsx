import React from "react";
import './css/ProposalButton.css';

export default function ProposalButton(props){
    return(
        <a href={props.link} className="ProposalLink">
            <div className="ProposalButton">
                <span>{props.value}</span>
            </div>
        </a>
    );
}