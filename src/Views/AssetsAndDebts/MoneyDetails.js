class Detail {
  constructor(props) {
    if (!props) {
      this.name = undefined;
      this.amount = null;
      this.children = [];
    }
    if (props instanceof Object) {
      for (const [key, value] of Object.entries(props)) {
        if (key === 'children') {
          this[key] = value.map((child) => {
            return new Detail(child);
          });
        } else {
          this[key] = value;
        }
      }
    }
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
      amount: null,
      children: [],
    });
    children.push(newDetail);
  }

  removeTarget = (target, rules = (current, target) => (current.key !== target.key)) => {
    if (this.children) {
      this.children = this.children.filter(current => rules(current, target));
      console.log(this.children);
    }
    this.refreshChildrenKey();
  }

  refreshChildrenKey = () => {
    const { children } = this;
    if (!children || !children.length) return;
    children.forEach((child, index) => {
      child.key = `${this.key}-${index}`;
      console.log(child);
    });
  }
}

export default Detail;
