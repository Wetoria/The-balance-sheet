import React, { Component } from 'react';
import {
  Row,
  Icon,
  Modal,
  Input,
  InputNumber,
} from 'antd';

const { confirm } = Modal;

class DetailRow extends Component {

  handleMinus = (parent, current) => {
    const hasChildren = current.children && current.children.length;
    const thiz = this;
    if (hasChildren) {
      confirm({
        title: '确认删除?',
        cancelText: '取消',
        okText: '确认',
        onOk() {
          thiz.removeCurrent(parent, current);
        },
        onCancel() { },
      });
    } else {
      this.removeCurrent(parent, current);
    }
  }

  removeCurrent = (parent, current) => {
    parent.removeTarget(current);
  }

  handlePlus = (current) => {
    current.addNewChild();
  }

  handleChangeName = (event, data) => {
    data.update('name', event.target.value);
  }

  handleChangeAmount = (value, data) => {
    data.update('amount', value);
  }

  render() {
    const {
      data = {},
      parent,
    } = this.props;
    const {
      amount = 0,
    } = data;
    return (
      <Row
        type="flex"
        justify="space-between"
        align="middle"
      >
        <span>
          <Input
            size="small"
            value={data.name}
            onChange={(e) => this.handleChangeName(e, data)}
          />
        </span>
        <span>
          {
            data.hasChildren() ? <span>{amount.toFixed(2) }</span>
              : <InputNumber
                size="small"
                style={{ width: '130px' }}
                precision={2}
                value={data.amount}
                onChange={(val) => this.handleChangeAmount(val, data)}
              />
          }
          <Icon
            type="plus-circle"
            style={{
              cursor: 'pointer',
              marginLeft: '15px',
            }}
            onClick={() => this.handlePlus(data)}
          />
          <Icon
            type="minus-circle"
            style={{
              cursor: 'pointer',
              marginLeft: '5px',
            }}
            onClick={() => this.handleMinus(parent, data)}
          />
        </span>
      </Row>
    );
  }
}

export default DetailRow;
