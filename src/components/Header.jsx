import Navbar from './Navbar';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1>Blog Website</h1>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;
