import Home from './components/Home';
import logoImgUrl from './assets/logo.png';

function App() {
  return (
    <div className="App">
      <header>
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
      <Home />
      <section className="about" id="about"></section>
      <section className="features"></section>
      <section className="screenshot" id="screenshot"></section>
      <section className="download"></section>
      <section className="manual"></section>
      <section className="team"></section>
      <section className="customers"></section>
      <section className="blog"></section>
      <footer></footer>
    </div>
  );
}

export default App;
