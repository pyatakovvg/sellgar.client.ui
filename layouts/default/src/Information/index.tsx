
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
        <Link className={styles['phone']} href={'phone:' + process.env['PHONE_CONTACT']}>
          { process.env['PHONE_CONTACT'] }
        </Link>
        <Link className={styles['email']} href={'mail:' + process.env['EMAIL_CONTACT']}>
          { process.env['EMAIL_CONTACT'] }
        </Link>
      </div>
    </div>
  );
}

export default Information;
