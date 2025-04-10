import BlogCard from './BlogCard';
import './BlogList.css';

function BlogList({ posts }) {
  return (
    <div className="blog-list">
      {posts.length > 0 ? (
        posts.map(post => <BlogCard key={post.id} post={post} />)
      ) : (
        <p className="no-posts">No blog posts yet. Check back later!</p>
      )}
    </div>
  );
}

export default BlogList;
