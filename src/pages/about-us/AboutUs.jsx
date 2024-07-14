import './AboutUs.css'
import map_img from '../../assets/images/map.png'

const AboutUs = () => {
  return (
    <section className='about-page'>
      <div className="container about-page-container">
        <div className="map-img-wrap">
          <img src={map_img} alt="" />
        </div>
        <div className='about-page-form'>
          <h2 className='section-head'>Be in the know.</h2>
          <h4>Get the latest info on the best deals, offers and promotions.</h4>
          <form>
              <input className='about-page-input' type="text" placeholder='*First Name'/>
              <input className='about-page-input' type="email" placeholder='*Email Address'/>
              <button className='btn btn-primary'>Get Email Updates</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
