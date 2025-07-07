import React from 'react';
import HomePlaceholder from './HomePlaceholder/HomePlaceholder';
import ClientReview from './ClientReview/ClientReview';
import AnyQuestions from './AnyQuestions/AnyQuestions';
import ContactUs from './ContactUs/ContactUs';
import EstimateProject from './EstimateProject/EstimateProject';
import LocationAddress from './LocationAddress/LocationAddress';
import OverviewTechnology from './OverviewTechnology/OverviewTechnology';
import './Home.scss';

export default function Projects() {

  return (
    <section id="home">
      <div className="home-container">
        <div>
          <HomePlaceholder />
        </div>
        <div className='client-review'>
          <ClientReview />
        </div>
        <div className='overview-technology'>
          <OverviewTechnology />
        </div>
        <div className='any-questions'>
          <AnyQuestions />
        </div>
        <div className='estimate-project'>
          <EstimateProject />
        </div>
        <div className='contact-us'>
          <ContactUs />
        </div>
        <div className='location-address'>
          <LocationAddress />
        </div>
      </div>
  </section>
  )
}