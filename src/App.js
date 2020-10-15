import React from 'react'
import { createClient, Provider } from "urql"

import { Todos } from "./components/Todos"

const client = createClient({
  url: "https://0ufyz.sse.codesandbox.io"
})

const App = () => {
  return (
    <Provider value={client}>
      <Todos />
    </Provider>
  );
};

export default App