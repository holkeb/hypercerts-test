import React, { useEffect, useRef } from 'react';
import '/src/css/SponsorLogos2.css';

const SponsorLogos2 = () => {
  const buttonsRowRef = useRef(null);

  useEffect(() => {
    const buttonsRow = buttonsRowRef.current;
    const totalWidth = buttonsRow.offsetWidth; // Get the total width of the buttons
    buttonsRow.innerHTML += buttonsRow.innerHTML; // Duplicate content for a seamless loop

    let moveAmount = 0;
    
    const moveButtons = () => {
      moveAmount -= 0.5; // Adjust speed here
      if (Math.abs(moveAmount) >= totalWidth) {
        moveAmount = 0;
      }
      buttonsRow.style.transform = `translateX(${moveAmount}px)`;
      requestAnimationFrame(moveButtons);
    };
  
    moveButtons();
  }, []);

  return (
    <div id="container" style={{ width: '100vw', height: '50px', backgroundColor: 'black', overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative' , border: 'solid 1px black'}}>
      <div id="buttonsRow" ref={buttonsRowRef} style={{ display: 'flex', position: 'absolute' }}>
        <button className="button">
          <img src="/img/protocollabs_logo.png" alt="" className="button-img" />
        </button>
        <button className="button">
          <img src="/img/optimism_logo.png" alt="" className="button-img" />
        </button>
        <button className="button">
          <img src="/img/octant_logo.png" alt="" className="button-img" />
        </button>
        <button className="button">
          <img src="/img/gitcoin_logo.png" alt="" className="button-img" />
        </button>
        <button className="button">
          <img src="/img/fundingthecommons_logo.png" alt="" className="button-img" />
        </button>
        <button className="button">
          <img src="/img/opensourceobserver_logo.png" alt="" className="button-img" />
        </button>
        <button className="button">
          <img src="/img/raidguild_logo.webp" alt="" className="button-img" />
        </button>
      </div>
    </div>
  );
};

export default SponsorLogos2;