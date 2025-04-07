// src/App.jsx
import React from 'react';
import BlogPostList from './components/BlogPostList';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import necessary components

const samplePosts = [
  {
    id: '1',
    title: 'Getting Started with React',
    summary: 'Learn the basics of React and build your first application. This is a longer summary to test the display of multiple lines of text within the summary section.',
    date: '2023-01-01',
    url: '/posts/1',
  },
  {
    id: '2',
    title: 'CSS Grid vs. Flexbox',
    summary: 'A comparison of two powerful layout systems in CSS. Explore their strengths and weaknesses for different layout scenarios.',
    date: '2023-02-15',
    url: '/posts/2',
  },
  {
    id: '3',
    title: 'Accessibility in Web Development',
    summary: 'Tips for making your web applications more accessible to users with disabilities. Learn about ARIA attributes and semantic HTML.',
    date: '2023-03-10',
    url: '/posts/3',
  },
  {
    id: '4',
    title: 'Another Interesting Post',
    summary: 'This is another blog post with a slightly different topic to showcase more items in the list.',
    date: '2023-04-01',
    url: '/posts/4',
  },
  {
    id: '5',
    title: 'The Power of Hooks in React',
    summary: 'Explore the benefits and usage of React Hooks for managing state and side effects in functional components.',
    date: '2023-05-15',
    url: '/posts/5',
  },
  {
    id: '6',
    title: 'Responsive Web Design Techniques',
    summary: 'Learn various techniques for creating web designs that adapt seamlessly to different screen sizes.',
    date: '2023-06-20',
    url: '/posts/6',
  },
];

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>Blog Posts</h1>
        <BlogPostList posts={samplePosts} />
      </div>
    </BrowserRouter>
  );
}

export default App;