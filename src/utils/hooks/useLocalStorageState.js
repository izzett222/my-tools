import { useState, useEffect } from 'react';

export default function useLocalStorageState(initialValue, name) {
    const [state, setState] = useState(initialValue);
    useEffect(() => {
        window.localStorage.setItem(name, state);
    }, [name, state]);
    return [state, setState];
}