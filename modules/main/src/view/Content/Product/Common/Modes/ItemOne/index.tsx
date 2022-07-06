
import { Text } from "@library/kit";
import { selectData } from '@widget/bucket';

import React from 'react';
import { useSelector } from 'react-redux';

import cn from 'classnames';
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
        <Text type={'description'}>&nbsp;&nbsp;[{ vendor }]</Text>
      </div>
      { !! count && (
        <div className={styles['bucket']}>
          <Text className={styles['info']} type={'description'}>в корзине { count } шт.</Text>
        </div>
      )}
    </div>
  );
}

export default ModeItem;
