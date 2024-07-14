import { motion } from 'framer-motion'
import './FacilitiesSection.css'
import meeting_img from '../../assets/images/homepage/meeting-room.png'
import restaurant_img from '../../assets/images/homepage/restaurant.png'
import swimming_img from '../../assets/images/homepage/swimming-pool.png'
import conference_img from '../../assets/images/homepage/confrence.png'
import movie_img from '../../assets/images/homepage/movie-theater.png'
import lounge_img from '../../assets/images/homepage/lounge.png'

const facilities = [
    {
        id: 1,
        img: meeting_img,
        name: 'Meeting Room',
        desc: 'A 20-seater meeting room is on ground at the Kigamo for your business meetings and client negotiations.'
    },
    {
        id: 2,
        img: restaurant_img,
        name: 'Restaurant',
        desc: 'Upscale fine dining restaurant and bar serving a variety of local, continental and international dishes'
    },
    {
        id: 3,
        img: swimming_img,
        name: 'Swimming Pool',
        desc: 'An Olympic size pool, two standard size pools and a kiddies pool, each offering views of the game reserve.'
    },
    {
        id: 4,
        img: conference_img,
        name: 'Conference Hall',
        desc: 'Two 150-seater conference halls equipped with smart monitors for presentations for conferences and meet-ups'
    },
    {
        id: 5,
        img: movie_img,
        name: 'Movie Theater',
        desc: 'Three 50-seater movie rooms with standard screens are available to visitors at Kigamo'
    },
    {
        id: 6,
        img: lounge_img,
        name: 'Lounge',
        desc: 'Open lounge with a view of the game reserve and a bar for refreshments. The lounge also features a live band.'
    },
]


const item = {
    visible: i => ({
        opacity: 1,
        scale: 1,
        transition: {
          delay: i * 0.3,
          type: "spring",
          bounce: 0.4,
        },
    }),

  hidden: { 
    opacity: 0,
    scale: 0.5,
},
}

const FacilitiesSection = () => {
  return (
    <section className='section'>
        <div className='container facilities-section-container'>
            <h2 className='section-head'>Facilities</h2>
            <div className="facilities-cards">
                {
                    facilities.map((facility, i) => (
                        <motion.div 
                        key={facility.id} 
                        className='facility-card'
                        custom={i}
                        variants={item}
                        // animate="visible"
                        whileInView="visible"
                        initial="hidden"
                        viewport={{ once: true }}
                        >
                            <div>
                                <img src={facility.img} alt={facility.name} />
                            </div>
                            <h3>{facility.name}</h3>
                            <p>{facility.desc}</p>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default FacilitiesSection
