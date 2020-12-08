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
  const [firstPart, firstPartArray] = useState([false, false, false])
  const [align, alignButton] = useState(0);
  const [addOrRemoveClasses, addOrRemoveClassesFunc] = useState(['', '', '', 'textarea-align-left', '']);
  const [textClasses, textClassesUsed] = useState('')

  const classActive = (pos='', teste = '') => {
    if (pos === 0) {
      if (!firstPart[0]) {
        addOrRemoveClasses[0] = 'textarea-bold'
      }
      else {
        addOrRemoveClasses[0] = ''
      }
    }
    else if (pos === 1) {
      if (!firstPart[1]) {
        addOrRemoveClasses[1] = 'textarea-italic'
      }
      else {
        addOrRemoveClasses[1] = ''
      }
    }
    else if (pos === 2) {
      if (!firstPart[2]) {
        addOrRemoveClasses[2] = 'textarea-underline'
      }
      else {
        addOrRemoveClasses[2] = ''
      }
    }
    else if (pos === 3) {
      addOrRemoveClasses[3] = teste
    }
    textClassesUsed(addOrRemoveClasses.join(' '));
  }

  const fontChange = (event) => {
    addOrRemoveClasses[4] = 'textarea-size-' + event.target.value.toString();
    classActive();
  }

  return (
    <div className="App">
      <header>
        <h1 className="title">Rich-Text</h1>
        <div className="buttons-align">
          <div className="bold-italic-undeline">
            <button onClick={() => { firstPartArray(firstPart.map((item, index) => { if (index === 0) { return !item } else { return item } })); classActive(0) }} className={firstPart[0] ? 'button-active' : 'button-unactive'}><img src={boldimg} alt="bold" /></button>
            <button onClick={() => { firstPartArray(firstPart.map((item, index) => { if (index === 1) { return !item } else { return item } })); classActive(1) }} className={firstPart[1] ? 'button-active' : 'button-unactive'}><img src={italicimg} alt="italic" /></button>
            <button onClick={() => { firstPartArray(firstPart.map((item, index) => { if (index === 2) { return !item } else { return item } })); classActive(2) }} className={firstPart[2] ? 'button-active' : 'button-unactive'}><img src={underlineimg} alt="underline" /></button>
          </div>

          <div className="align">
            <button onClick={() => { alignButton(0); classActive(3, 'textarea-align-left') }} className={align === 0 ? 'button-active' : 'button-unactive'}><img src={left} alt="left" /></button>
            <button onClick={() => { alignButton(1); classActive(3, 'textarea-align-center') }} className={align === 1 ? 'button-active' : 'button-unactive'}><img src={center} alt="center" /></button>
            <button onClick={() => { alignButton(2); classActive(3, 'textarea-align-right') }} className={align === 2 ? 'button-active' : 'button-unactive'}><img src={right} alt="right" /></button>
            <button onClick={() => { alignButton(3); classActive(3, 'textarea-align-justify') }} className={align === 3 ? 'button-active' : 'button-unactive'}><img src={justify} alt="justify" /></button>
          </div>

          <select className="size-box" onChange={fontChange}>
            <option defaultValue="18">18</option>
            <option value="22">22</option>
            <option value="24">24</option>
            <option value="26">26</option>
          </select>
        </div>

        <textarea maxLength="410" placeholder="Digite o que quiser..." rows="10" autoFocus className={textClasses}></textarea>
      </header>
    </div>
  );
}
