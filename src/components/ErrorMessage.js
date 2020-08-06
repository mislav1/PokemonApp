import React from 'react'
import styles from './ErrorMessage.module.css'
import { Link } from 'react-router-dom'

export default function ErrorMessage({ error }) {
    return (
        <div className={styles.container}>
            <div className={styles.message}>
                <p>Something Went Wrong!! </p>
                <p>{error}</p>
                <Link className={styles.link} to={"/"}>Go To Home Page</Link>
            </div>
        </div>
    )
}