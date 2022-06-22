
import React from 'react';

import Header from './Header';
import Footer from './Footer';

import styles from './@media/index.module.scss';


interface IProps {
  children: any;
}


function DefaultLayout({ children }: IProps): JSX.Element {
  return (
    <section className={styles['wrapper']}>
      <header className={styles['header']}>
        <div className={styles['container']}>
          <Header />
        </div>
      </header>
      <section className={styles['content']}>
        <div className={styles['container']}>
          <div className={styles['module']}>
            { children }
          </div>
        </div>
      </section>
      <footer className={styles['footer']}>
        <div className={styles['container']}>
          <Footer />
        </div>
      </footer>
    </section>
  );
}

export default DefaultLayout;
