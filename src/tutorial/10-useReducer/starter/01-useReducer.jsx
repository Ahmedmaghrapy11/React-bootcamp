import React, {useReducer} from 'react';
import { data } from '../../../data';
import { REMOVE_ITEM, CLEAR_LIST, RESET_LIST } from './actions';

import { reducer } from './reducer';

const defaultState = {
  people: data,
  isLoading: false,
};


const ReducerBasics = () => {

  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    dispatch({type: REMOVE_ITEM, payload: { id }});
  };

  const clearList = () => {
    dispatch({type: CLEAR_LIST});
  };

  const reset = () => {
    dispatch({type: RESET_LIST});
  };

  console.log(state);
  return (
    <div className='container'>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className='item '>
            <h4>{name}</h4>
            <button className='btn btn-hipster' onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      {state.people.length ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={clearList}
        >
          Clear Items
        </button>
      ) : (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={reset}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default ReducerBasics;
