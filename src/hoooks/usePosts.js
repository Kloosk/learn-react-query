import axios from 'axios';
import {useQuery} from "react-query";


export default function usePosts(){
    return useQuery(
        'posts',
        () => axios.get('https://jsonplaceholder.typicode.com/posts').then(res => res.data)
    );
}