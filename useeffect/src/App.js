import React, { useState, useEffect } from 'react';

function App() {

  const [resourseType, setRecourseType] = useState('posts');

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourseType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourseType])

  return (
    <>
      <div>
        <button onClick={() => setRecourseType('posts')}>Posts</button>
        <button onClick={() => setRecourseType('users')}>Users</button>
        <button onClick={() => setRecourseType('comments')}>Comments</button>
      </div>
      <h1>{resourseType}</h1>
      {items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })}
    </>
  )
}

export default App;
