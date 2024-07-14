import './Facilities.css'
import { Link } from 'react-router-dom'
import restuarant_img from '../../assets/images/facilities/Restaurant.png'
import swimming_pool_img from '../../assets/images/facilities/Swimming Pool.png'
import movie_theatre_img from '../../assets/images/facilities/Movie Theater.png'
import game_room_img from '../../assets/images/facilities/Games Room.png'
import arrow_img from '../../assets/images/facilities/Arrow.png'

const facilities = [
  {
    id: 1,
    name: 'Restaurant',
    desc: 'Enjoy delicious meals and experience upscale fine dining at our 2-star Michelin restaurant and bar where we servie a variety of mouthwatering local and intercontinental dishes',
    img: restuarant_img,
  },
  {
    id: 2,
    name: 'Swimming Pool',
    desc: 'Have a relaxing time in any of our pools. Smash your body goals swimming while enjoying a breathtaking view of the park.',
    img: swimming_pool_img,
  },
  {
    id: 3,
    name: 'Movie Theater',
    desc: 'Our movie auditoriums come with standard screens with rows of comfortable padded seats, as well as a foyer area containing a box office for buying tickets',
    img: movie_theatre_img,
  },
  {
    id: 4,
    name: 'Games Room',
    desc: 'Our very own recreation room outfitted with game consoles, board and table games as well as a children’s KG and playpen so the little ones don’t feel left out',
    img: game_room_img,
  },
]

const Facilties = () => {
  return (
    <section className='facilities-page'>
      <div className="container facilities-page-container">
        {
          facilities.map((facility) => (
            <div key={facility.id}>
              <div className="faciliy-img-wrap">
                <img src={facility.img} alt={facility.desc} />
              </div>
              <div className="facility-content">
                <h3>{facility.name}</h3>
                <p>{facility.desc}</p>
                <Link className='facility-link'>
                  <img src={arrow_img} alt="arrow" />
                  <p>View gallery</p>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Facilties
