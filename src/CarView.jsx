import React from 'react';
import { Button, Container, Header } from 'semantic-ui-react';

const CarView = (props) => (
  <div className="ui top attached menu">
    <div className="ui dropdown icon item">
      <i className="wrench icon"></i>
      <div className="menu">
        <div className="item">
          <i className="dropdown icon"></i>
          <span className="text">New</span>
          <div className="menu">
            <div className="item">Document</div>
            <div className="item">Image</div>
          </div>
        </div>
        <div className="item">
          Open...
        </div>
        <div className="item">
          Save...
        </div>
        <div className="item">Edit Permissions</div>
        <div className="divider"></div>
        <div className="header">
          Export
        </div>
        <div className="item">
          Share...
        </div>
      </div>
    </div>
    <div className="right menu">
    </div>
  </div>


);

export default CarView;