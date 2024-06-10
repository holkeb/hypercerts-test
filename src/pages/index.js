import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HyperboardWidget from '@site/src/components/HyperboardWidget';
import SponsorLogos from '@site/src/components/SponsorLogos.js';
import MediaItem from '@site/src/components/MediaItem';

import styles from './index.module.css';

function HomepageHeader() {
  const [selectedButton, setSelectedButton] = useState(1);

  const buttonContent = [
    "Projects",
    "Evaluators",
    "Funding platforms",
    "Everyone",
  ];
  return (
    <Layout
      title="hypercerts overview"
      description="Fund and Reward Impact with Hypercerts">
      <div className="main-body-container">

        {/* hero banner */}
        <div style={{
          textAlign: 'center', 
          backgroundSize: 'cover',
          backgroundImage: 'url(/img/hypercerts_hero_bg.png)',
          backgroundPosition: 'center',
          width: '100%',
          }}>
          <h1 class="hero-font" style={{
          marginTop: '50px',
          }}>
            Fund and Reward Impact</h1>
          <img src="/img/hypercert_edgecity.png" alt="Hypercerts" style={{ maxWidth: '250px', maxHeight: '100%', marginBottom: '30px' }} />
        </div>

        {/* partner logos */}
        <div className="child" style={{marginTop: '0px'}}>
          <SponsorLogos />
        </div>
      </div>

      {/* Main body */}
      <div className="main-body-container">

        {/* longer introduction */}  
        <div className="child" style={{marginTop: '70px', maxWidth: '700px'}}>
          <h1 class="title-font">
            Hypercerts enable scalable and sustainable impact funding models
          </h1>
          <p class="text-centered" style={{maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
            Every hypercert accounts for a discrete piece 
            of work and represents the impact resulting from that 
            work. Projects create hypercerts for their work. Evaluators assess the outputs,
            outcomes and impact of projects' work. Funders buy hypercert 
            fractions and receive the rights to claim the represented
            impact. 
          </p>
        </div>
      </div>

        {/* what is a hypercert */}  
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '10px',
        marginTop: '20px',
        maxWidth: '100%',
        }}>
        <div className="child" style={{
          background: 'linear-gradient(to bottom, white, #ececec)',
          borderRadius: '10px', 
          width: '100%'}}>
          <img src="/img/what_is_a_hypercert_intro.png" alt="Hypercerts" style={{ maxWidth: '100%', maxHeight: '100%' }} />
        </div>
        
        {/* who is hypercerts for */}  
        <div className="child" style={{
        marginTop: '70px',
        }}>
          <p class="text-centered" style={{maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
            Build to strengthen
          </p>
          <h1 class="hero-font">
            Collective goods
          </h1>
        </div>
        {/* Buttons Row */}
      <div style={{
        display: 'flex',
        justifyContent: 'center', 
        marginTop: '20px',
      }}>
        {[1, 2, 3, 4].map((buttonNumber) => (
          <button
            key={buttonNumber}
            onClick={() => setSelectedButton(buttonNumber)}
            style={{
              margin: '0 0px', // Add some space around the buttons
              padding: '10px 20px', // Add padding to make buttons bigger
              backgroundColor: selectedButton === buttonNumber ? '#000000' : '#ffffff',
              color: selectedButton === buttonNumber ? '#ffffff' : '#000000',
              border: '1px solid #000000', // Add a border
              borderRadius: '8px', // Add rounded corners
              outline: 'none', // Remove outline when focused
              cursor: 'pointer', // Change cursor on hover
            }}
          >
            {buttonNumber === 1 && 'Projects'}
            {buttonNumber === 2 && 'Funders'}
            {buttonNumber === 3 && 'Evaluators'}
            {buttonNumber === 4 && 'Funding Platforms'}
          </button>
        ))}
      </div>

      {/* Content Area button 1*/}
      {selectedButton == 1 && (
        <div className="main-body-container">
          <div className="responsive-container2">
            <div>
            <h2 class="heading-font">
              Sell the impact you created
            </h2>
            <p class="text-font">
              Create hypercerts that represents the 
              impact your project had. Let credible 
              evaluators confirm the impact. Sell 
              the right to claim this impact to funders
              and become financially sustainable by 
              continuously selling your impact.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap', // Allow wrapping if content overflows
              justifyContent: 'flex-start', // Align items to the left
            }}>
              <a href="#internal-link" className="primaryButton">Sell your impact now</a>
              <a href="#internal-link" className="greyButton">Learn more</a>
            </div>
            </div>
            <div style={{ width: '67%' }}>
            <img src="/img/grey_bg_roundedcorners.png" alt="placeholder" style={{padding: '0px 10px' }} />
            </div>
          </div>
        </div>
      )}
      {/* Content Area button 2*/}
      {selectedButton == 2 && (
        <div className="main-body-container">
          <div className="responsive-container2">
            <div>
            <h2 class="heading-font">
              Buy the impact you care about risk-free
            </h2>
            <p class="text-font">
              Find projects' hypercerts and access their impact 
              evaluations. Reward them for their past 
              impact. Receive the right to claim the 
              impact and build up your impact portfolio 
              to prove your support of collective goods.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap', // Allow wrapping if content overflows
              justifyContent: 'flex-start', // Align items to the left
            }}>
              <a href="#internal-link" className="primaryButton">Explore hypercerts</a>
              <a href="#internal-link" className="greyButton">Commit funds</a>
            </div>
            </div>
            <div style={{ width: '67%' }}>
            <img src="/img/grey_bg_roundedcorners.png" alt="placeholder" style={{padding: '0px 10px' }} />
            </div>
          </div>
        </div>
      )}
      {/* Content Area button 3*/}
      {selectedButton == 3 && (
        <div className="main-body-container">
          <div className="responsive-container2">
            <div>
            <h2 class="heading-font">
              Get paid for high-quality impact evaluations
            </h2>
            <p class="text-font">
              Evaluate the work of projects with data
              and your expertise. Improve your evaluation methodology 
              over time. Help funders allocate their funds and get rewarded
              for evaluations that significantly impacted funders' decisions.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap', // Allow wrapping if content overflows
              justifyContent: 'flex-start', // Align items to the left
            }}>
              <a href="#internal-link" className="primaryButton">Become an official evaluator</a>
            </div>
            </div>
            <div style={{ width: '67%' }}>
            <img src="/img/grey_bg_roundedcorners.png" alt="placeholder" style={{padding: '0px 10px' }} />
            </div>
          </div>
        </div>
      )}
      {/* Content Area button 4*/}
      {selectedButton == 4 && (
        <div className="main-body-container">
          <div className="responsive-container2">
            <div>
            <h2 class="heading-font">
              Become part of the funding network
            </h2>
            <p class="text-font">
              Integrate hypercerts into your funding platform,
              no matter if you distribute grants, organize
              crowdfunding or run prize competitions. Access 
              projects' previous hypercerts and their evaluations.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap', // Allow wrapping if content overflows
              justifyContent: 'flex-start', // Align items to the left
            }}>
              <a href="#internal-link" className="primaryButton">Integrate hypercerts now</a>
              <a href="#internal-link" className="greyButton">Learn more</a>
            </div>
            </div>
            <div style={{ width: '67%' }}>
            <img src="/img/grey_bg_roundedcorners.png" alt="placeholder" style={{padding: '0px 10px' }} />
            </div>
          </div>
        </div>
      )}

    <div className="main-body-container">
      <div className="child" style={{
        marginTop: '70px',
        width: '100%',
        padding: '0px 10px',
        }}>
          <p class="title-font">
            Articles, Podcasts, and Talks
          </p>
          <hr></hr>
        </div>

        <div className="responsive-container" style={{
          alignItems: 'top',
          justifyContent: 'space-between',
        }}>
        <div className="child" style={{padding:'10px'}}>
          <a href="https://youtu.be/2hOhOdCbBlU?si=CvaAkL4651z3LwvD" target="_blank">
            <img src="/img/davidad_ftc_talk.png" alt="placeholder" style={{padding:'5px 0px 0px 0px', borderRadius:'12px'}} />
          </a> 
          <p className="greyTag">Video 18min | Jun 2022</p><br></br>
          <a href="https://youtu.be/2hOhOdCbBlU?si=CvaAkL4651z3LwvD"  target="_blank" class="title-font">On-chain primitives for impact markets</a><br></br>
          <a href="https://twitter.com/davidad"  target="_blank" class="author-font">@davidad</a>
          <hr class="mobile-only"></hr>
        </div>
        <div className="child">
          <MediaItem
          tag="Blogpost | Aug 2022"
          title="A new primitive for public goods funding"
          titleLink="https://protocol.ai/blog/hypercert-new-primitive/"
          authors={[
            { name: "@holkexyz", link: "https://twitter.com/holkexyz" }
          ]}
          />
          <MediaItem
          tag="Blogpost | Aug 2022"
          title="A new primitive for public goods funding"
          titleLink="https://protocol.ai/blog/hypercert-new-primitive/"
          authors={[
            { name: "@holkexyz", link: "https://twitter.com/holkexyz" }
          ]}
          />
          <MediaItem
          tag="Blogpost | Aug 2022"
          title="A new primitive for public goods funding"
          titleLink="https://protocol.ai/blog/hypercert-new-primitive/"
          authors={[
            { name: "@holkexyz", link: "https://twitter.com/holkexyz" }
          ]}
          />
          <MediaItem
          tag="Blogpost | Aug 2022"
          title="A new primitive for public goods funding"
          titleLink="https://protocol.ai/blog/hypercert-new-primitive/"
          authors={[
            { name: "@holkexyz", link: "https://twitter.com/holkexyz" }
          ]}
          />
          <MediaItem
          tag="Blogpost | Aug 2022"
          title="A new primitive for public goods funding"
          titleLink="https://protocol.ai/blog/hypercert-new-primitive/"
          authors={[
            { name: "@holkexyz", link: "https://twitter.com/holkexyz" }
          ]}
          />
          <MediaItem
          tag="Blogpost | Aug 2022"
          title="A new primitive for public goods funding"
          titleLink="https://protocol.ai/blog/hypercert-new-primitive/"
          authors={[
            { name: "@holkexyz", link: "https://twitter.com/holkexyz" }
          ]}
          />
        </div>
        </div>
        </div>

{/*
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
*/}
        </div>
        {/* partner logos */}
        <div className="child" style={{marginTop: '20px'}}>
          <SponsorLogos />
        
      </div>
    </Layout>
  );
}

export default HomepageHeader;
