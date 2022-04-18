import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
import { reducer } from './reducer';

const defaultState = {
  people: [], // data,
  isModalOpen: false,
  modalContent: '',
};

const Index = () => {
  const [name, setName] = useState('');

  // the diff between useReducer and useState is that each and every time
  // you want to do something with the state, you always must use
  // dispatch, and it will go through the reducer.
  // Reduceer will take in the old state, and an action, and spits
  // back the new state
  const [state, dispatch] = useReducer(reducer, defaultState);

  // const [people, setPeople] = useState(data);
  // const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name }
      dispatch({ type: 'ADD_ITEM', payload: newItem });
      setName('');
      // setShowModal(true);
      // setPeople([...people, { id: new Date().getTime().toString(), name }]);
      // setName('');
    } else {
      dispatch({ type: 'NO_VALUE' });
      // setShowModal(true);
    }
  };

  const closeModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };

  return (
    <>
      {/* {showModal && <Modal />} */}
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
      <form onSubmit={handleSubmit} className='form'>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <button type='submit'>add </button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className='item'>
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })}
            >
              remove
            </button>
          </div>
        )
      })}
    </>
  );
};

export default Index;
