import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useQuery} from "react-query";

const fetchPosts = async ({queryKey}) => {
    const [_key,  id ] = queryKey;
  const data = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return data;
};

const AnotherPost = () => {
    const [id,setId] = useState(1);
    const [saveData,setSaveData] = useState([]);
    const {status,data} = useQuery(['anotherPost',id], fetchPosts);
    useEffect(() => {
        status === "success" && setSaveData(prevState => [...prevState,data.data.title]);
    },[data]);
    return(
        <div>
            <button onClick={() => setId(prevState => prevState+1)}>Load another post</button>
            {status === "success" && saveData.map(el => <p>{el}</p>)}
        </div>
    )
};

export default AnotherPost;