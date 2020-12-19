import React,{useState} from 'react';
import axios from 'axios';
import {useQuery} from "react-query";

const fetch = async ({queryKey}) => {
    const [_key,  id ] = queryKey;
    const data = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    return data;
};

const User = () => {
    const [id,setId] = useState(1);
    const result = useQuery(['todos', id], fetch);

    return (
        <div>
            <h1>User</h1>

            <button onClick={() => setId(1)}>User 1</button>
            <button onClick={() => setId(2)}>User 2</button>
            <button onClick={() => setId(3)}>User 3</button>
            {result.isSuccess===true && <p>{result.data.data.name}</p>}
        </div>
    );
};

export default User;