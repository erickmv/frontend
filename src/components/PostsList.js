import React from 'react';

const PostsList = ({ posts }) => {
    return (
        <div>
            {posts.map(post => (
                <div className='card mt-3 mb-3 p-4' key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default PostsList;
