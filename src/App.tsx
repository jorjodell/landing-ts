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
      <section className="home" id="home">
        <div className="content">
          <div className="grid content-center">
            <div className="bg-white py-3.5 pl-[18px] pr-[7px]">
              <h2 className="font-bold text-3.5xl text-primary">
                A Great App Makes Your Life Better
              </h2>
            </div>
            <div className="absolute h-[120%]" />
          </div>
        </div>
      </section>
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
