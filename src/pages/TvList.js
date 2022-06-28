import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TvForm from '../components/TvForm';
import AddTVShow from './AddTVShow';

const TvList = ({ tvListItem }) => {

  return (
    <div className='h-100 tv-add '>
      <Container>
        <Col>
          <Row>
            <h1>{tvListItem.show}</h1>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default TvList;
