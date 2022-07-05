
import { Logotype } from '@library/kit';
import { Widget as BucketWidget } from '@widget/bucket';

import React from 'react';
import Link from 'next/link';
import getConfig from 'next/config';
import { useRouter } from 'next/router';

import styles from './default.module.scss';


const config = getConfig();
const process = config['publicRuntimeConfig'];


function Header(): JSX.Element {
  const router = useRouter();

  async function handleCheckout() {
    await router.push('/checkout');
  }

  return (
    <section className={styles['wrapper']}>
      <div className={styles['logotype']}>
        <Link href={'/'}>
          <a>
            <Logotype />
          </a>
        </Link>
      </div>
      <div className={styles['content']}>
        <BucketWidget url={process.env['GATEWAY_SERVICE_API'] + '/api/v1/checkouts'} onCheckout={handleCheckout} />
      </div>
    </section>
  );
}

export default Header;
