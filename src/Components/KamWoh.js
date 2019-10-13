import React from 'react';
import './myStyle.css';
import kamwoh from '../res/kamwoh.jpg'
import wishes from '../res/wishes-woh.PNG'
import plane from '../res/plane1.png';

class KamWoh extends React.Component {
  render() {
    return (
        <div className={'full-height-kamwoh'}>
          <div className={'rounded-div'}>
            <img className={'photo-ratio-1'} src={kamwoh}/>
            <img src={wishes} className={'wishes'}/>
          </div>
          <img src={plane} className={'plane-1'}/>
        </div>

    );
  }
}

export default KamWoh;