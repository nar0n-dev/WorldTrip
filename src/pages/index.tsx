import { Header }  from '../components/Header';
import { Banner }  from '../components/BannerHome';
import { Feature } from '../components/Features'
import { Pricing } from '../components/Pricing'

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Feature />
      <Pricing />
    </>

  );
}