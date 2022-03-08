import React from 'react';
import './css/TitleRibbon.css';

export default function TitleRibbon(props){
    return(
        <div className='TitleRibbon' style={{ backgroundColor: props.bgColor }}>
            <h1>{props.title}</h1>
        </div>
    );
}