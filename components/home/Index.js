import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import SectionTwo from './SectionTwo';
import Footer from './Footer';
import Productivity from './Productivity';
import Testimonials from './Testimonials';
import CommonSection from './CommonSection';
import CommonSectionTwo from './CommonSectionTwo';
import Pricing from './Pricing';
import EvernoteTeams from './EvernoteTeams';

const Index = () => {

    const image = 'https://evernote.com/c/assets/homepage-repackaging/feature_task__en.png?ada2ec1461ec1c07'
    const image2 = 'https://evernote.com/c/assets/homepage-repackaging/go_paperless__en.png?ea492bd88917de3f'
    const image3 = 'https://evernote.com/c/assets/homepage-repackaging/clip_the_web__en.png?5e3d45d348ec93f2'
    const image4 = 'https://evernote.com/c/assets/homepage-repackaging/feature_calendar__en.png?617a256ddc11a85'
    const title = 'Hit every deadline'
    const title1 = 'Go paperless'
    const title2 = 'Clip the web'
    const title3 = 'Connect your Google Calendar'

    return (
        <div className='font-roboto'>
            <NavBar/>
            <Hero/>
            <SectionTwo/>
            <Productivity/>
            <Testimonials/>
            <CommonSection image={image} title={title} />
            <CommonSectionTwo image={image2} title={title1} />
            <CommonSection image={image3} title={title2} />
            <CommonSectionTwo image={image4} title={title3} />
            <Pricing/>
            <EvernoteTeams/>
            <Footer/>
        </div>
    );
};

export default Index;