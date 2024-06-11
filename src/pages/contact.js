import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import SponsorLogos from '@site/src/components/SponsorLogos.js';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <Layout
      title="Impact Markets"
      description="Sell your impact, buy impact you are about">
      <div className='main-body-container'>
        <div className="responsive-container3" style={{justifyContent: "center"}}>
          <div>
            <h1 class="title-font">
            Build with us.
            </h1>
            
          </div>
          <div>
            <img src="/img/grey_bg_roundedcorners.png" alt="placeholder" style={{padding: '0px 10px', borderRadius:'24px' }} />
          </div>
          <p><a href="mailto:team@hypercerts.org">Email us</a> if you are interested in integrating hypercerts into your processes or in becoming a funder using hypercerts: team [at] hypercerts.org</p>
          <p>Join our <a href="https://t.me/+YF9AYb6zCv1mNDJi" target="_blank" rel="noopener noreferrer">Telegram Group</a> to stay up to date.</p>
          <p>Need help? Join our <a href="https://discord.gg/UZt8cBnP4w" target="_blank" rel="noopener noreferrer">Discord</a> and post in the help forum.</p>
          <p>Or find your way to our <a href="https://github.com/hypercerts-org/hypercerts" target="_blank" rel="noopener noreferrer">GitHub repositories</a> to follow our technical development.</p>
        </div>
      </div>
        
        {/* partner logos */}
        <div className="child" style={{marginTop: '50px'}}>
          <SponsorLogos />
        </div>
    </Layout>
  );
}

export default HomepageHeader;
