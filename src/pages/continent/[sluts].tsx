import { Header }  from '../../components/Header';
import { BannerTemplate }  from '../../components/BannerTemplate';
import { BannerPages }  from '../../components/BannerPages';

export default function Home() {
  return (
    <>
        <Header />
        <BannerTemplate 
            bgImage="url('./images/Background.svg')"
            bgSize="cover"
            height="332px"
        >
            <BannerPages />
        </BannerTemplate>
    </>

  );
}