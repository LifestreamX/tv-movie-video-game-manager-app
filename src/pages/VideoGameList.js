import React, { useEffect, useState } from 'react';
import { Alert, Button, Col, Container, Row, Table } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const VideoGameList = ({ videoGameList, setVideoGameList }) => {
  useEffect(() => {
    let fetchGames = localStorage.getItem('videogames');
    setVideoGameList(JSON.parse(fetchGames));
  }, []);

  const [editButton, setEditButton] = useState(true);
  const [saveButton, setSaveButton] = useState(false);

  // Handle delete on Click
  const handleVideoGameDelete = (id) => {
    const newMovie = videoGameList.filter((list) => list.id !== id);
    setVideoGameList(newMovie);
  };

  let navigate = useNavigate();

  const [videoGameListId, setVideoGameListId] = useState(null);
  // Editing for video game
  const [videoGameText, setVideoGameText] = useState();
  // Editing for video game release date
  const [videoGameReleaseDateText, setVideoGameReleaseDateText] = useState();
  // Editing for video game platform
  const [videoGamePlatformText, setVideoGamePlatformText] = useState();

  const editVideoGame = (id) => {
    const updatedVideoGame = [...videoGameList].map((list) => {
      if (list.id === id) {
        // video game
        if (list.videoGame !== videoGameText && videoGameText?.length > 0) {
          list.videoGame = videoGameText;
        }
        // video game release date
        if (
          list.videoGameReleaseDate !== videoGameReleaseDateText &&
          videoGameReleaseDateText > 0
        ) {
          list.videoGameReleaseDate = videoGameReleaseDateText;
        }
        // video game platform
        if (
          list.videoGamePlatform !== videoGamePlatformText &&
          videoGamePlatformText > 0
        ) {
          list.videoGamePlatform = videoGamePlatformText;
        }
      }

      return list;
    });

    setVideoGameListId(null);
  };

  return (
    <div className=' video-game-list-wrapper d-flex justify-content-center  '>
      <Container className='mt-5  '>
        {videoGameList?.length > 0 ? (
          <Table variant='dark' striped bordered hover responsive>
            <thead className='fs-3 '>
              <tr className='text-center'>
                <th className='w-25'>Video Game</th>
                <th className='w-25'> Release Date</th>
                <th className='w-25'> Platform</th>
                <th className=''></th>
              </tr>
            </thead>
            <tbody className='text-center h-25'>
              {videoGameList?.map((list) => (
                <tr className='fs-4 fw-bold ' key={list?.id}>
                  {/* video game section */}
                  {videoGameListId === list?.id ? (
                    <td>
                      <span className='edit-input-wrapper'>
                        <input
                          type='text'
                          className='video-game-edit-input edit-input'
                          value={videoGameText}
                          onChange={(e) => setVideoGameText(e.target.value)}
                          defaultValue={list?.videoGame}
                        />
                      </span>
                    </td>
                  ) : (
                    <td>
                      <span className='video-game-table-data'>
                        {list?.videoGame}
                      </span>
                    </td>
                  )}

                  {/* Video game release date section */}
                  {videoGameListId === list?.id ? (
                    <td>
                      <span className='edit-input-wrapper'>
                        <input
                          type='number'
                          className='edit-input video-game-edit-input'
                          value={videoGameReleaseDateText}
                          onChange={(e) =>
                            setVideoGameReleaseDateText(e.target.value)
                          }
                          defaultValue={list?.videoGameReleaseDate}
                        />
                      </span>
                    </td>
                  ) : (
                    <td>
                      <span className='video-game-table-data'>
                        {list?.videoGameReleaseDate}
                      </span>
                    </td>
                  )}
                  {/* Video game platform section */}
                  {videoGameListId === list?.id ? (
                    <td>
                      <span className='edit-input-wrapper'>
                        <input
                          type='number'
                          className='edit-input video-game-edit-input '
                          value={videoGamePlatformText}
                          onChange={(e) =>
                            setVideoGamePlatformText(e.target.value)
                          }
                          defaultValue={list?.videoGamePlatform}
                        />
                      </span>
                    </td>
                  ) : (
                    <td>
                      <span className='video-game-table-data'>
                        {list?.videoGamePlatform}
                      </span>
                    </td>
                  )}

                  {/* Button section */}
                  <div className='d-flex justify-content-around'>
                    {/* Edit Button */}
                    <div className='video-game-edit-save-delete-wrapper'>
                      {editButton ? (
                        <Button
                          className='video-game-edit-save-buutton edit-button '
                          variant='secondary'
                          onClick={() => {
                            setVideoGameListId(list?.id);
                            setEditButton(false);
                            setSaveButton(true);
                          }}
                        >
                          Edit
                        </Button>
                      ) : null}

                      {/* Save Edited information Button */}
                      {saveButton && videoGameListId === list?.id ? (
                        <Button
                          className='video-game-edit-save-buutton save-button'
                          variant='primary'
                          onClick={() => {
                            editVideoGame(list.id);
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
                        onClick={() => handleVideoGameDelete(list?.id)}
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
            <Alert variant='success'>
              <h1 className='no-list-title'>NO VIDEO GAMES IN YOUR LIST </h1>
            </Alert>
          </div>
        )}
      </Container>
    </div>
  );
};

export default VideoGameList;
