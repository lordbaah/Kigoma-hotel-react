import './GallerySection.css'
import ImageSlider from './imageslider/ImageSlider'


const GallerySection = () => {
  return (
    <section className='section gallery-section'>
        <div className='container-no-padding container gallery-container'>
            <h1 className='gallery-section-head'>GALLERY</h1>
            <h2 className='section-head'>World-famous luxury</h2>
            <ImageSlider/>
        </div>
    </section>
  )
}

export default GallerySection
