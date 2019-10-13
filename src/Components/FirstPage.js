import React from 'react';
import './myStyle.css';
import gradHat from '../res/grad-hat-vector.png';
import otterGrad from '../res/otter-grad.jpg';
import firstPageImg from '../res/first-page.PNG';
import ButtonFirst from './ButtonFirst';

class FirstPage extends React.Component {
  render() {
    return (
        <div className={'full-height-main gradient-page'}>
          <div className={'rounded-div-center'}>
            {/*<img className={'grad-hat'} src={otterGrad}/>*/}
            <img className={'wishes-left'} src={firstPageImg}/>
            <ButtonFirst/>
          </div>
        </div>

    );
  }
}

export default FirstPage;