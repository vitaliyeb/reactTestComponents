import React from "react";
import styles from './style.module.css';

interface IProps {
    children: React.ReactElement<any, any>
}

const Layout = ({ children }: IProps) => {
    return <div className={styles.layout}>
        { children }
    </div>
}

export default Layout;