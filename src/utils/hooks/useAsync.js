import  { useCallback,  useReducer } from 'react';
import useSafeDispatch from './useSafeDispatch';

const asyncReducer = (state, action) => {
  switch (action.type) {
    case 'pending':
      return { ...state, data: null, error: null, status: 'pending' };
    case 'resolved':
      return { ...state, data: action.data, error: null, status: 'resolved' }
    case 'rejected':
      return { ...state, data: null, error: action.error, status: 'rejected' }
    default:
      throw Error(`unsopported action type "${action.type}"`);
  }
}

export function useAsync(initialState) {
  const [state, unsafeDispatch] = useReducer(asyncReducer, { data: null, error: null, status: 'idle', ...initialState })
  const dispatch = useSafeDispatch(unsafeDispatch);
  const run = useCallback((promise) => {
    if (!promise) return;
    dispatch({ type: 'pending'})
    promise.then((res) => dispatch({ type: 'resolved', data: res.data }),
      error => dispatch({ type: 'rejected', error }))
  }, [dispatch])
  const isLoading = state.status === 'pending' || state.status === 'idle'
  return { ...state, isLoading, run}
}