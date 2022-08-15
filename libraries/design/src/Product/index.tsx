
import React from 'react';

import LineCard from "./Line";


type TType = 'line' | 'card';

interface IProps {
  type?: TType,
  uuid: string;
  externalId: string;
  gallery: Array<any>;
  title: string;
  originName: string;
  group: any;
  category: any;
  brand: any;
  modes: Array<any>;
  commentsCount: number;
}


function Factory({ type, ...rest }: IProps) {
  switch(type) {
    default: return <LineCard {...rest} />
  }
}

Factory.defaultProps = {
  type: 'line',
};

export default React.memo(Factory);
