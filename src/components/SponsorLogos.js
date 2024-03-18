import React from 'react';
import '/src/css/SponsorLogos.css'; // Ensure you have this CSS file

const SponsorLogos = () => {
  return (
    <div className="sponsorLogosContainer">
      <div className="scrollingLogos">
        {/* Duplicate the set of logos to create a seamless infinite scroll effect */}
        <img src="/img/protocollabs_logo.png" alt="Protocol Labs" className="logo"/>
        <img src="/img/optimism_logo.png" alt="Optimism RetroPGF" className="logo" style={{ maxHeight: '20px', marginTop: '5px' }}/>
        <img src="/img/octant_logo.png" alt="Octant" className="logo"/>
        <img src="/img/gitcoin_logo.png" alt="Gitcoin" className="logo" style={{ maxHeight: '20px', marginTop: '5px' }}/>
        <img src="/img/fundingthecommons_logo.png" alt="Funding the Commons" className="logo" style={{ maxHeight: '25px', marginTop: '2.5px' }}/>
        <img src="/img/opensourceobserver_logo.png" alt="Open Source Observer" className="logo"/>
        <img src="/img/raidguild_logo.webp" alt="Raid Guild" className="logo" style={{ maxHeight: '20px', marginTop: '5px' }}/>
        <img src="/img/protocollabs_logo.png" alt="Protocol Labs" className="logo"/>
        <img src="/img/optimism_logo.png" alt="Optimism RetroPGF" className="logo" style={{ maxHeight: '20px', marginTop: '5px' }}/>
        <img src="/img/octant_logo.png" alt="Octant" className="logo"/>
        <img src="/img/gitcoin_logo.png" alt="Gitcoin" className="logo" style={{ maxHeight: '20px', marginTop: '5px' }}/>
        <img src="/img/fundingthecommons_logo.png" alt="Funding the Commons" className="logo" style={{ maxHeight: '25px', marginTop: '2.5px' }}/>
        <img src="/img/opensourceobserver_logo.png" alt="Open Source Observer" className="logo"/>
        <img src="/img/raidguild_logo.webp" alt="Raid Guild" className="logo" style={{ maxHeight: '20px', marginTop: '5px' }}/>
      </div>
    </div>
  );
};

export default SponsorLogos;
