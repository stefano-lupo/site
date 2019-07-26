import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Image,
} from 'react-bootstrap';

import TeamMemberBio from './TeamMemberBio';

export default class TeamMember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingModal: false,
    };

    this.onMemberClick = this.onMemberClick.bind(this);
    this.onModalCloseButtonClick = this.onModalCloseButtonClick.bind(this);
  }

  componentDidMount() {

  }

  onMemberClick() {
    console.log("Showing modal");
    this.setState({
      showingModal: true,
    });
  }

  onModalCloseButtonClick() {
    console.log("Closing modal");
    this.setState({
      showingModal: false,
    });
  }

  render() {
    const { name, title, imgPath } = this.props;
    const { showingModal } = this.state;

    return (
      <Col sm={4} md={3}>
        <div className="thumbnail" onClick={this.onMemberClick}>
          <Image fluid src={imgPath} />
          <div className="caption">
            <p className="name">{name}</p>
            <p className="title">{title}</p>
          </div>
        </div>
        {<TeamMemberBio
          show={showingModal}
          onHide={this.onModalCloseButtonClick}
          name={name}
          title={title}
          imgPath={imgPath}
        />}
      </Col>
    );
  }
}

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
};
