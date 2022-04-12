import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GlowCard from "./GlowCard";

ReactDOM.render(
    <div>
    <h1 className={'header'}>Coming Soon</h1>
    <GlowCard message={'Aaryan Pagar'} />
    </div>,
  document.querySelector('#root')
);