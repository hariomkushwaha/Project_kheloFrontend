import React from 'react';
import './css/ProposalList.css';
import ProposalListItem from './ProposalListItem';

export default function ProposalList(){
    return(
        <div className='ProposalList'>
            <ProposalListItem 
            TitleName="Request For proposal for establishing fencing around the delhi stadium" 
            Desc="Request For proposal for establishing fencing around the delhi stadium, in Nehru Stadium located in new delhi."
            />
            <ProposalListItem 
            TitleName="Request For proposal for Requirements of Sports Kit" 
            Desc="Request For proposal for establishing fencing around the delhi stadium, in Nehru Stadium located in new delhi."
            />
            <ProposalListItem 
            TitleName="Request For proposal for organising an Event of Archery." 
            Desc="Request For proposal for establishing fencing around the delhi stadium, in Nehru Stadium located in new delhi."
            />
        </div>
    );
}