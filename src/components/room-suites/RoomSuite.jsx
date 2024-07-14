import { motion, useScroll } from "framer-motion"
import './RoomSuite.css'
import { Link } from 'react-router-dom'
import roomSuite_img from '../../assets/images/homepage/room-suite.png'

const RoomSuite = () => {
  return (
    <section className='room-suite section'>
      <div className="container room-suite-container">
        <motion.div className="room-suite-content" 
        initial={{ opacity: 0, x:'-100%'}} 
        whileInView={{ opacity: 1, x:'0'}}
        transition={{delay: 0, duration: 1}}
        >
          <h2 className='section-head'>Rooms & Suites</h2>
          <p className='paragraph'>
            A holistic approach to luxury living, the Kigoma offers 297 curated rooms & suites
            that ensure that guests would never want, or need, to leave. Guests are invited to
            customize their luxury stay with a selection of the most exquisite room offerings
            available, including seven distinct suite categories featuring private and open floor
            layouts as well as outdoor terraces and city and garden-view balcony options.
          </p>
          <div className="room-suite-btn-wrap">
            <Link className='btn-border btn'>View Rooms & Suites</Link>
            <Link className='btn-primary btn'>Book Now</Link>
          </div>
        </motion.div>

        <motion.div className='room-suite-img-wrapper'
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={roomSuite_img} alt="" />
        </motion.div>
      </div>
    </section>
  )
}

export default RoomSuite
