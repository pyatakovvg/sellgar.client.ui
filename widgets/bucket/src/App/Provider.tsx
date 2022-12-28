
import React from 'react';

import { getBucket } from './store/commands';


interface IProps {
  children: any;
}


function Provider({ children }: IProps) {
  React.useEffect(() => {
    (async () => {
      await getBucket();
    })();
  }, []);

  return children;
}

export default Provider;
