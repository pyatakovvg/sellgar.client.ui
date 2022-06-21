
import React from 'react';

// import cn from 'classnames';
import styles from './default.module.scss';


interface IProps {
  href?: string;
  title: string;
}

// interface ILinkProps {
//   isActive?: boolean;
//   children: React.ReactNode;
// }


// function Link({ isActive, children }: ILinkProps): JSX.Element {
//   const linkClassName = React.useMemo(() => cn(styles['link'], {
//     [styles['active']]: isActive,
//   }), [isActive]);
//
//   return (
//     <div className={linkClassName}>
//       <span className={styles['title']}>{ children }</span>
//     </div>
//   );
// }

function Item({ title }: IProps): JSX.Element {
  return <p>{ title }</p>;
  //  return (
  //   <NavLink className={styles['wrapper']} href={process.env['PUBLIC_URL'] + href}>
  //     { title }
  //   </NavLink>
  // );
}

Item.defaultProps = {
  title: '',
  href: '',
};

export default Item;
