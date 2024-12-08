import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/pages/Home.module.css';
import Roadmap from '@/components/common/RoadmapCarousel';
import GlobeSection from '@/components/home/GlobeSection';
import OpenSourceCard from '@/components/home/OpenSourceCard';
import MissionVisionCards from '@/components/home/MissionVisionCards';
import ProblemSolutionSection from '@/components/home/ProblemSolutionSection';
import IntroductionVideo from '@/components/home/IntroductionVideo';
import FAQ from '@/components/common/FAQ';
import TokenSection from '@/components/token/Representation';
import DAOSection from '@/components/common/DAOSection';
import StepByStep from '@/components/common/StepByStep';
import Link from 'next/link';
import ScrollAnimation from '@/components/common/ScrollAnimation';
import PartnersCarousel from '@/components/partners/PartnersCarousel';
import HeroWrapper from '@/components/common/HeroWrapper';

const HomePage: React.FC = () => {
    const faqs = [
        {
            question: "What is DeGym?",
            answer: "DeGym is a decentralized platform that enables users to participate in gym activities using blockchain technology."
        },
        {
            question: "How do I join DeGym?",
            answer: "You can join DeGym by signing up on our website and purchasing a voucher NFT."
        },
        {
            question: "What are the benefits of joining DeGym?",
            answer: "As a DeGym member, you gain access to exclusive gym activities, earn rewards through staking, and benefit from the security and transparency of blockchain technology."
        },
        {
            question: "Is DeGym available globally?",
            answer: "Yes, DeGym is available to users worldwide. As long as you have access to the internet and a compatible device, you can join and participate in DeGym."
        },
        {
            question: "How can I get in touch with DeGym support?",
            answer: "You can contact DeGym support through our discord's support channel."
        },
    ];

    const howItWorks = [
        { icon: '/img/hw/node_connected.svg', title: 'Gyms Provide Services', description: 'Gyms join the DeGym Network and offer their spaces and services to DeGym users.' },
        { icon: '/img/hw/token.svg', title: 'User Purchases Membership', description: 'The user buys a membership using DGYM tokens.' },
        { icon: '/img/hw/sdk.svg', title: 'User Check-in', description: 'The user goes to the selected gym and checks in using the DeGym app.' },
        { icon: '/img/hw/web3.svg', title: 'DeGym Validation', description: "The DeGym Dapp validates the user's membership and the gym's authenticity." },
        { icon: '/img/hw/wallet.svg', title: 'Gym Payment', description: 'Once the check-in is approved, the DAO triggers a payment to the gym provider.' },
    ];

    return (
        <>
            <Head>
                <title>DeGym</title>
                <meta name="description" content="DeGym - Decentralized Gym Membership and Rewards" />
                <link rel="icon" href="./favicon.ico" />
            </Head>

            <main className={styles.main}>
                <ScrollAnimation>
                    <HeroWrapper>
                        <section className={styles.hero}>
                            <div className={styles.heroInner}>
                                <h1>DeGym</h1>
                                <p className={styles.heroSubtitle}>The first <b>Decentralized Gym Network</b> revolutionizing fitness industry with distributed ledger technology. Seamless Access and Enhanced Rewards</p>
                                <div className={styles.joinSection}>
                                    <Link href="/telegram" className="w-auto">
                                        <button className="p-4">Join the Community</button>
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.heroImage}>
                                <Image
                                    src="/hero.png"
                                    alt="Description of the image"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </section>
                    </HeroWrapper>
                </ScrollAnimation>
                <ScrollAnimation>
                    <GlobeSection />
                </ScrollAnimation>
                <PartnersCarousel />
                <ScrollAnimation>
                    <IntroductionVideo />
                </ScrollAnimation>
                <ScrollAnimation>
                    <ProblemSolutionSection />
                </ScrollAnimation>
                <ScrollAnimation>
                    <MissionVisionCards />
                </ScrollAnimation>
                <ScrollAnimation>
                    <OpenSourceCard />
                </ScrollAnimation>
                <ScrollAnimation>
                    <TokenSection />
                </ScrollAnimation>
                <ScrollAnimation>
                    <StepByStep steps={howItWorks} title="How It Works" />
                </ScrollAnimation>
                <ScrollAnimation>
                    <DAOSection />
                </ScrollAnimation>
                <ScrollAnimation>
                    <Roadmap />
                </ScrollAnimation>
                <ScrollAnimation>
                    <FAQ faqs={faqs} />
                </ScrollAnimation>
            </main>
        </>
    );
};

export default HomePage;