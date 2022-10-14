
import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Information from './Information';

import styles from './@media/index.module.scss';


interface IProps {
  withoutBucket?: boolean;
  children: any;
}


function DefaultLayout({ children, withoutBucket }: IProps) {
  return (
    <section className={styles['wrapper']}>
      <div className={styles['line']}>
        <div className={styles['container']}>
          <Information />
        </div>
      </div>
      <header className={styles['header']}>
        <div className={styles['container']}>
          <Header withoutBucket={withoutBucket || false} />
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
