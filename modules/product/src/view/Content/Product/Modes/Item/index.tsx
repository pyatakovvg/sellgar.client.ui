
import { Text, Link } from "@library/kit";
import { selectData } from '@widget/bucket';

import React from 'react';
import { useSelector } from 'react-redux';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  uuid: string;
  isActive?: boolean;
  value: string;
  vendor: string;
  onChange?(): void;
}


function ModeItem({ uuid, isActive, value, onChange }: IProps): JSX.Element {
  const bucket = useSelector(selectData) as any;

  const markerClassName = React.useMemo(() => cn(styles['marker'], {
    [styles['is-active']]: isActive,
  }), [isActive]);
  const count = React.useMemo(() => {
    if ( ! bucket) {
      return 0;
    }
    const product = bucket['products'].find((item: any) => item['modeUuid'] === uuid);
    return product ? product['count'] : 0;
  }, [bucket]);

  return (
    <div className={styles['wrapper']} onClick={onChange}>
      <div className={styles['control']}>
        <span className={markerClassName} />
      </div>
      <div className={styles['content']}>
        <Text>{ value }</Text>
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
