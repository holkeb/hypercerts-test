import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import HyperboardWidget from '@site/src/components/HyperboardWidget';
import SponsorLogos from '@site/src/components/SponsorLogos.js';

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
      description="Reward and fund impact with hypercerts">
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
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '10px',
        marginTop: '20px',
        maxWidth: '800px',
        }}>

        {/* longer introduction */}  
        <div className="child" style={{marginTop: '70px' }}>
          <h1 class="title-font">
            Hypercerts are a new protocol for funding and rewarding positive impact
          </h1>
          <p class="text-centered" style={{maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
            To solve the challenges we face this century, we need scalable and 
            sustainable financing models for public goods that reward contributors 
            for the positive impact they create.
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
            {buttonNumber === 2 && 'Evaluators'}
            {buttonNumber === 3 && 'Funding platforms'}
            {buttonNumber === 4 && 'Everyone'}
          </button>
        ))}
      </div>

      {/* Content Area button 1*/}
      {selectedButton == 1 && (
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '10px',
        marginTop: '20px',
        maxWidth: '800px',}}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '33%' }}>
            <h2 class="heading-font">
              Projects title
            </h2>
            <p class="text-font" style={{maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
              To solve the challenges we face this century, we need scalable and 
              sustainable financing models for public goods that reward contributors 
              for the positive impact they create.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap', // Allow wrapping if content overflows
              justifyContent: 'flex-start', // Align items to the left
            }}>
              <a href="#internal-link" className="primaryButton">CTA 1</a>
              <a href="#internal-link" className="greyButton">CTA 2</a>
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
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '10px',
        marginTop: '20px',
        maxWidth: '800px',}}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '33%' }}>
            <h2 class="heading-font">
              Evaluator title
            </h2>
            <p class="text-font" style={{maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
              To solve the challenges we face this century, we need scalable and 
              sustainable financing models for public goods that reward contributors 
              for the positive impact they create.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap', // Allow wrapping if content overflows
              justifyContent: 'flex-start', // Align items to the left
            }}>
              <a href="#internal-link" className="primaryButton">CTA 1</a>
              <a href="#internal-link" className="greyButton">CTA 2</a>
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
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '10px',
        marginTop: '20px',
        maxWidth: '800px',}}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '33%' }}>
            <h2 class="heading-font">
              Funding platform title
            </h2>
            <p class="text-font" style={{maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
              To solve the challenges we face this century, we need scalable and 
              sustainable financing models for public goods that reward contributors 
              for the positive impact they create.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap', // Allow wrapping if content overflows
              justifyContent: 'flex-start', // Align items to the left
            }}>
              <a href="#internal-link" className="primaryButton">CTA 1</a>
              <a href="#internal-link" className="greyButton">CTA 2</a>
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
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '10px',
        marginTop: '20px',
        maxWidth: '800px',}}>
          <div style={{ display: 'flex' }}>
            <div style={{ width: '33%' }}>
            <h2 class="heading-font">
              Everyone title
            </h2>
            <p class="text-font" style={{maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto'}}>
              To solve the challenges we face this century, we need scalable and 
              sustainable financing models for public goods that reward contributors 
              for the positive impact they create.
            </p>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap', // Allow wrapping if content overflows
              justifyContent: 'flex-start', // Align items to the left
            }}>
              <a href="#internal-link" className="primaryButton">CTA 1</a>
              <a href="#internal-link" className="greyButton">CTA 2</a>
            </div>
            </div>
            <div style={{ width: '67%' }}>
            <img src="/img/grey_bg_roundedcorners.png" alt="placeholder" style={{padding: '0px 10px' }} />
            </div>
          </div>
        </div>
      )}

        {/* Old stuff */}
        <div className="child" style={{marginTop: '70px'}}>  
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

        </div>
        {/* partner logos */}
        <div className="child" style={{marginTop: '20px'}}>
          <SponsorLogos />
        
      </div>
    </Layout>
  );
}

export default HomepageHeader;
