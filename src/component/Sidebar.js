import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import './Work/css/work.css';

const CurrentAnchor = function(): string {
  const parts = window.location.href.split('#');
  return parts.length > 0 ? `#${parts[parts.length -1]}` : '';
}

// type Props = {
//   text: string,
//   anchor: string,
//   isActive: boolean,
//   index: number,
//   onClick: (index) => {}
// }
class SidebarItem extends Component {
  _getDisplayedIndex(index): string {
    return index < 10 ? `0${index}` : `${index}`;
  }

  render() {
    const {
      anchor,
      text,
      isActive,
      index,
      onClick
    } = this.props;
    return (
      <div className="side-bar-item">
        <div className={`side-bar-index ${isActive ? 'active-index' : ''}`}>
          {this._getDisplayedIndex(index)}
        </div>
        <Link
          className={`side-bar-link ${isActive ? 'active-link' : ''}`}
          to={anchor}
          scroll={el => el.scrollIntoView({ behavior: 'smooth', block: 'center' })}
          onClick={(e) => {
            if(!isActive) {
              onClick(index);
            } else {
              e.preventDefault();
              e.stopPropagation();
            }
          }}>
          {text}
        </Link>
      </div>
    );
  }
}

// type Props = {
//   title: string,
//   items: Array<{
//     text: string,
//     anchor: string,
//   }>
// }
export class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
  }

  componentDidMount() {
    window.addEventListener('wheel', this.handleScroll);
    this._handleInitial();
  };

  componentWillUnmount() {
    window.removeEventListener('wheel', this.handleScroll);
  };

  _handleInitial(param) {
    const initialIndex = this.props.items.findIndex(
      item => item.anchor === CurrentAnchor(),
    );
    if (initialIndex >= 0) {
      this.setState({
        activeIndex: initialIndex + 1,
      });
    }
  }

  handleScroll = (): void => {
    const numSec = document.getElementsByClassName("section-title").length;
    const firstElem = document.getElementsByClassName("section-title")[0];
    const firstElemTop = firstElem.offsetTop;

    for (let i = 1; i <= numSec; i ++) {
      const ele = document.getElementsByClassName("section-title")[i - 1];
      const scrollTop = window.pageYOffset;
      // if first anchor to top is less than 300, this will not fade in when scrolling up
      if(scrollTop - firstElemTop < -300) {
        this.setState({activeIndex: 0});
        return;
      }
      if (ele && ele.getBoundingClientRect) {
        const anchor_offset = ele.getBoundingClientRect().top;
        if(anchor_offset > 0 && anchor_offset < 300) {
          this.setState({activeIndex: i});
          return;
        }
      }
    }
  };

  render() {
    const renderedItems = this.props.items.map(
      (item, index) => {
        return <SidebarItem
          key={index}
          text={item.text}
          anchor={item.anchor}
          isActive={this.state.activeIndex === (index + 1)}
          index={index + 1}
          onClick={(clickedIndex) => {
            this.setState({activeIndex: clickedIndex});
          }}
        />;
      }
    );

    return (
      this.state.activeIndex >= 1 && <div className={"side-bar"}>
        <div className="side-bar-header">
          {this.props.title}
        </div>
        <div>
          {renderedItems}
        </div>
      </div>
    );
  }
}
