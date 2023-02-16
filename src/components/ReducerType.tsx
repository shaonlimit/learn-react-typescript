import React, { useReducer } from 'react';
const initialState = {
  count: 0,
};

type CartStateType = {
  count: number;
};

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const RESET = 'RESET';
const INCREMENTBYAMOUNT = 'INCREMENTBYAMOUNT';

type IncrementType = {
  type: 'INCREMENT';
};
type DecrementType = {
  type: 'DECREMENT';
};
type ResetType = {
  type: 'RESET';
};
type IncrementByAmountType = {
  type: 'INCREMENTBYAMOUNT';
  payload: number;
};

const reducer = (
  state: CartStateType,
  action: IncrementType | DecrementType | ResetType | IncrementByAmountType
) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: Math.max(0, state.count - 1) };
    case RESET:
      return { count: 0 };
    case INCREMENTBYAMOUNT:
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

const ReducerType = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: INCREMENT });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: RESET });
        }}
      >
        Reset
      </button>
      <button
        onClick={() => {
          dispatch({ type: DECREMENT });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: INCREMENTBYAMOUNT, payload: 50 })}
      >
        Increment by amount
      </button>
    </div>
  );
};

export default ReducerType;
