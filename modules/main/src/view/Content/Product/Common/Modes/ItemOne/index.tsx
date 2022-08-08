
import { Text } from "@library/kit";
import { selectData } from '@widget/bucket';

import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import styles from './@media/index.module.scss';


interface IProps {
  uuid: string;
  value: string;
  vendor: string;
}


function ModeItem({ uuid, value, vendor }: IProps): JSX.Element {
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
        <Text>{ value }</Text>
        <Text type={'description'}>&nbsp;&nbsp;#{ vendor }</Text>
      </div>
      { !! count && (
        <div className={styles['bucket']}>
          <Text type={'description'}>
            <Link href={'/checkout'}>
              <a className={styles['info']}>в корзине { count } шт.</a>
            </Link>
          </Text>
        </div>
      )}
    </div>
  );
}

export default ModeItem;
