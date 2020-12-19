import React from 'react'
import {useQuery,QueryClientProvider,QueryClient} from "react-query";
import axios from "axios";

const queryClient = new QueryClient();

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Example />
        </QueryClientProvider>
    )
}
const Example = () => {
    const fetch = async () => {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    };
    const {data,status} = useQuery('posts',fetch);
  return (
      <div>
          <h2>Posts</h2>
          {status === "loading" && (
              <p>Loading...</p>
          )}
          {status === "error" && (
              <p>Error in fetching data</p>
          )}
          {status === "success" && (
              data.data.map((el,i) => <div key={i}>{el.title}</div>)
          )}

      </div>
  );
};

