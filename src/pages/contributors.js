import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HyperboardWidget from '@site/src/components/HyperboardWidget';

import styles from '@site/src/css/custom.css';

function HomepageHeader() {
  const [currentWidget, setCurrentWidget] = useState('391704e8-c271-46d5-b328-469c68d7b696');

  return (
    <Layout
      title="hypercerts overview"
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
        <div className="child" style={{width: '100%',}}>
          <h1 className="hero-font">Contributors</h1>
          <p className="text-font">
            Thi hyperboard shows all contributors, supporters, and funders of the hypercerts project. Thank you to all of you!
          </p>
          {currentWidget === '391704e8-c271-46d5-b328-469c68d7b696' && <HyperboardWidget hyperboardId="391704e8-c271-46d5-b328-469c68d7b696" minWidth="50px" width="100%"/>}
          {currentWidget === '8a7c1f28-329e-4ad8-8d68-7f083432a271' && <HyperboardWidget hyperboardId="8a7c1f28-329e-4ad8-8d68-7f083432a271" minWidth="50px" width="100%"/>}
          {currentWidget === 'f8e4998d-6e67-4c9d-87d1-ade7e4baefa3' && <HyperboardWidget hyperboardId="f8e4998d-6e67-4c9d-87d1-ade7e4baefa3" minWidth="50px" width="100%"/>}
          {currentWidget === 'db87d547-67e3-4f8a-b326-bce197f775c5' && <HyperboardWidget hyperboardId="db87d547-67e3-4f8a-b326-bce197f775c5" minWidth="50px" width="100%"/>}
          <div className={clsx('buttons')}>
            <button className={clsx('primaryButton')} onClick={() => setCurrentWidget('391704e8-c271-46d5-b328-469c68d7b696')}>All time</button>
            <button className={clsx('primaryButton')} onClick={() => setCurrentWidget('8a7c1f28-329e-4ad8-8d68-7f083432a271')}>2022</button>
            <button className={clsx('primaryButton')} onClick={() => setCurrentWidget('f8e4998d-6e67-4c9d-87d1-ade7e4baefa3')}>2023</button>
            <button className={clsx('primaryButton')} onClick={() => setCurrentWidget('db87d547-67e3-4f8a-b326-bce197f775c5')}>2024</button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomepageHeader;
