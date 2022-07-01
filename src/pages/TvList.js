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

  const [tvShowListEditingID, setTvShowListEditingId] = useState(null);
  // Editing for SHOW
  const [tvShowText, setTvShowText] = useState();
  // Editing for Year
  const [editYear, setEditYear] = useState();
  // Editing for number of seasons
  const [editNumOfSeason, setEditNumOfSeasons] = useState();
  // Editing for current season
  const [editMyCurrentSeason, setEditMyCurrentSeason] = useState();
  // Editing for current episode
  const [editEpisode, setEditEpisode] = useState();

  // Edit Logic for inputs
  const editTvShow = (id) => {
    const updatedTvShow = [...tvListItem].map((list) => {
      if (list.id === id) {
        // Show
        if (list.show !== tvShowText && tvShowText?.length > 0) {
          list.show = tvShowText;
        }
        // year
        if (list.year !== editYear && editYear > 0) {
          list.year = editYear;
        }

        // Number of seasons
        if (list.numberOfSeasons !== editNumOfSeason && editNumOfSeason > 0) {
          list.numberOfSeasons = editNumOfSeason;
        }

        // Current season
        if (
          list.myCurrentSeason !== editMyCurrentSeason &&
          editMyCurrentSeason > 0
        ) {
          list.myCurrentSeason = editMyCurrentSeason;
        }

        // Current episode
        if (list.myCurrentEpisode !== editEpisode && editEpisode > 0) {
          list.myCurrentEpisode = editEpisode;
        }
      }

      return list;
    });
    setTvListItem(updatedTvShow);
    setEditYear(updatedTvShow);
    setEditNumOfSeasons(updatedTvShow);
    setEditMyCurrentSeason(updatedTvShow);

    setTvShowListEditingId(null);
    setTvShowText('');
    setEditYear('');
  };

  return (
    <div className=' tv-list-wrapper d-flex justify-content-center  '>
      <Container className='mt-5 tv-container'>
        <Table variant='dark' striped bordered hover>
          <thead className='fs-3 '>
            <tr className='text-center'>
              <th className='w-25'>Show</th>
              <th>Year</th>
              <th>Seasons</th>
              <th> Current Season</th>
              <th>Current Episode</th>
              <th></th>
            </tr>
          </thead>
          <tbody className='text-center h-25'>
            {tvListItem?.map((list) => (
              <tr className='fs-4 fw-bold ' key={list?.id}>
                {/* Show section */}
                {tvShowListEditingID === list?.id ? (
                  <td className='edit-input-wrapper'>
                    <input
                      className='edit-input '
                      value={tvShowText}
                      onChange={(e) => setTvShowText(e.target.value)}
                      defaultValue={list.show}
                    />
                  </td>
                ) : (
                  <td>{list?.show}</td>
                )}

                {/* Year section */}
                {tvShowListEditingID === list?.id ? (
                  <td>
                    <span className='edit-input-wrapper'>
                      <input
                        value={editYear}
                        onChange={(e) => setEditYear(e.target.value)}
                        defaultValue={list.year}
                      />
                    </span>
                  </td>
                ) : (
                  <td>{list?.year}</td>
                )}

                {/* Number of seasons section */}
                {tvShowListEditingID === list?.id ? (
                  <td>
                    <span className='edit-input-wrapper'>
                      <input
                        value={editNumOfSeason}
                        onChange={(e) => setEditNumOfSeasons(e.target.value)}
                        defaultValue={list.numberOfSeasons}
                      />
                    </span>
                  </td>
                ) : (
                  <td>{list?.numberOfSeasons}</td>
                )}

                {/* My current season section */}
                {tvShowListEditingID === list?.id ? (
                  <td>
                    <span className='edit-input-wrapper'>
                      <input
                        value={editMyCurrentSeason}
                        onChange={(e) => setEditMyCurrentSeason(e.target.value)}
                        defaultValue={list.myCurrentSeason}
                      />
                    </span>
                  </td>
                ) : (
                  <td>{list?.myCurrentSeason}</td>
                )}

                {/* My current episode section */}

                {tvShowListEditingID === list?.id ? (
                  <td>
                    <span className='edit-input-wrapper'>
                      <input
                        value={editEpisode}
                        onChange={(e) => setEditEpisode(e.target.value)}
                        defaultValue={list.myCurrentEpisode}
                      />
                    </span>
                  </td>
                ) : (
                  <td>{list?.myCurrentEpisode}</td>
                )}

                {/* Button section */}
                <div className='d-flex justify-content-around'>
                  {/* Edit Button */}
                  <div className='edit-save-delete-wrapper'>
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

                    {/* Save Edited information Button */}

                    {saveButton ? (
                      <Button
                        variant='primary'
                        onClick={() => {
                          editTvShow(list.id);

                          setEditButton(true);
                          setSaveButton(false);
                          console.log(saveButton);
                        }}
                      >
                        Save
                      </Button>
                    ) : null}

                    {/* Delete button */}

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
