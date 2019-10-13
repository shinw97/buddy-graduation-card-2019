import React from 'react';
import './myStyle.css';
import comic from '../res/graduation-comic-doodle-time-1254473.jpeg'
import firstPageImg from '../res/first-page.PNG';
import signatures from '../res/signatures.png'

class LastPage extends React.Component {
  render() {
    return (
        <div className={'full-height-main'}>
          <div className={'rounded-div-last'}>
            <img className={'grad-hat'} src={comic}/>
            <img className={'signatures'} src={signatures}/>
          </div>
        </div>

    );
  }
}

export default LastPage;