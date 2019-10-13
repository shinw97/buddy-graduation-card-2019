import React from 'react';
import ganjie from '../res/ganjie.jpg'
import wishes from '../res/wishes-gj.PNG'
import plane from '../res/plane1.png';

class GanJie extends React.Component {
  render() {
    return (
        <div className={'full-height-ganjie'}>
          <div className={'rounded-div'}>
            <img className={'photo-ratio-1'} src={ganjie}/>
            <img src={wishes} className={'wishes'}/>
          </div>
          <img src={plane} className={'plane-1'}/>
        </div>
    );
  }
}

export default GanJie;