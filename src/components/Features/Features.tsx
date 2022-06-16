import clsx from 'clsx';
import { MessageSquare, Layout } from 'lucide-react';
import imgUrl from '../../assets/feature_img.png';
import css from './features.module.css';

const Features = () => {
  return (
    <section className={clsx(css.features, 'bg')}>
      <div className="content">
        <h3>app features</h3>
        <p className={css.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc
          ante velit vitae.
        </p>
        <div className={css.grid}>
          <section className={css.item}>
            <MessageSquare size={50} />
            <h4>Full free chat</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </section>
          <section className={css.item}>
            <Layout size={50} />
            <h4>Full free chat</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </section>
          <section className={css.item}>
            <MessageSquare size={50} />
            <h4>Full free chat</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </section>
          <img className={css.image} src={imgUrl} alt="screenshot" />
          <section className={css.item}>
            <MessageSquare size={50} />
            <h4>Full free chat</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </section>
          <section className={css.item}>
            <Layout size={50} />
            <h4>Full free chat</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </section>
          <section className={css.item}>
            <MessageSquare size={50} />
            <h4>Full free chat</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Features;
