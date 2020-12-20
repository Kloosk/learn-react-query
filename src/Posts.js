import React from 'react';
import usePosts from "./hoooks/usePosts";

const Posts = () => {
    const {data,status} = usePosts();
    return (
        <div>
            <h2>Posts</h2>
            {status}
            <br/>
            {status === "loading" && (
                <p>Loading...</p>
            )}
            {status === "error" && (
                <p>Error in fetching data</p>
            )}
            {status === "success" && (
                data.map((el,i) => <div key={i}>{el.title}</div>)
            )}
        </div>
    )
};

export default Posts;