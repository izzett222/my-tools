/** @jsxRuntime classic /
/* @jsx jsx */
import { jsx } from "@emotion/react";
import { useEffect } from "react";
import { useAsync } from './utils/hooks/useAsync';
import client from './utils/api-client';

const test = async () => {
  return await client('test', {});
}


function App() {
  const { data, run, isLoading } = useAsync();
  useEffect(() => {
    run(test());
  }, [run])
  return (
    <div css={{
      width: 400,
      height: 400,
      background: 'yellow'
    }}>
      {isLoading ? <p>loading</p> : data?.map(el => <p key={el.id}>{el.text}</p>)}
      <div>hello</div>

    </div>
  );
}

export default App;
