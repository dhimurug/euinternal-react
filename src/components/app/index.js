import React from 'react';
import { Route } from 'react-router-dom';
import EUNavbar from '../navbar';
import CarouselSlide from '../carousel';
import LatestThinking from '../latest-thinking';
import CaseStudies from '../case-studies';
import Solutions from '../solutions';
import AccountUpdates from '../account-updates';
import Testimonials from '../testimonials';
import Events from '../events';
import Newsletters from '../newsletters';

const App = () => (
  <div>
    <header>
     <EUNavbar/>
    </header>

    <main>
      <Route exact path="/" component={CarouselSlide} />
      <Route exact path="/latestthinking" component={LatestThinking} />
      <Route exact path="/casestudies" component={CaseStudies} />
      <Route exact path="/solutions" component={Solutions} />
      <Route exact path="/accountupdates" component={AccountUpdates} />
      <Route exact path="/testimonials" component={Testimonials} />
      <Route exact path="/events" component={Events} />
      <Route exact path="/newsletters" component={Newsletters} />
    </main>
  </div>
);

export default App;
