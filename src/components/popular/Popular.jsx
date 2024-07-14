import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import './Popular.css'
import garden_premier_img from '../../assets/images/homepage/garden-premier.png'
import family_suite_img from '../../assets/images/homepage/family-suite.png'
import governor_suite_img from '../../assets/images/homepage/governor-suite.png'

const cards =[
    {
        id: 1,
        name: 'Garden Premier',
        desc: 'Pleasant room, classic style king size bed, carpeted, wooden or tiled floors with a choice of pool or city view',
        img: garden_premier_img,
        price: 'From ₦ 40,000/night'
    },
    {
        id: 2,
        name: 'Family Suite',
        desc: 'Spacious bedroom with king size bed and adjoining small bedroom with small working area, a choice of a single bed or two and a restroom. Perfect for family',
        img: family_suite_img,
        price: 'From ₦ 50,000/night'
    },
    {
        id: 3,
        name: 'Governor’s Suite',
        desc: 'Classy master bedroom with a king size bed and jacuzzi with a choice of pool or park view, two sitting rooms, one of which has a mini bar, in addition to a guest restroom and a complimentary access to a private lounge that opens daily from am. till 10 p.m',
        img: governor_suite_img,
        price: 'From ₦ 170,000/night'
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

const Popular = () => {
  return (
    <section className='section' id="popular">
        <div className="container popular-container">
            <h2 className='section-head'>Popular offerings</h2>
            <motion.div 
                className='popular-card-wrap'
            >
                {
                    cards.map((card, i) => (
                        <motion.div 
                        key={card.id} 
                        className='popular-card'
                        custom={i}
                        variants={item}
                        // animate="visible"
                        whileInView="visible"
                        initial="hidden"
                        >
                            <div className='popular-img-wrap'>
                                <img src={card.img} alt={card.desc} />
                            </div>

                            <div className='popular-content'>
                                <h3>{card.name}</h3>
                                <p>{card.desc}</p>
                            </div>

                            <div className='popular-card-bottom'>
                                <p className='room-price'>{card.price}</p>
                                <Link className='btn btn-primary'>Book Now</Link>
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    </section>
  )
}

export default Popular
