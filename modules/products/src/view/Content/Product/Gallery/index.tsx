
import { Text, Gallery } from '@library/kit';

import React from 'react';

import styles from './@media/index.module.scss';


interface IProps {
  srcs: Array<any>;
  externalId: string;
}


function Image({ srcs, externalId }: IProps): JSX.Element {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <Gallery items={srcs}/>
      </div>

      <div className={styles['description']}>
        <Text type={'description'}>#{ externalId }</Text>
      </div>
    </div>
  );
}

export default React.memo(Image);
