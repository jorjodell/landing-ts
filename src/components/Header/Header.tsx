import logoImgUrl from './assets/logo.png';
import css from './header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className="logo">
        <img src={logoImgUrl} alt="logo" />
      </div>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#home">Features</a>
        <a href="#home">Screenshot</a>
        <a href="#home">Blog</a>
      </nav>
    </header>
  );
};

export default Header;

