import React from 'react';
import './css/ProposalListItem.css'
import ProposalButton from './ProposalBtn';

export default function ProposalListItem(props){
    return(
        <div className='ProposalListItem'>
            <div className='ProposalTitle'>
                {props.TitleName}
            </div>
            <div className='ProposalBody'>
                <div className='ProposalDesc'>
                    {props.Desc}
                </div>
                <div className='ProposalBtnGrp'>
                    <ProposalButton value="Download" link=""/>
                    <ProposalButton value="Apply" link="/pform"/>
                </div>
            </div>
        </div>
    );
}