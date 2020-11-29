import './App.css';
import boldimg from '../img/bold.svg'
import italicimg from '../img/italic.svg'
import underlineimg from '../img/underline.svg'
import left from '../img/align left.svg'
import center from '../img/align center.svg'
import right from '../img/align right.svg'
import justify from '../img/justify.svg'
import React, { useState } from 'react';

export default function App() {
  const [bold, boldActive] = useState(false);
  const [italic, italicActive] = useState(false);
  const [underline, underlineActive] = useState(false);
  const [align, alignButton] = useState(0);


  return (
    <div className="App">
      <header>
        <h1 className="title">Rich-Text</h1>
        <div className="buttons-align">
          <div className="bold-italic-undeline">
            <button onClick={() => boldActive(!bold)} className={bold ? 'button-active' : 'button-unactive'}><img src={boldimg} alt="bold" /></button>
            <button onClick={() => italicActive(!italic)} className={italic ? 'button-active' : 'button-unactive'}><img src={italicimg} alt="italic" /></button>
            <button onClick={() => underlineActive(!underline)} className={underline ? 'button-active' : 'button-unactive'}><img src={underlineimg} alt="underline" /></button>
          </div>

          <div className="align">
            <button onClick={() => alignButton(0)} className={align === 0 ? 'button-active align-button' : 'button-unactive align-button'}><img src={left} alt="left" /></button>
            <button onClick={() => alignButton(1)} className={align === 1 ? 'button-active align-button' : 'button-unactive align-button'}><img src={center} alt="center" /></button>
            <button onClick={() => alignButton(2)} className={align === 2 ? 'button-active align-button' : 'button-unactive align-button'}><img src={right} alt="right" /></button>
            <button onClick={() => alignButton(3)} className={align === 3 ? 'button-active align-button' : 'button-unactive align-button'}><img src={justify} alt="justify" /></button>
          </div>

          <select className="size-box">
            <option selected value="18">18</option>
            <option value="22">22</option>
            <option value="24">24</option>
            <option value="26">26</option>
          </select>
        </div>

        <textarea maxLength="410" placeholder="Digite o que quiser..." rows="10" autofocus></textarea>
      </header>
    </div>
  );
}
