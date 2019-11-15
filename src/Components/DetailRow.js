import React, { Component } from 'react';
import {
  Row,
  Icon,
} from 'antd';

class DetailRow extends Component {

  handleMinus = (parent, current) => {
    console.log(parent, current);
    parent.children = parent.children.filter(child => child.key !== current.key);
    this.refreshChildrenKey(parent);
    this.onSuccess();
  }

  refreshChildrenKey = (node) => {
    const { children } = node;
    if (!children || !children.length) return;
    children.forEach((child, index) => {
      child.key = `${node.key}-${index}`;
    });
  }

  handlePlus = (current) => {
    if (!current.children) {
      current.children = [];
    }
    const {
      children,
    } = current;
    children.push({
      key: `${current.key}-${children.length}`,
      title: '',
    });
    console.log(current);
    this.onSuccess();
  }

  onSuccess() {
    const {
      onSuccess,
    } = this.props;
    if (onSuccess && typeof onSuccess === 'function') {
      onSuccess();
    }
  }

  render() {
    const {
      data = {},
      parent,
    } = this.props;
    return (
      <Row>
        <span
          style={{
            float: 'left',
          }}
        >
          {data.title}
        </span>
        <span
          style={{
            float: 'right',
          }}
        >
          <Icon
            type="plus-circle"
            style={{
              cursor: 'pointer',
            }}
            onClick={() => this.handlePlus(data)}
          />
          {
            parent && (
              <Icon
                type="minus-circle"
                style={{
                  cursor: 'pointer',
                  marginLeft: '5px',
                }}
                onClick={() => this.handleMinus(parent, data)}
              />
            )
          }
        </span>
      </Row>
    );
  }
}

export default DetailRow;
