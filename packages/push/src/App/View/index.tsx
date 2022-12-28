
import { close } from '../store/commands';
import { selectNotifications } from '../store/slice';

import React, { ReactPortal } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';

import Notification from './Notification';

import styles from './defaults.module.scss';


function Push(): ReactPortal | null {
  const dispatch = useDispatch();
  const [_document, setDocument] = React.useState<Document | null>(null);
  const notifications: Array<any> = useSelector(selectNotifications);


  function handleCloseByIndex(uuid: string) {
    dispatch<any>(close(uuid));
  }

  React.useEffect(() => {
    setDocument(document);
  }, []);

  if ( ! _document) {
    return null;
  }

  const portalElement = _document.querySelector('#push');

  if ( ! portalElement) {
    return null;
  }

  return ReactDOM.createPortal((
    <div className={styles['wrapper']}>
      <div className={styles['content']}>
        {notifications.map((notification: any) => (
          <Notification key={notification['uuid']} {...notification} onClose={handleCloseByIndex} />
        ))}
      </div>
    </div>
  ), portalElement);
}

export default Push;
