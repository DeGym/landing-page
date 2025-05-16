import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/components/partners/PartnersCarousel.module.css';

interface Partner {
    name: string;
    logo: string;
    link: string;
}

const partnersList: Partner[] = [
    { name: 'Taraxa', logo: '/img/partners/taraxa.png', link: 'https://taraxa.io' },
    { name: 'Taraxa Catalyst', logo: '/img/partners/taraxa-catalyst.png', link: 'https://taraxacatalyst.com' },
    { name: 'Yield Reviews', logo: '/img/partners/yield-reviews.png', link: 'https://yield.reviews' },
    { name: 'One Bot', logo: '/img/partners/onebot.png', link: 'https://t.me/taraxaOneBot' },
    { name: 'Tokeniza', logo: '/img/partners/tokeniza.png', link: 'https://tokeniza.com.br' },
    { name: 'Nassim', logo: '/img/partners/nassim.png', link: 'https://nassim.com.br' },
    { name: 'NearX', logo: '/img/partners/nearX.webp', link: 'https://nearx.com.br' },

];

const PartnersCarousel: React.FC = () => {
    const [partners, setPartners] = useState<Partner[]>([]);
    const carouselRef = useRef<HTMLDivElement>(null);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        // Triple the partners array to create a seamless loop
        setPartners([...partnersList, ...partnersList, ...partnersList]);
    }, []);

    useEffect(() => {
        const carousel = carouselRef.current;
        if (!carousel) return;

        const scrollSpeed = 0.5; // Adjust this value to change the scroll speed
        let animationFrameId: number;

        const animate = () => {
            setScrollPosition((prevPosition) => {
                const newPosition = prevPosition + scrollSpeed;
                if (newPosition >= carousel.scrollWidth / 3) {
                    return 0;
                }
                return newPosition;
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animationFrameId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, [partners]);

    return (
        <section className={styles.partnersSection}>
            <div className={styles.neonBorderTop}></div>
            <div className={styles.carouselContainer}>
                <div
                    className={styles.carousel}
                    ref={carouselRef}
                    style={{ transform: `translateX(${-scrollPosition}px)` }}
                >
                    {partners.map((partner, index) => (
                        <div key={`${partner.name}-${index}`} className={styles.partnerItem}>
                            <Link href={partner.link} target="_blank" rel="noopener noreferrer" className={styles.partnerLink}>
                                <Image
                                    src={partner.logo}
                                    alt={partner.name}
                                    width={150}
                                    height={150}
                                    objectFit="contain"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <div className={styles.neonBorderBottom}></div>
        </section>
    );
};

export default PartnersCarousel;