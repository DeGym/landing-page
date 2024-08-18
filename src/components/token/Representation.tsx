"use client"

import React, { useEffect, useRef } from 'react';
import styles from '@/styles/components/token/Representation.module.css';

const TokenSection: React.FC = () => {
    const counterRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!counterRef.current) return;

        const countTo = parseInt(counterRef.current.getAttribute('data-count') || '0', 10);
        let count = 0;
        const increment = countTo / 50; // Duration of the animation

        const updateCounter = () => {
            if (!counterRef.current) return;

            count += increment;
            if (count >= countTo) {
                counterRef.current.innerText = countTo.toLocaleString();
            } else {
                counterRef.current.innerText = Math.ceil(count).toLocaleString();
                requestAnimationFrame(updateCounter);
            }
        };

        updateCounter();
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.col1}>
                <div className={styles.sectionTitle}>Token</div>
                <div className={styles.sectionCoin}>
                    <img src="/img/token/logo_token.png" alt="Token image" className={`${styles.coinImage} ${styles.shader}`} />
                </div>
            </div>
            <div className={styles.col2}>
                <div className={styles.tokenDescription}>
                    A deflationary utility token ($DGYM) that participates in <span className={styles.textPrimary}>building a democratic DAO infrastructure</span>
                </div>
                <div className={styles.sectionCoinMobile}>
                    <img src="/img/token/logo_token.png" alt="Token image" className={`${styles.coinImageMd} ${styles.shader}`} />
                </div>
                <div className={styles.tokenSupply}>
                    <div className={styles.sectionTitleWhite}>Max supply</div>
                    <div className={styles.numInner} ref={counterRef} data-count="10000000000">0</div>
                    <div className={styles.sectionTitleWhite}>$DGYM</div>
                </div>
            </div>
        </section>
    );
};

export default TokenSection;