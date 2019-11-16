import React, { Component } from 'react';
import TreeDraggable from './TreeDraggable';
import DetailRow from './DetailRow';
import {
  Tree,
  Icon,
} from 'antd';
import './Details.css';
import MoneyDetail from 'src/Views/AssetsAndDebts/MoneyDetails';

const { TreeNode } = Tree;

const commonBorder = '1px solid black'

class Details extends Component {
  state = {
    treeData: this.props.data || [],
  }

  refreshTree = (tree) => {
    this.setState({
      treeData: tree || this.state.treeData,
    });
  }

  addNew = () => {
    const { treeData } = this.state;
    const newDetail = new MoneyDetail({
      key: `${treeData.length}`,
      name: '',
      amount: null,
      children: [],
    });
    treeData.push(newDetail);
    this.setState({
      treeData,
    });
  }

  render() {
    const {
      treeData,
    } = this.state;
    const loop = (data, parent) =>
      data.map(item => {
        if (item.children && item.children.length) {
          return (
            <TreeNode
              key={item.key}
              style={{ cursor: 'default' }}
              title={
                <DetailRow
                  data={item}
                  parent={parent}
                  onSuccess={this.refreshTree}
                />
              }
            >
              {loop(item.children, item)}
            </TreeNode>
          );
        }
        return (
          <TreeNode
            key={item.key}
            style={{ cursor: 'default' }}
            title={
              <DetailRow
                data={item}
                parent={parent}
                onSuccess={this.refreshTree}
              />
            }
          />
        );
      });
    return (
      <div
        style={{
          display: 'block',
          position: 'relative',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          borderTop: commonBorder,
          borderBottom: commonBorder,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            overflowY: 'scroll',
            paddingBottom: '50px',
          }}
        >
          <TreeDraggable>
            {loop(treeData.children, treeData)}
          </TreeDraggable>
        </div>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: '20px',
            position: 'absolute',
            bottom: '10px',
            right: '20px',
            border: '1px solid #DCDCDC',
            background: 'white',
            cursor: 'pointer',
            textAlign: 'center',
            lineHeight: '40px',
          }}
          onClick={this.addNew}
        >
          <Icon type="plus" style={{ fontSize: '30px' }} />
        </div>
      </div>
    );
  }
}

export default Details;
