import React from 'react';
import axios from "axios";
import {useQuery} from "react-query";

const Posts = () => {
    const fetch = async () => {
        const data = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    };
    const {data,status} = useQuery('posts',fetch);
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
                data.data.map((el,i) => <div key={i}>{el.title}</div>)
            )}
        </div>
    )
};

export default Posts;