import { useCallback, useReducer } from 'react';
import useSafeDispatch from './useSafeDispatch';

export function useAsync() {
  const [state, unsafeDispatch] = useReducer((state, newState) => ({ ...state, ...newState }), { data: null, error: null, status: 'idle' })
  const dispatch = useSafeDispatch(unsafeDispatch);

  const setData = useCallback((data) => dispatch({ data, status: 'resolved' }), [dispatch]);
  const setError = useCallback((error) => dispatch({ error, status: 'rejected' }), [dispatch])
  const run = useCallback((promise) => {
    if (!promise) return;
    dispatch({ status: 'pending' })
    promise.then((data) => {
      setData(data)
      return data;
    },
      error => {
        console.log(error);
        setError({ error })
        return promise.reject(error);
      })
  }, [dispatch, setData, setError])
  const isLoading = state.status === 'pending';
  const isIdle = state.status === 'idle';
  return { ...state, isLoading, isIdle, run, setData, setError }
}
