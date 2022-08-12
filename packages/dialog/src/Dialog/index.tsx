
import React from 'react';
import types from 'prop-types';
import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import { closeDialog } from '../store/commands';
import { resetStateAction, selectName, selectData, selectIsOpen } from '../store/slice';

import cn from 'classnames';
import styles from './@media/index.module.scss';


interface IProps {
  name: string;
  children: any;
  onClose?(name: string): void;
}


function Dialog({ name, children, onClose }: IProps) {
  const dispatch = useDispatch();
  const wrapperRef = React.useRef(null);
  const [_document, setDocument] = React.useState<Document | null>(null);

  const data = useSelector(selectData);
  const isOpen = useSelector(selectIsOpen);
  const actionDialogName = useSelector(selectName);

  function handleCloseDialog() {
    dispatch(closeDialog());
    onClose && onClose(name);
  }

  function handleOutClick(event: any) {
    const { current: wrapperElement } = wrapperRef;
    const target = event.target;

    if (wrapperElement === target) {
      handleCloseDialog();
    }
  }

  React.useEffect(() => {
    setDocument(document);
  }, []);

  React.useEffect(() => {
    return () => {
      dispatch(resetStateAction(null));
    };
  }, []);

  const classNameCloseDialog = React.useMemo(() => cn(styles['close'], 'icon-close'), []);

  if ( ! _document) {
    return null;
  }

  return isOpen && (name === actionDialogName) && (
    ReactDOM.createPortal((
      <div className={styles['wrapper']}>
        <div ref={wrapperRef} className={styles['content']} onClick={handleOutClick}>
          <div className={styles['dialog']}>
            <span className={classNameCloseDialog} onClick={handleCloseDialog} />
            { React.Children.map(children, (child) => React.cloneElement(child, { data })) }
          </div>
        </div>
      </div>
    ), _document.querySelector('#dialog') as Element)
  );
}

Dialog.propTypes = {
  data: types.any,
  name: types.string,
  isOpen: types.bool,
  onClose: types.func,
};

Dialog.defaultProps = {
  data: null,
  name: null,
  isOpen: false,
};

export default Dialog;
