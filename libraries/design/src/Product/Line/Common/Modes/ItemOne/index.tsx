
import { Text, Link } from "@library/kit";
import { selectData } from '@widget/bucket';

import React from 'react';
import { useSelector } from 'react-redux';

import styles from './@media/index.module.scss';


interface IProps {
  uuid: string;
  value: string;
  vendor: string;
}


function ModeItem({ uuid, value }: IProps): JSX.Element {
  const bucket = useSelector(selectData) as any;

  const count = React.useMemo(() => {
    if ( ! bucket) {
      return 0;
    }
    const product = bucket['products'].find((item: any) => item['modeUuid'] === uuid);
    return product ? product['count'] : 0;
  }, [bucket]);

  return (
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        <span className={styles['label']}>Комплект:</span>
        <p className={styles['title']}>{ value }</p>
      </div>
      { !! count && (
        <div className={styles['bucket']}>
          <Text type={'description'}>
            <Link href={'/checkout'}>в корзине { count } шт.</Link>
          </Text>
        </div>
      )}
    </div>
  );
}

export default ModeItem;
