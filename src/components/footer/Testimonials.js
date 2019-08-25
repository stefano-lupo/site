import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const TESTIMONIALS = [
  {
    "description": "AELF has been an important resource to our airline for years and has come to be our genuine partner. AELF’s team seeks to understand our needs and is willing to work within our parameters.Their technical expertise is very beneficial. We look forward to continuing our relationship for years to come.",
    "author": "Juan Bracamonte",
    "role": "President",
    "company": "Avior Airlines"
  },
  {

  }, 
  {
    "description": "Presidio and AELF bring an impressive capacity for working in complex environments and under time pressure. Through ups and downs in our business, and in challenging cases, the team showed outstanding creativity in developing solutions that were “win-win” for both parties. Fun to work with, highly reliable and efficient",
    "author": "Gheorge Racaru",
    "role": "Director",
    "company": "General Blue Air"
  },
  {
    "description": "Presidio/AELF is comprised of a smart, creative and nimble team that has always come through for us. They leased aircraft to us very early in our operation and together we have achieved a lot of mutual success as we have significantly grown the airline into one of the largest charter operators in the USA.",
    "author": "Jeff Conry",
    "role": "President",
    "company": "Swift Air"
  },
  {
    "description": "Presidio has proven to be very competent, with strong technical and financial expertise. A capable counterparty, but also flexible when we needed it. We’ve established a mutual trust and all of our transactions together have been proven to be successful.",
    "author": "Peter Ivanik",
    "role": "Vice President",
    "company": "Eastok Avia"
  }
]

export default class Testimonials extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      testimonialIndex: 0,
    }
  }

  cycle() {

  }

  render() {
    return (

    )
  }
}