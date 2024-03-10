import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HyperboardWidget from '@site/src/components/HyperboardWidget';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  return (
    <Layout
      title="hypercerts overview"
      description="Hypercerts are the web3 standard for impact certificates <head />">
      <div style={{
          display: 'flex',
          flexDirection: 'column', // Stack children horizontally
          alignItems: 'center', // Align children vertically in the middle
          justifyContent: 'space-between', // Distribute extra space
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '100px',
          padding: '0 50px',
          maxWidth: '1080px',
        }}>
        <div className="responsive-container" style={{
          alignItems: 'center', // Align children vertically in the middle
          justifyContent: 'space-between', // Distribute extra space
        }}>
          <div className="child" style={{flex: 1, paddingRight: '2rem' }}> {/* Text content on the left */}
            <h1 class="title-font">Reward impact with hypercerts</h1>
            <p class="text-font">
              To solve the challenges we face this century, we need scalable and
              sustainable financing models for public goods that reward
              contributors for the positive impact they create.
            </p>
            <div>
              <Link to="/ecosystem" className="primaryButton">Launch app</Link>
              <Link to="/ecosystem" className="secondaryButton">Read the docs</Link>
            </div>
          </div>
          <div className="child" style={{ flex: 1 }}> {/* Image placeholder on the right */}
            <div style={{
              border: '0px solid #eee',
              borderRadius: '8px',
              padding: '1rem',
              textAlign: 'center',
              minHeight: '200px', // Adjust height as necessary
            }}>
              <img src="/img/hypercert_example_shadow.png" alt="Hypercerts" style={{ maxWidth: '300px', maxHeight: '100%' }} />
            </div>
          </div>    
        </div>
          <h1>hyperboard</h1>
            <HyperboardWidget hyperboardId="83da49f1-f12d-4e10-a772-d7e632d993ef" minWidth="400px" />
      </div>
    </Layout>
  );
}

export default HomepageHeader;
