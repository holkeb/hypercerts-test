import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HyperboardWidget from '@site/src/components/HyperboardWidget';
import SponsorLogos from '@site/src/components/SponsorLogos.js';
import SponsorLogos2 from '@site/src/components/SponsorLogos2.js';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <Layout
      title="hypercerts overview"
      description="Hypercerts are the web3 standard for impact certificates">
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

        {/* hero banner */}
        <div style={{
          textAlign: 'center', 
          backgroundSize: 'cover',
          backgroundImage: 'url(/img/hypercerts_key_visual.png)',
          backgroundPosition: 'center',
          width: '100%',
          }}>
          <h1 class="hero-font">Reward and fund impact</h1>
          <img src="/img/hypercert_example.png" alt="Hypercerts" style={{ maxWidth: '300px', maxHeight: '100%' }} />
        </div>

        {/* partner logos */}
        <div className="child" style={{marginTop: '0px'}}>
          <SponsorLogos2 />
        </div>
      </div>
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
        <div className="child" style={{marginTop: '70px'}}>
          <h1 class="title-font">
            Hypercerts are a new protocol for funding and rewarding positive impact
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
              <img src="/img/recurring_income.svg" alt="Hypercerts" style={{ maxWidth: '300px', maxHeight: '100%' }} />
            </div>
          </div>
          <div className="child">
            <h2 class="title-font">Recurring income for public goods</h2>
            <p class="text-font">
              Retrospective funding rewards projects for the impact they have created. As long as projects create impact, they can create hypercerts for the impact and get retrospective rewards for these. In contrast to today’s grant systems, projects have recurring income streams.
            </p>
          </div>
        </div>
        <div className="responsive-container" style={{
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <div className="child">
            <div style={{textAlign: 'center'}}>
              <img src="/img/increasing_rewards.svg" alt="Hypercerts" style={{ maxWidth: '300px', maxHeight: '100%' }} />
            </div>
          </div>
          <div className="child">
            <h2 class="title-font">High-potential public goods</h2>
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
              <img src="/img/impact_bridge.svg" alt="Hypercerts" style={{ maxWidth: '300px', maxHeight: '100%' }} />
            </div>
          </div>
          <div className="child">
            <h2 class="title-font">De-risking impact-funding</h2>
            <p class="text-font">
              Retrospective funders allocate their funds more effectively as they face less uncertainty about the impact projects had. This is especially important when the impact of public goods doesn't increase linearly. Retrospective funders wouldn’t waste funds by rewarding a project for building half a bridge.
            </p>
          </div>
        </div>
        <div className="transparentContainer" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '400px',
          width: '100%',
        }}>
        <div style={{maxWidth: '600px'}}>
          <h1 className="title-font" style={{textAlign: 'center'}}>
           Hypercerts transform siloed funding platforms into interconnected funding networks
          </h1>
          </div>
        </div>
        <div style={{height: '40px'}}>
        </div>
      </div>
    </Layout>
  );
}

export default HomepageHeader;
