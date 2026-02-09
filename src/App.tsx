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
      title: 'Digitizing Commodity Trade Receivables with Blockchain Economics',
      subtitle: 'Connecting commodity traders who need instant liquidity with stablecoin investors seeking real-world yield\u2014through tokenized, blockchain-settled receivables.',
      cta_text: 'Book a Demo Call \u2192',
      cta_link: 'https://calendly.com/adtimokhin/bunkering-brokering-intro-call'
    },
    advantages: {
      section_title: 'Our Platform Capabilities',
      items: [{
        title: 'Tokenized Receivables Marketplace',
        description: 'Moneta transforms commodity trade receivables into tokenized assets. Traders upload invoices, we tokenize them, and accredited investors purchase them individually or through our diversified pool\u2014unlocking liquidity that traditional platforms can\'t reach.'
      }, {
        title: 'Blockchain-Settled Infrastructure',
        description: 'At ~$0.10 per transaction, blockchain settlement makes short-term receivables economically viable where traditional securitization fails. What once required expensive clearinghouse fees now happens efficiently on-chain, making the unit economics finally work.'
      }, {
        title: 'No Recall Rights',
        description: 'Unlike competitors (TradeQ, LiquidX, Mitigram, Komgo), we eliminate recall options entirely. Traders get payment certainty without unexpected early repayment demands that create operational uncertainty.'
      }, {
        title: 'Built for Commodity Trading',
        description: 'Every part of Moneta is tailored for commodity trading\u2014understanding bunker contracts, agricultural receivables, metal trading invoices, and the counterparty structures unique to physical commodity markets.'
      }]
    },
    features: {
      section_title: 'What Powers Moneta',
      items: [{
        title: 'Zero-Knowledge Proof Infrastructure',
        description: 'Our proof engine validates receivable authenticity and trader creditworthiness without exposing sensitive trade data, establishing a verifiable layer of trust while preserving commercial privacy for all participants.'
      }, {
        title: 'Real-Time Portfolio Insights',
        description: 'A unified dashboard gives traders and investors transparent visibility into receivable status, portfolio exposure, and performance\u2014continuously updated and auditable on-chain.'
      }, {
        title: 'Secure Cloud-Native Architecture',
        description: "Moneta's microservice system combines blockchain-backed settlement with enterprise-grade databases, ensuring reliability, scalability, and compliance. Smart contracts automate escrow and distribution without manual reconciliation."
      }]
    },
    closing_cta: {
      title: 'Join the Future of Commodity Trade Finance',
      subtitle: "Whether you're a commodity trader needing liquidity or an accredited investor seeking stablecoin yield\u2014Moneta makes it possible to move capital with verifiable trust and blockchain economics.",
      cta_text: 'Book a Demo Call \u2192',
      cta_link: 'https://calendly.com/adtimokhin/bunkering-brokering-intro-call'
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
