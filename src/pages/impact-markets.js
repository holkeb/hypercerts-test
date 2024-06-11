import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

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
            Recognize contributions with a hypercert.
            </h1>
          </div>
          <div>
            <img src="/img/grey_bg_roundedcorners.png" alt="placeholder" style={{padding: '0px 10px', borderRadius:'24px' }} />
          </div>
          
        </div>
      </div>
    </Layout>
  );
}

export default HomepageHeader;
