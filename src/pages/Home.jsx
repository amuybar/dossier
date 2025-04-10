import { useState, useEffect } from 'react';
import BlogList from '../components/BlogList';
import './Home.css';

function Home() {
  // This will be replaced with actual API calls later
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Sample Blog Post 1',
      date: 'April 10, 2025',
      excerpt: 'This is a sample blog post to demonstrate the layout.'
    },
    {
      id: 2,
      title: 'Sample Blog Post 2',
      date: 'April 9, 2025',
      excerpt: 'Another sample blog post to show multiple entries.'
    }
  ]);

  return (
    <div className="home">
      <h1>Latest Blog Posts</h1>
      <BlogList posts={posts} />
    </div>
  );
}

export default Home;
