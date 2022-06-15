import clsx from 'clsx';
import css from './home.module.css';

const Home = () => {
  return (
    <section className={css.home} id="home">
      <div className={clsx('content', css.content)}>
        <div className={css.description}>
          <div>
            <h2>
              A Great App Makes Your Life Better
            </h2>
          </div>
          <div className={css.border} />
        </div>
      </div>
    </section>
  );
};

export default Home;
