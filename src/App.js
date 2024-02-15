import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ApiData from './components/ApiData';
import FilterSort from './components/FilterSort';
import PostsList from './components/PostsList';

const App = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);

    // Obtener datos del API al montar el componente
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data => {
                setPosts(data);
                setFilteredPosts(data);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // Función para manejar el filtro por User ID y body
    const handleFilter = (type, value) => {
        let filtered = [...posts];
        if (type === 'userId') {
            filtered = posts.filter(post => post.userId === parseInt(value));
        } else if (type === 'body') {
            filtered = posts.filter(post => post.body.includes(value));
        }
        setFilteredPosts(filtered);
    };

    // Función para manejar el ordenamiento por título
    const handleSort = (type, order) => {
        let sortedPosts = [...filteredPosts];
        if (type === 'title') {
            sortedPosts.sort((a, b) => {
                const titleA = a.title.toUpperCase();
                const titleB = b.title.toUpperCase();
                if (order === 'asc') {
                    return titleA.localeCompare(titleB);
                } else if (order === 'desc') {
                    return titleB.localeCompare(titleA);
                }
                return 0;
            });
            setFilteredPosts(sortedPosts);
        }
    };

    return (
      <div className="container">
          <div className="row">
              <div className="col">
                  <ApiData setPosts={setPosts} />
                  <FilterSort handleFilter={handleFilter} handleSort={handleSort} />
              </div>
          </div>
          <div className="row">
              <div className="col">
                  <PostsList posts={filteredPosts} />
              </div>
          </div>
      </div>
  );
};

export default App;
