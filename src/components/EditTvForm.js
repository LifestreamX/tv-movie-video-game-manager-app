import React from 'react';
import { Form } from 'react-bootstrap';

const EditTvForm = () => {
  return (
    <div>
      <Form
        // onSubmit={handleSubmit}
        className='form-wrapper d-flex flex-column  align-items-center ' 
      >
        <Form.Group className='mb-4' controlId='formBasicEmail'>
          <Form.Label>Show</Form.Label>
          <Form.Control
            type='text'
            // value={show}
            // onChange={handleShowChange}
            required
            // ref={inputRef}
          />
        </Form.Group>
        <Form.Group className='mb-4' controlId='formBasicEmail'>
          <Form.Label>Year</Form.Label>
          <Form.Control
            required
            type='number'
            // value={year}
            // onChange={handleYearChange}
          />
        </Form.Group>
        <Form.Group className='mb-4' controlId='formBasicEmail'>
          <Form.Label>Total Seasons</Form.Label>
          <Form.Control
            required
            type='number'
            // value={numberOfSeasons}
            // onChange={handleNumberOfSeasonsChange}
          />
        </Form.Group>
        <Form.Group className='mb-4' controlId='formBasicEmail'>
          <Form.Label>My Current Season</Form.Label>
          <Form.Control
            required
            type='number'
            // value={myCurrentSeason}
            // onChange={handleCurrentSeasonChange}
          />
        </Form.Group>
        <Form.Group className='mb-4' controlId='formBasicEmail'>
          <Form.Label>My Current Episode</Form.Label>
          <Form.Control
            required
            type='number'
            // value={myCurrentEpisode}
            // onChange={handleCurrentEpisodeChange}
          />
        </Form.Group>
        {/* <Button variant='danger' type='submit' className='w-25 button-wrapper'>
          <div className='d-flex justify-content-center align-items-center'>
            <span className='mx-2 fs-3'>ADD</span>{' '}
            <AiFillPlusCircle size={30} />
          </div>
        </Button>{' '} */}
      </Form>
    </div>
  );
};

export default EditTvForm;
