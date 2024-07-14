import Hero from '../../components/hero/Hero'
import hero_img_1 from '../../assets/images/homepage/hero-img-1.png'
import hero_img_2 from '../../assets/images/homepage/hero-img-2.jpg'
import hero_img_3 from '../../assets/images/homepage/hero-img-3.jpg'
import RoomSuite from '../../components/room-suites/RoomSuite'
import Popular from '../../components/popular/Popular'
import GallerySection from '../../components/gallery-section/GallerySection'
import FacilitiesSection from '../../components/facilities/FacilitiesSection'
import Manager from '../../components/manager/Manager'
import Newsletter from '../../components/newsletter/Newsletter'


const images = [
    hero_img_1,
    hero_img_2,
    hero_img_3
];

const Home = () => {
  return (
    <div>
        <Hero images={images}/>
        <RoomSuite/>
        <Popular/>
        <GallerySection/>
        <FacilitiesSection/>
        <Manager/>
        <Newsletter/>
    </div>
  )
}

export default Home
