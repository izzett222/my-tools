import { useEffect, useRef, useCallback } from "react";

const useSafeDispatch = (unsafeDispatch) => {
    const dispatchRef = useRef(false);
  useEffect(() => {
    dispatchRef.current = true;
    return () => {
      dispatchRef.current = false;
    }
  }, [])
  const dispatch = useCallback((...args) => {
    if(dispatchRef) unsafeDispatch(...args);
  }, [unsafeDispatch])
  return dispatch;
}

export default useSafeDispatch