import React from 'react';

const Nav = ({setPage}) => {
    return (
        <nav>
            <button onClick={() => setPage(true)}>Posts</button>
            <button onClick={() => setPage(false)}>Users</button>
        </nav>
    );
};

export default Nav;