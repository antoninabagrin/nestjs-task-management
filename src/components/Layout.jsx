import React from 'react';
import styles from './Layout.module.css';

export function Layout(props) {
  return (
    <div className={styles.layout}>
      <main>{props.children}</main>
    </div>
  );
}
