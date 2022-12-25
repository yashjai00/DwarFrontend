import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/UI/Footer';
export default function Home() {
  return (
    <div className={styles.container}>
      <Hero />
      <Features />
      <Footer />
    </div>
  );
}
