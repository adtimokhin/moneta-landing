import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Advantages } from './components/Advantages';
import { Features } from './components/Features';
import { ClosingCTA } from './components/ClosingCTA';
import { Footer } from './components/Footer';
export function App() {
  // Site data
  const siteData = {
    hero: {
      title: 'Digitizing Maritime Receivables with Trust and Transparency',
      subtitle: 'Securitizing receivables and enabling real-time risk evaluation with zero-knowledge proofs.',
      cta_text: 'Book a Demo Call →',
      cta_link: 'https://calendly.com/moneta/demo'
    },
    advantages: {
      section_title: 'Our Platform Capabilities',
      items: [{
        title: 'Transparent Verification',
        description: 'Moneta replaces manual checks with cryptographic validation. Every receivable and transaction can be independently verified without revealing sensitive trade data, ensuring confidence for all sides.'
      }, {
        title: 'Faster, Automated Operations',
        description: 'From document collection to proof generation, Moneta automates the entire receivable lifecycle. What once required weeks of reconciliation now happens in minutes.'
      }, {
        title: 'Liquidity Unlock',
        description: "Verified receivables are transformed into standardized financial instruments. Traders and investors can exchange them through Moneta's platform, turning static assets into active capital."
      }, {
        title: 'Built for Maritime Finance',
        description: 'Every part of Moneta is tailored for maritime trading — understanding bunker contracts, voyage receivables, and counterparty structures unique to the industry.'
      }]
    },
    features: {
      section_title: 'What Powers Moneta',
      items: [{
        title: 'Zero-Knowledge Proof Infrastructure',
        description: 'Our proof engine validates data integrity without exposing private details, establishing a verifiable layer of trust for all participants.'
      }, {
        title: 'Real-Time Portfolio Insights',
        description: 'A unified dashboard gives issuers and investors transparent visibility into receivable health, exposure, and performance — continuously updated and auditable.'
      }, {
        title: 'Secure Cloud-Native Architecture',
        description: "Moneta's microservice system combines blockchain-backed commitments with enterprise-grade databases, ensuring reliability, scalability, and compliance."
      }]
    },
    closing_cta: {
      title: 'Join the Future of Maritime Finance',
      subtitle: "Whether you're an issuer, buyer, or investor — Moneta makes it possible to move capital through the maritime world with verifiable trust.",
      cta_text: 'Book a Demo Call →',
      cta_link: 'https://calendly.com/moneta/demo'
    }
  };
  return <div className="min-h-screen w-full bg-dark-400 text-light-300">
      <Header />
      <Hero title={siteData.hero.title} subtitle={siteData.hero.subtitle} ctaText={siteData.hero.cta_text} ctaLink={siteData.hero.cta_link} />
      <Advantages sectionTitle={siteData.advantages.section_title} items={siteData.advantages.items} />
      <Features sectionTitle={siteData.features.section_title} items={siteData.features.items} />
      <ClosingCTA title={siteData.closing_cta.title} subtitle={siteData.closing_cta.subtitle} ctaText={siteData.closing_cta.cta_text} ctaLink={siteData.closing_cta.cta_link} />
      <Footer />
    </div>;
}