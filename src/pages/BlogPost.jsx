import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

function BlogPost() {
  const { id } = useParams();
  // This will be replaced with actual API calls later
  const [post, setPost] = useState({
    id: id,
    title: `Sample Blog Post ${id}`,
    date: 'April 10, 2025',
    content: 'This is the full content of the blog post. In the future, this will be fetched from a backend API.'
  });

  return (
    <div className="blog-post">
      <h1>{post.title}</h1>
      <p className="date">{post.date}</p>
      <div className="content">
        {post.content}
      </div>
    </div>
  );
}

export default BlogPost;
