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
        <div className="experience-title">Experience <hr className="experience-line"></hr></div>
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
          <div className="experience-position">Developer</div>
          <div className="experience-position">SalonEverywhere</div>
          <div className="experience-date">May 2020 - August 2020</div>
          <div className="experience-description">
            <ul className="experience-description-list">
              <li>One of the earliest developers at the company, helped take the company from startup to an initial launch</li>
              <li>Performed frontend web design in Liquid, HTML, CSS, biult and designed various site pages</li>
              <li>Built backend system in platformOS, GraphQL to store and display site data dynamically</li>
              <li>Developed a chrome extension to automatically send Instagram and Facebook posts to portfolio boards in SalonEverywhere</li>
              <li>Developed a chrome extension to add any image from any webpage to an inspiration board in SalonEverywhere</li>
              <li>Developed a chrome extension to auto import stylist Yelp reviews into SalonEverywhere</li>
              <li>Led a Python web-scraping effort to build a database of beauty industry organizations such as Salons, Brands, Distributors and Acadmies</li>
              <li>Built integrations between SalonEverywhere and other applications such as Shopify and Thinkific </li>
              <li>Developed an AI data pipeline to tag Instagram images with the beauty category they represent</li>
              <li>Performed data science analysis to determine best keywords for SEO purposes</li>
              <li>Built an automated workflow in Zoho CRM to track consumer registration</li>
              <li>Built an automated workflow in Zoho Marketing Hub, Desk, and Pages to track user registration and progress on the site</li>
              <li>Set up connections and integrations between various technology stacks such as Instagram, Facebook, Pinterest, Shopify, Thinkific through RESTful and GraphQL API Calls</li>
              <li>Contributed to and participated in daily check-in meetings, design briefs and code reviews</li>
              <li>Performed unit and end-to-end testing of web app and applications</li>
              <li></li>
            </ul>
            <div className="SE-Environment">Environment: platformOS, Liquid, GraphQL, HTML/CSS, JavaScript, Python, Postman, Deluge, Catalyst, AWS, Zoho CRM, MarketingHub, Desk, Pages, PageSense, Analytics</div>
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
