import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HyperboardWidget from '@site/src/components/HyperboardWidget';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <Layout
      title="hypercerts overview"
      description="Hypercerts are the web3 standard for impact certificates <head />">
      <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '20px',
        }}>
        <div className="child" style={{width: '100%'}}>
        <h1>Contributors</h1>
        <p class="text-font">
          Thank you to all contributors and sponsors.
        </p>
          <HyperboardWidget hyperboardId="83da49f1-f12d-4e10-a772-d7e632d993ef" minWidth="50px" width="100%"/>
        </div>
      </div>
    </Layout>
  );
}

export default HomepageHeader;
