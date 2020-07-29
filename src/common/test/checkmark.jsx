import React, { Component, Fragment } from 'react'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Sidebar from '../../theme/DocSidebar/';

import styles from './styles.module.css';


const Test = () => {
    const context = useDocusaurusContext();
    const {siteConfig = {}} = context;
    const {title} = siteConfig;

    console.log(context);

    return (
        <h1>
            woooo321
            {title}
            <Sidebar/>
        </h1>
    );
};

export default Test;