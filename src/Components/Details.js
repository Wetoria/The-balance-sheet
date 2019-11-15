import React, { Component } from 'react';
import TreeDraggable from './TreeDraggable';

class Details extends Component {

  render() {
    const {
      data = [],
    } = this.props;
    return (
      <div
        style={{
          display: 'block',
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            overflowY: 'scroll',
          }}
        >
          <TreeDraggable data={data}>
          </TreeDraggable>
        </div>
      </div>
    );
  }
}

export default Details;
