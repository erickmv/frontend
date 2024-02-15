import React, { useState, useEffect } from 'react';

const ApiData = ({ setPosts }) => {
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setPosts(data))
        .catch(error => console.error('Error fetching data:', error));
    }, [setPosts]);

    return null; 
};

export default ApiData;
