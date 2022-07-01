import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const TvList = ({ tvListItem, setTvListItem, setShow }) => {
  const [editButton, setEditButton] = useState(true);
  const [saveButton, setSaveButton] = useState(false);

  // Handle delete on Click
  const handleTvShowDelete = (id) => {
    const newTv = tvListItem.filter((list) => list.id !== id);
    setTvListItem(newTv);
  };

  let navigate = useNavigate();

  const { id } = useParams();

  // Editing for SHOW
  const [tvShowListEditingID, setTvShowListEditingId] = useState(null);
  const [tvShowText, setTvShowText] = useState();

  const editTvShow = (id) => {
    const updatedTvShow = [...tvListItem].map((list) => {
      if (list.id === id) {
        if (list.show !== tvShowText && tvShowText > 0) {
          list.show = tvShowText;
          console.log(list.show);
        }
      }
      return list;
    });
    setTvListItem(updatedTvShow);
    setTvShowListEditingId(null);
    setTvShowText('');
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
                {/* Show section */}

                {tvShowListEditingID === list?.id ? (
                  <div className='edit-input-wrapper'>
                    {/* <label htmlFor="">dsffdsssffd</label> */}
                    <input
                      className='edit-input'
                      type='text'
                      value={tvShowText}
                      onChange={(e) => setTvShowText(e.target.value)}
                      defaultValue={list.show}
                    />
                  </div>
                ) : (
                  <td>{list?.show}</td>
                )}

                {/* Year section */}
                <td>{list?.year}</td>

                {/* Number of seasons section */}
                <td>{list?.numberOfSeasons}</td>

                {/* My current season section */}
                <td>{list?.myCurrentSeason}</td>

                {/* My current episode section */}
                <td>{list?.myCurrentEpisode}</td>

                {/* Button section */}
                <div className='d-flex justify-content-around'>
                  {/* Edit Button */}
                  <div>
                    {editButton ? (
                      <Button
                        variant='secondary'
                        onClick={() => {
                          setTvShowListEditingId(list?.id);
                          setEditButton(false);
                          setSaveButton(true);
                        }}
                      >
                        Edit
                      </Button>
                    ) : null}
                  </div>
                  {/* Save Edited information Button */}

                  <div>
                    {saveButton ? (
                      <Button
                        variant='primary'
                        onClick={() => {
                          editTvShow(list.id);
                          setEditButton(true);
                          setSaveButton(false);
                        }}
                      >
                        Save
                      </Button>
                    ) : null}
                  </div>

                  {/* Delete button */}
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
      </Container>
    </div>
  );
};

export default TvList;
