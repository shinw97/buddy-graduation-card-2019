import React from 'react';
import './buttonStyle1.css';

class ButtonFirst extends React.Component {

  render() {
    return (
        <div className={'div-button'}>
          <a href={'#kamwoh'}>
            <button className={'button-kamwoh'}>
              <span>Kam Woh</span>
            </button>
          </a>
          <a href={'#yukang'}>
            <button className={'button-yukang'}>
              <span>Yu Kang</span>
            </button>
          </a>
          <a href={'#ganjie'}>
            <button className={'button-ganjie'}>
              <span>Cassandra</span>
            </button>
          </a>
          <a href={'#signature'}>
            <button className={'button-sign'}>
              <span>Signatures</span>
            </button>
          </a>
        </div>
    );
  }
}

export default ButtonFirst;