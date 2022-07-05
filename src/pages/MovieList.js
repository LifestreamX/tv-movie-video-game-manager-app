import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const MovieList = ({ movieListItem, setMovieListItem }) => {
  const [editButton, setEditButton] = useState(true);
  const [saveButton, setSaveButton] = useState(false);

  // Handle delete on Click
  const handleTvShowDelete = (id) => {
    const newMovie = movieListItem.filter((list) => list.id !== id);
    setMovieListItem(newMovie);
  };

  let navigate = useNavigate();

  const [movieListEditingID, setMovieListEditingId] = useState(null);
  // Editing for MOVIE
  const [movieText, setMovieText] = useState();
  // Editing for Release Date
  const [movieReleaseDateText, setMovieReleaseDateText] = useState();

  const editMovie = (id) => {
    const updatedMovie = [...movieListItem].map((list) => {
      if (list.id === id) {
        // Movie
        if (list.movie !== movieText && movieText?.length > 0) {
          list.movie = movieText;
        }
        // Movie release
        if (
          list.movieReleaseDate !== movieReleaseDateText &&
          movieReleaseDateText > 0
        ) {
          list.movieReleaseDate = movieReleaseDateText;
        }
      }

      return list;
    });

    setMovieListEditingId(null);
  };

  return (
    <div className=' movie-list-wrapper d-flex justify-content-center  '>
      <Container className='mt-5 tv-container '>
        {movieListItem.length > 0 ? (
          <Table variant='dark' striped bordered hover>
            <thead className='fs-3 '>
              <tr className='text-center'>
                <th className='w-50'>Show</th>
                <th className='w-50'> Release Date</th>
                <th className='w-25'></th>
              </tr>
            </thead>
            <tbody className='text-center h-25'>
              {movieListItem?.map((list) => (
                <tr className='fs-4 fw-bold ' key={list?.id}>
                  {/* Movie section */}
                  {movieListEditingID === list?.id ? (
                    <td>
                      <span className='edit-input-wrapper'>
                        <input
                          type='text'
                          className='edit-input '
                          value={movieText}
                          onChange={(e) => setMovieText(e.target.value)}
                          defaultValue={list?.movie}
                        />
                      </span>
                      {console.log(list)}
                    </td>
                  ) : (
                    <td>{list?.movie}</td>
                  )}

                  {/* Release Date section */}
                  {movieListEditingID === list?.id ? (
                    <td>
                      <span className='edit-input-wrapper'>
                        <input
                          type='number'
                          className='edit-input '
                          value={movieReleaseDateText}
                          onChange={(e) =>
                            setMovieReleaseDateText(e.target.value)
                          }
                          defaultValue={list?.movieReleaseDate}
                        />
                      </span>
                    </td>
                  ) : (
                    <td>{list?.movieReleaseDate}</td>
                  )}

                  {/* Button section */}
                  <div className='d-flex justify-content-around'>
                    {/* Edit Button */}
                    <div className='movie-edit-save-delete-wrapper'>
                      {editButton ? (
                        <Button
                          className='movie-edit-and-save-button'
                          variant='secondary'
                          onClick={() => {
                            setMovieListEditingId(list?.id);
                            setEditButton(false);
                            setSaveButton(true);
                          }}
                        >
                          Edit
                        </Button>
                      ) : null}

                      {/* Save Edited information Button */}

                      {saveButton && movieListEditingID === list?.id ? (
                        <Button
                          className='movie-edit-and-save-button'
                          variant='primary'
                          onClick={() => {
                            editMovie(list.id);
                            setEditButton(true);
                            setSaveButton(false);
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
        ) : (
          <div className='no-list-title-wrapper'>
            <Alert variant='primary'>
              <h1 className='no-list-title'>NO MOVIES IN YOUR LIST</h1>
            </Alert>
          </div>
        )}
      </Container>
    </div>
  );
};

export default MovieList;
