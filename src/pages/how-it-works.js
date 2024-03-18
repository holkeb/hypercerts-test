import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <Layout
      title="How it works"
      description="Hypercerts are the web3 standard for impact certificates <head />">
      <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '20px',
          maxWidth: '800px',
        }}>
        <div className="child">
          <h1 class="hero-font">
          How it works
          </h1>
          <p class="text-font">
            Every hypercert is a public claim on a discrete piece of work and impact resulting from that work. Projects can create hypercerts and distribute them to contributors. Funders can own hypercert fractions — and the rights that come with them. Impact evaluators can create value for projects and funders by assessing the quality of hypercerts and offering ratings.
          </p>
          <p class="text-font">
            Hypercerts create interoperability by serving as a single, open, shared, decentralized database for impact claims and funding mechanisms.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default HomepageHeader;
