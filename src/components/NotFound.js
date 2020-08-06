import React from 'react'
import styles from './NotFound.module.css'
import { Link } from 'react-router-dom'

export default function NotFound({error}) {
    return (
        <div className={styles.container}>
            <div className={styles.message}>
            <h1>404</h1>
            <p>This page doesn't exist </p>
            <Link className={styles.link} to={"/"}>Go To Home Page</Link>
            </div>
        </div>
    )
}