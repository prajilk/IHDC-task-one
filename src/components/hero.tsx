import Container from "./container";
import Membership from "./membership";
import PremiumFeatures from "./premium-features";

const Hero = () => {
  return (
    <Container className="my-5 space-y-5 md:my-16">
      <h1 className="text-4xl">New Arrival</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Membership />
        <PremiumFeatures />
      </div>
    </Container>
  );
};

export default Hero;
