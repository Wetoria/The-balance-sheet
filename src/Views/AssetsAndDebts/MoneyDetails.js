class Detail {
  constructor(props, refreshFunc) {
    if (!props) {
      this.name = undefined;
      this.amount = 0;
      this.children = [];
    }
    if (props instanceof Object) {
      for (const [key, value] of Object.entries(props)) {
        if (key === 'children') {
          this[key] = value.map((child) => {
            return new Detail(child, refreshFunc);
          });
        } else {
          this[key] = value;
        }
      }
    }
    this.refreshFunc = refreshFunc;
  }

  addNewChild = () => {
    if (!this.children) {
      this.children = [];
    }
    const {
      children,
    } = this;
    const newDetail = new Detail({
      key: `${this.key}-${children.length}`,
      name: '',
      amount: 0,
      children: [],
    }, this.refreshFunc);
    children.push(newDetail);
    this.refreshDom();
  }

  hasChildren = () => {
    return this.children && this.children.length;
  }

  removeTarget = (target, rules = (current, target) => (current.key !== target.key)) => {
    if (this.children) {
      this.children = this.children.filter(current => rules(current, target));
    }
    this.refreshChildrenKey();
    this.refreshDom();
  }

  update = (key, value) => {
    if (this.hasChildren() && key === 'amount') {
      return;
    }
    this[key] = value;
    this.refreshDom();
  }

  refreshChildrenKey = () => {
    const { children } = this;
    if (!children || !children.length) {
      this.amount = undefined;
      return;
    };
    children.forEach((child, index) => {
      child.key = `${this.key}-${index}`;
    });
    this.refreshDom();
  }

  refreshDom = () => {
    console.log(this.refreshFunc);
    if (this.refreshFunc && this.refreshFunc instanceof Function) {
      this.refreshFunc();
    }
  }

  refreshTotal = () => {
    const { children } = this;
    const calcTotal = (parent, child) => {
      if (child.amount && typeof child.amount === 'number') {
        parent.amount += child.amount;
      }
    }
    this.recursive(children, this, 2, (child, parent) => {
      parent.amount = 0;
      parent.children.forEach((child) => {
        calcTotal(parent, child);
      });
    });
  }

  recursive = (nodes, parent, order = 1, func = () => { }) => {
    if (!nodes || !nodes.length) return;
    nodes.forEach((node) => {
      if (order === 1) {
        func(node, parent);
        this.recursive(node.children, node, order, func);
      }
      if (order === 2) {
        this.recursive(node.children, node, order, func);
        func(node, parent);
      }
    });
  }
}

export default Detail;
