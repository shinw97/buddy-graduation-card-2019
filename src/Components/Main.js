import React from 'react';
import KamWoh from './KamWoh';
import YuKang from './YuKang';
import GanJie from './GanJie';
import FirstPage from './FirstPage';
import LastPage from './LastPage';
import ScrollableAnchor from 'react-scrollable-anchor';
import './myStyle.css'
import Fireworks from './Fireworks';

class Main extends React.Component {
componentDidMount() {
  alert('Welcome to our zero-budget virtual graduation card!')
}

  render() {
    return (
        <div>
          <a href="#main" className="float">
            <i className="fa fa-level-up my-float"></i>
          </a>
          <Fireworks/>
          <ScrollableAnchor id={'main'}>
            <div/>
          </ScrollableAnchor>
          <FirstPage/>
          <ScrollableAnchor id={'kamwoh'}>
            <div/>
          </ScrollableAnchor>
          <Fireworks/>
          <KamWoh/>
          <ScrollableAnchor id={'yukang'}>
            <div/>
          </ScrollableAnchor>
          <Fireworks/>
          <YuKang/>
          <ScrollableAnchor id={'ganjie'}>
            <div/>
          </ScrollableAnchor>
          <Fireworks/>
          <GanJie/>
          <ScrollableAnchor id={'signature'}>
            <div/>
          </ScrollableAnchor>
          <Fireworks/>
          <LastPage/>
        </div>
    );
  }
}

export default Main;