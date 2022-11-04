
import React from 'react';

import LineCard from "./Line";


type TType = 'line' | 'card';

interface IProps {
  type?: TType,
  uuid: string;
  externalId: string;
  images: Array<any>;
  name: string;
  group: any;
  category: any;
  product: any;
  allCommentCount: number;
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
