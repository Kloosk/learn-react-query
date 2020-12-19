import React,{useState} from 'react'
import {QueryClientProvider,QueryClient} from "react-query";
import Nav from "./Nav";
import Users from "./Users";
import Posts from "./Posts";
import User from "./User";

const queryClient = new QueryClient();

export default function App() {
    const [page,setPage] = useState(true);
    return (
        <QueryClientProvider client={queryClient}>
            <Nav setPage={setPage}/>
            {page ? <Users/> : <Posts/>}
            <User/>
        </QueryClientProvider>
    )
};

