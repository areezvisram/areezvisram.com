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
    var sigButton = document.getElementById('SIG');
    sigButton.style.color = '#fff';
    var sigDesc = document.getElementById('sigDesc');
    sigDesc.style.display = 'none';
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
    var sigButton = document.getElementById('SIG');
    sigButton.style.color = '#fff';
    var sigDesc = document.getElementById('sigDesc');
    sigDesc.style.display = 'none';
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
    var sigButton = document.getElementById('SIG');
    sigButton.style.color = '#fff';
    var sigDesc = document.getElementById('sigDesc');
    sigDesc.style.display = 'none';
  }

  function signiantClicked() {
    var MISAButton = document.getElementById('MISA');
    MISAButton.style.color = '#fff';
    var SEButton = document.getElementById('SE');
    SEButton.style.color = '#fff';
    var BCButton = document.getElementById('B&C');
    BCButton.style.color = '#fff'
    var MISADesc = document.getElementById('MISAdesc');
    MISADesc.style.display = 'none';
    var SEDesc = document.getElementById('SEdesc');
    SEDesc.style.display = 'none';
    var BCDesc = document.getElementById('BCdesc');
    BCDesc.style.display = 'none';
    var sigButton = document.getElementById('SIG');
    sigButton.style.color = '#5efbda';
    var sigDesc = document.getElementById('sigDesc');
    sigDesc.style.display = 'block';
  }

  return (
    <div className="experience-container" id="experience">
      <div className="experience-all">
        <div className="experience-title">Experience <hr className="experience-line"></hr></div>
        <ul className="experience-list">
        <li>
            <button id="SIG" onClick={signiantClicked} className="experience-button-clicked">
              <span>Signiant</span>
            </button>
          </li>
          <li>
            <button id="SE" onClick={SEClicked} className="experience-button-not-clicked">
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
        <div className="experience-description-container" id="sigDesc">
          <div className="experience-position">Co-op Software Developer - Full Stack Developer</div>
          <div className="experience-position">Signiant</div>
          <div className="experience-date">January 2021 - April 2021 (Ongoing)</div>
          <div className="experience-description">
            <ul className="experience-description-list">
              <li>Full stack developer within the R&D department working on Signiant's Jet and Media Shuttle Products</li>
              <li>Implemented backend functionality to track number of files queried by account in Media Shuttle product through DataDog metrics</li>
              <li>Implemented unit and component tests for all features I developed</li>
              <li>Performed code reviews on team member's code, gave and received feedback on open pull requests</li>
            </ul>
            <div className="SE-Environment">
              Technical Environment: <br></br> JavaScript, NodeJS, ReactJS, ExpressJS
              <ul className="experience-description-list" style={{marginTop: '2px'}}>
                <li>AWS: S3, DynamoDB, Step, Lambda, EC2, ECS</li>
                <li>Testing: Mocha, Chai, Sinon, Proxyquire, Nock</li>
                <li>Project Management: BitBucket, Confluence, Jira, Trello</li>                
              </ul>
            </div>            
          </div>
        </div>
        <div className="experience-description-container" id="SEdesc" style={{display:'none'}}>
          <div className="experience-position">Developer Intern</div>
          <div className="experience-position">SalonEverywhere</div>
          <div className="experience-date">May 2020 - August 2020</div>
          <div className="experience-description">
            <ul className="experience-description-list">
              <li>One of the earliest developers at the company, helped take the company from start-up to an initial launch</li>
              <li>Performed frontend web design in Liquid, HTML, CSS, built and designed various site pages</li>
              <li>Built backend system in platformOS, GraphQL to store and display site data dynamically</li>
              <li>Developed multiple chrome extensions to automatically send Instagram and Facebook posts to portfolio and inspiration boards in SalonEverywhere</li>
              <li>Used web scraping and data gathering techniques to build a database of 200,000 beauty organizations</li>
              <li>Built API integrations between SalonEverywhere and other applications such as Shopify and Thinkific</li>
              <li>Developed an AI data pipeline to tag Instagram images with the beauty category they represent</li>
              <li>Built an automated workflow in Zoho Business Suite to track consumer registration and progress on the site</li>
              <li>Set up connections and integrations between various technology stacks such as Instagram, Facebook, Pinterest, Shopify, Thinkific through RESTful and GraphQL API Calls</li>
              <li>Performed unit and end-to-end testing of web app and applications</li>
            </ul>
            <div className="SE-Environment">Technical Environment: platformOS, Liquid, GraphQL, HTML/CSS, JavaScript, Python, Postman, Deluge, Catalyst, AWS, Zoho CRM, MarketingHub, Desk, Pages, PageSense, Analytics</div>
          </div>
        </div>
        <div className="experience-description-container" id="MISAdesc" style={{display:'none'}}>
          <div className="experience-position">Executive Team Member</div>
          <div className="experience-position">McMaster Ismaili Students Association</div>
          <div className="experience-date">September 2019 - April 2020</div>
          <div className="experience-description">
            <ul className="experience-description-list">
              <li>Member of executive team in McMaster Ismaili Students Association</li>
              <li>Responsible for organizing and running events for members of the club</li>
              <li>Network with other ISA’s across Ontario regarding events and participation</li>
              <li>Participate in and contriubte to weekly executive team meetings</li>
            </ul>
          </div>
        </div>
        <div className="experience-description-container" id="BCdesc" style={{display:'none'}}>
          <div className="experience-position">Lifeguard</div>
          <div className="experience-position">B&C Aquatics</div>
          <div className="experience-date">January 2016 - August 2019</div>
          <div className="experience-description">
            <ul className="experience-description-list">
              <li>Monitored pool area for violations and potentially hazardous situations</li>
              <li>Ensured safety and supervision of pool and occupants</li>
              <li>Communicated with parents/clients regarding participant experiences and expectations and provided feedback as required</li>
              <li>Maintained accurate program records, including incident reports, logs and daily attendance reports</li>
              <li>Provided customer service by maintaining public relations and professional interactions with children, youth, parents and other staff</li>
              <li>Trained newly hired lifeguards on duties and tasks needed to be performed in the workplace</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
