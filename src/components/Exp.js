
import React from 'react';
import ReactDOM from 'react-dom';

import './Expcss.css';

function Name(props)
{

    const newdate =new Date(2021,11,18);
    const value={
        name:'chandra',
        last:'prakash',
    };
    console.log(props);
    // const Date = props.date.toLocaleString('en-US',{day:'2-digit'});
    const Month = props.date.toLocaleString('en-US',{month:'long'});
    const Year = props.date.getFullYear();
return(

    <div>

    <h1 className="topnav">Header</h1>
    <h2>{newdate.toISOString()}</h2>
     <h2>{Math.random()}</h2>
     <h2>{value.name}</h2>
     <h2>{Month}</h2>
    <h3 className="myclass">ReactDev</h3>;

    </div>

);    
}

export default Name;