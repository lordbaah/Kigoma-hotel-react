import { motion } from 'framer-motion'
import './Manager.css'
import manager_img from '../../assets/images/homepage/Picture.png'
import signature_img from '../../assets/images/homepage/Signature.png'

const Manager = () => {
  return (
    <section className='section manager'>
        <div className='container manager-container'>
            <h2 className='section-head'>A message from the Manager</h2>
            <div className='manager-message-wrap'>
                <motion.div 
                className='manager-img-wrap'
                initial={{ opacity: 0, scale: 0.5}} 
                whileInView={{ opacity: 1, scale: 1}}
                transition={{delay: 0, duration: 0.3}}
                >
                    <img className='manager-img' src={manager_img} alt="manager" />
                </motion.div>

                <motion.div 
                className='manager-message'
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay:0.5, duration: 0.3 }}
                >
                    <p className='paragraph'>
                        Kigoma sits in a unique position of being able to offer our guests the very best of
                        Africa. From generous hospitality and refined service, to exceptional experiences
                        and the most beautiful African animals in existence.
                    </p>
                    <p className='paragraph'>
                        Everyday, we aim to fulfill our purpose: "We love what we do. We believe in
                        changing people s lives and find our own value in their experience."
                    </p>
                    <p className='paragraph'>
                        Allow the Kigoma family to curate your visit to our beautiful grounds.
                    </p>

                    <div>
                        <h2>Miebaka Joshua</h2>
                        <img className='signature' src={signature_img} alt="signature" />
                    </div>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Manager
