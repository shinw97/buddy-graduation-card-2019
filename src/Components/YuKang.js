import React from 'react';
import yukang from '../res/yukang.jpg'
import wishes from '../res/wishes-yk.PNG'
import testWishes from '../res/test-wishes.PNG'
import plane from '../res/plane1.png'
class YuKang extends React.Component {
  render() {
    return (
        <div className={'full-height-yukang'}>
          <img src={plane} className={'plane-2'}/>
          <div className={'rounded-div'}>
            <img src={wishes} className={'wishes-left'}/>
            <img className={'photo-ratio-2'} src={yukang}/>
          </div>
        </div>
    );
  }
}

export default YuKang;