
import React from 'react';
import Link from 'next/link';
import getConfig from "next/config";

import styles from './default.module.scss';


const config = getConfig();
const process = config['publicRuntimeConfig'];


function Information() {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Link href={'phone:' + process.env['PHONE_CONTACT']}>
          <a className={styles['phone']}>{ process.env['PHONE_CONTACT'] }</a>
        </Link>
        <Link href={'mail:' + process.env['EMAIL_CONTACT']}>
          <a className={styles['email']}>{ process.env['EMAIL_CONTACT'] }</a>
        </Link>
      </div>
    </div>
  );
}

export default Information;
