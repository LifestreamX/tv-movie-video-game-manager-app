import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import MyVerticallyCenteredModal, {
  EditButton,
} from '../components/EditTvModal';

const TvList = ({ tvListItem, setTvListItem, setShow }) => {
  // Handle delete on Click
  const handleTvShowDelete = (id) => {
    const newTv = tvListItem.filter((list) => list.id !== id);
  };

  let navigate = useNavigate();

  const { id } = useParams();

  // Handle Edit on click
  const handleEdit = (id) => {
    const editLink = tvListItem.filter((list) => list.id === id);
    console.log(editLink[0].show);
  };

  return (
    <div className=' tv-list-wrapper d-flex justify-content-center  '>
      <Container className='mt-5 tv-container'>
        <Table variant='dark' striped bordered hover className='bg-dark  '>
          <thead className='fs-3'>
            <tr className='text-center'>
              <th>Show</th>
              <th>Year</th>
              <th>Seasons</th>
              <th>Current Season</th>
              <th>Current Episode</th>
            </tr>
          </thead>
          <tbody className='text-center'>
            {tvListItem?.map((list) => (
              <tr className='fs-4 fw-bold' key={list?.id}>
                <td>{list?.show}</td>
                <td>{list?.year}</td>
                <td>{list?.numberOfSeasons}</td>
                <td>{list?.myCurrentSeason}</td>
                <td>{list?.myCurrentEpisode}</td>
                <div className='d-flex justify-content-around'>
                  <div>
                    <EditButton onClick={() => handleEdit(list.id)} />
                  </div>
                  <div>
                    <Button
                      variant='danger'
                      onClick={() => handleTvShowDelete(list?.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </tr>
            ))}
          </tbody>
        </Table>
        
        <MyVerticallyCenteredModal />
      </Container>
    </div>
  );
};

export default TvList;
