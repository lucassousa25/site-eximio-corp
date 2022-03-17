import AboutUs from './layout/about-us';
import Contact from './layout/contact';
import Features from './layout/features';
import Footer from './layout/footer';
import Header from './layout/header';
import InfoServices from './layout/info-services';
import Team from './layout/team';
import TwitterComments from './layout/twitter-comments';

function App() {
  return (
    <div className="App">
      <Header />
      <InfoServices />
      <AboutUs />
      <Team />
      <Features />
      <TwitterComments />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
