import React from 'react';
import keto from '../images/KetoLogo.png';
import ministry from '../images/MinistryLogo.png';
import './css/LogoBar.css';

export default function LogoBar(){
    return(
        <div className='LogoBar'>
            <img src={keto} alt="KheloIndiaEnglishLogo" className='keto'/>
            <img src={ministry} alt="KheloIndiaMinistryLogo" className='ministry'/>
        </div>
    );
}