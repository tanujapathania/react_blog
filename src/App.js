import React from 'react';
import './App.css';

function App() {
  const blogPost = {
    title: 'A Simple Blog Post',
    author: 'John Doe',
    date: 'October 1, 2024',
    content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
      Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. 
      Integer nec purus sit amet odio ultrices tincidunt. Ut bibendum scelerisque risus, in viverra velit. 
      Suspendisse potenti.
    `,
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center' }}>
        <h1>{blogPost.title}</h1>
        <p>
          <strong>By {blogPost.author}</strong> | <em>{blogPost.date}</em>
        </p>
      </header>
      <article style={{ marginTop: '20px', lineHeight: '1.6' }}>
        <p>{blogPost.content}</p>
      </article>
    </div>
  );
}

export default App;
