import type { NextPage } from 'next';
import Version from '../version';

const AboutPage: NextPage = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        This is an appp to find latest DJ and other musical events
      </p>
      <p>Version {Version}</p>
    </div>
  )
};

export default AboutPage;