import { Link } from 'react-router-dom';
import './BlogCard.css';

function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <h2>{post.title}</h2>
      <p className="date">{post.date}</p>
      <p className="excerpt">{post.excerpt}</p>
      <Link to={`/blog/${post.id}`} className="read-more">
        Read More
      </Link>
    </div>
  );
}

export default BlogCard;
