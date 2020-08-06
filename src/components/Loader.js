import React from 'react'
import styles from './Loader.module.css'

export default function Loader({setClass}) {

    return (
        <div className={setClass ? styles.middle : styles.loader}>
        </div>
    )
}