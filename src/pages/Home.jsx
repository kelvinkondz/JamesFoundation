import Hero from '../components/Hero';
import Sponsors from '../components/Sponsors';
import ImpactStats from '../components/ImpactStats';
import ImpactAreas from '../components/ImpactAreas';
import Testimonials from '../components/Testimonials';
import VideoShowcase from '../components/VideoShowcase';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Sponsors /> */}
      <ImpactStats />
      <ImpactAreas />
      <VideoShowcase />
      {/* <Testimonials /> */}
      <CallToAction />
    </div>
  );
};

export default Home;
