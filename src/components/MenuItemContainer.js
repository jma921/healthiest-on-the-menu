import React, { Component } from 'react';
import info from '../images/info.svg';
import list from '../images/list.svg';
import InfoIcon from './InfoIcon';
import ListIcon from './ListIcon';
import MenuItem from './MenuItem';
import RestrauntInfo from './RestrauntInfo';
import '../grid.css';

const primaryColor = '#2ecc71';

class MenuItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: 'info'
    };
  }
  render() {
    console.log(this.props);
    const { menuItem, sideImage, restraunt } = this.props;
    let sideSection = null;
    if (this.state.active === 'info') {
      sideSection = <RestrauntInfo restraunt={restraunt} />;
    }
    if (this.state.active === 'list') {
      sideSection = <MenuItem menuItem={menuItem} />;
    }
    return (
      <div className="row" style={styles.containerStyle}>
        <div className="col-sm-4" style={styles.leftSectionStyle}>
          <img
            style={styles.leftSectionImageStyle}
            src={sideImage}
            alt="Side Image"
          />
        </div>
        <div
          className="col-sm-1 middle-sm around-sm"
          style={styles.middleSectionStyle}
        >
          <div
            style={
              this.state.active === 'info'
                ? styles.iconContainerActive
                : styles.iconContainer
            }
          >
            <a
              style={styles.iconLinkStyle}
              onClick={() => this.setState({ active: 'info' })}
            >
              <InfoIcon
                fill={
                  this.state.active === 'info' ? `${primaryColor}` : 'black'
                }
                width="24"
                height="24"
              />
            </a>
          </div>
          <div
            style={
              this.state.active === 'list'
                ? styles.iconContainerActive
                : styles.iconContainer
            }
          >
            <a
              style={styles.iconLinkStyle}
              onClick={() => this.setState({ active: 'list' })}
            >
              <ListIcon
                fill={
                  this.state.active === 'list' ? `${primaryColor}` : 'black'
                }
                width="24"
                height="24"
              />
            </a>
          </div>
        </div>
        <div className="col-sm-7" style={styles.rightSectionStyle}>
          {sideSection}
        </div>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    borderRadius: '6px'
  },
  leftSectionStyle: {},
  leftSectionImageStyle: {
    width: '100%',
    borderTopLeftRadius: '6px',
    borderBottomLeftRadius: '6px'
  },
  middleSectionStyle: {
    padding: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRight: '1px solid #dedede'
  },
  iconContainer: {
    width: '100%',
    paddingTop: 14,
    paddingBottom: 37,
    height: 40,
    textAlign: 'center',
    marginRight: 3
  },
  iconContainerActive: {
    width: '100%',
    paddingTop: '14px',
    paddingBottom: 37,
    height: 40,
    textAlign: 'center',
    borderRight: `3px solid ${primaryColor}`
  },
  iconLinkStyle: {
    cursor: 'pointer'
  },
  rightSectionStyle: {}
};

export default MenuItemContainer;
