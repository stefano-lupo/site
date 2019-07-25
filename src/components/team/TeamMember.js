import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Image,
} from 'react-bootstrap';


export default class TeamMember extends React.Component {

  componentDidMount() {

  }

  render() {
    const { name, description, imgPath } = this.props;

    return (
      <Col sm={4} md={3}>
        <div className="thumbnail">
          <Image fluid src={imgPath} />
          <div className="caption">
            <p className="name">{name}</p>
            <p className="description">{description}</p>
          </div>
        </div>
      </Col>
    );
  }
}

TeamMember.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgPath: PropTypes.string.isRequired,
};
