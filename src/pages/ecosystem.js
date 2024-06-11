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
      <div className='main-body-container'>
        <div className="child">
          <h1 class="title-font" style={{textAlign:'center'}}>
          Become part of the future of impact funding networks
          </h1>
          <p class="text-font">
            Every hypercert is a public claim on a discrete piece of work and impact resulting from that work. Projects can create hypercerts and distribute them to contributors. Funders can own hypercert fractions — and the rights that come with them. Impact evaluators can create value for projects and funders by assessing the quality of hypercerts and offering ratings.
          </p>
          <p class="text-font">
            Hypercerts create interoperability by serving as a single, open, shared, decentralized database for impact claims and funding mechanisms.
          </p>
        </div>
        <div className="responsive-container" style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          }}>
          <div className="child">
            <div style={{textAlign: 'center'}}>
              <img src="/img/gitcoin_logo.png" alt="Hypercerts" style={{ maxWidth: '300px', maxHeight: '100%', width: '60%' }} />
            </div>
          </div>
          <div className="child">
            <h2 class="title-font">Hypercerts for Gitcoin</h2>
            <p class="text-font">
              Buying hypercerts retrospectively allows funders to increase their funding in relation to the impact created, incentivizing projects to maximize their positive impact. Funders benefit from a large positive impact and incur project risks. Retrospective funding encourages high-risk/high-potential public goods.
            </p>
          </div>
        </div>
        <div className="responsive-container" style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          }}>
          <div className="child">
            <div style={{textAlign: 'center'}}>
              <img src="/img/voicedeck_logo.png" alt="Hypercerts" style={{ maxWidth: '300px', maxHeight: '100%', width: '60%'  }} />
            </div>
          </div>
          <div className="child">
            <h2 class="title-font">Voicedeck</h2>
            <p class="text-font">
              Buying hypercerts retrospectively allows funders to increase their funding in relation to the impact created, incentivizing projects to maximize their positive impact. Funders benefit from a large positive impact and incur project risks. Retrospective funding encourages high-risk/high-potential public goods.
            </p>
          </div>
        </div>
        <div className="responsive-container" style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          }}>
          <div className="child">
            <div style={{textAlign: 'center'}}>
              <img src="/img/gainforest_logo.png" alt="Hypercerts" style={{ maxWidth: '300px', maxHeight: '100%', width: '60%'  }} />
            </div>
          </div>
          <div className="child">
            <h2 class="title-font">Gainforest</h2>
            <p class="text-font">
              Buying hypercerts retrospectively allows funders to increase their funding in relation to the impact created, incentivizing projects to maximize their positive impact. Funders benefit from a large positive impact and incur project risks. Retrospective funding encourages high-risk/high-potential public goods.
            </p>
          </div>
        </div>
        <div className="responsive-container" style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          }}>
          <div className="child">
            <div style={{textAlign: 'center'}}>
              <img src="/img/hyperboards_logo.png" alt="Hypercerts" style={{ maxWidth: '300px', maxHeight: '100%', width: '60%'  }} />
            </div>
          </div>
          <div className="child">
            <h2 class="title-font">Hyperboards</h2>
            <p class="text-font">
              Buying hypercerts retrospectively allows funders to increase their funding in relation to the impact created, incentivizing projects to maximize their positive impact. Funders benefit from a large positive impact and incur project risks. Retrospective funding encourages high-risk/high-potential public goods.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default HomepageHeader;
