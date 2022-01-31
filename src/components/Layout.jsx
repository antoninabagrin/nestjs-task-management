import React from 'react';
// import { Header } from './Header';
import styles from './Layout.module.css';

export function Layout(props) {
  return (
    <div className={styles.layout}>
      {/* <Header /> */}
      <main>{props.children}</main>
    </div>
  );
}
