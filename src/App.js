import AboutUs from './layout/about-us';
import Features from './layout/features';
import Header from './layout/header';
import InfoServices from './layout/info-services';
import Team from './layout/team';

function App() {
  return (
    <div className="App">
      <Header />
      <InfoServices />
      <AboutUs />
      <Team />
      <Features />
    </div>
  );
}

export default App;
