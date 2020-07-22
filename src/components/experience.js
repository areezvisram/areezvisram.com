import React from "react"

const Experience = () => {
  function MISAClicked() {
    var MISAButton = document.getElementById('MISA');
    MISAButton.style.color = '#5efbda';
    var SEButton = document.getElementById('SE');
    SEButton.style.color = '#fff';
    var BCButton = document.getElementById('B&C');
    BCButton.style.color = '#fff'
    var MISADesc = document.getElementById('MISAdesc');
    MISADesc.style.display = 'block';
    var SEDesc = document.getElementById('SEdesc');
    SEDesc.style.display = 'none';
    var BCDesc = document.getElementById('BCdesc');
    BCDesc.style.display = 'none';
  }

  function SEClicked() {
    var MISAButton = document.getElementById('MISA');
    MISAButton.style.color = '#fff';
    var SEButton = document.getElementById('SE');
    SEButton.style.color = '#5efbda';
    var BCButton = document.getElementById('B&C');
    BCButton.style.color = '#fff'
    var MISADesc = document.getElementById('MISAdesc');
    MISADesc.style.display = 'none';
    var SEDesc = document.getElementById('SEdesc');
    SEDesc.style.display = 'block';
    var BCDesc = document.getElementById('BCdesc');
    BCDesc.style.display = 'none';
  }

  function BCClicked() {
    var MISAButton = document.getElementById('MISA');
    MISAButton.style.color = '#fff';
    var SEButton = document.getElementById('SE');
    SEButton.style.color = '#fff';
    var BCButton = document.getElementById('B&C');
    BCButton.style.color = '#5efbda'
    var MISADesc = document.getElementById('MISAdesc');
    MISADesc.style.display = 'none';
    var SEDesc = document.getElementById('SEdesc');
    SEDesc.style.display = 'none';
    var BCDesc = document.getElementById('BCdesc');
    BCDesc.style.display = 'block';
  }

  return (
    <div className="experience-container" id="experience">
      <div className="experience-all">
        <div className="experience-title">Experience</div>
        <ul className="experience-list">
          <li>
            <button id="SE" onClick={SEClicked} className="experience-button-clicked">
              <span>SalonEverywhere</span>
            </button>
          </li>
          <li>
            <button id="MISA" onClick={MISAClicked} className="experience-button-not-clicked">
              <span>MISA</span>
            </button>
          </li>
          <li>
            <button id="B&C" onClick={BCClicked}className="experience-button-not-clicked">
              <span>B&C Aquatics</span>
            </button>
          </li>
        </ul>
        <div className="experience-description-container" id="SEdesc">
          <div className="experience-position">Developer at SalonEverywhere</div>
          <div className="experience-date">May 2020 - August 2020</div>
        </div>
        <div className="experience-description-container" id="MISAdesc" style={{display:'none'}}>
          <div className="experience-position">Executive Team Member of MISA</div>
          <div className="experience-date">September 2019 - April 2020</div>
        </div>
        <div className="experience-description-container" id="BCdesc" style={{display:'none'}}>
          <div className="experience-position">Lifeguard at B&C Aquatics</div>
          <div className="experience-date">January 2016 - August 2019</div>
        </div>
      </div>
    </div>
  )
}

export default Experience
