
import React from 'react';

import Item from './Item';
import Comment from "./Comment";
import AddComment from "./AddComment";

import styles from './@media/index.module.scss';


interface IProps {
  uuid: string;
  productUuid: string;
  author: string;
  positive: string;
  negative: string;
  description: string;
  comments: Array<any>;
  createdAt: string;
}


function Opinion({ comments, uuid, productUuid, ...props }: IProps) {
  const [isOpen, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <div className={styles['wrapper']}>
      <div className={styles['item']}>
        <Item {...props} onClick={handleOpen} />
      </div>
      {isOpen && (
        <div className={styles['control']}>
          <AddComment parentUuid={uuid} productUuid={productUuid} onReset={handleClose} />
        </div>
      )}
      { !! comments.length && (
        <div className={styles['comments']}>
          {comments.map((comment: any) => (
            <div key={comment['uuid']} className={styles['comment']}>
              <Comment {...comment} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Opinion;
