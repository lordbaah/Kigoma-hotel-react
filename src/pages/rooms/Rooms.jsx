import React, { useState, useEffect } from 'react';
import './Rooms.css';
import { Link } from 'react-router-dom';
import garden_premier_img from '../../assets/images/rooms/garden-premier.png';
import family_suite_img from '../../assets/images/rooms/family-suite.png';
import premier_executive_img from '../../assets/images/rooms/family-suite.png';
import luxury_suite_img from '../../assets/images/rooms/luxury-suite.png';
import royal_suite_img from '../../assets/images/rooms/royal-suite.png';
import governer_suite_img from '../../assets/images/rooms/governor-suite.png';

const rooms = [
  {
    id: 1,
    name: 'Garden Premier',
    desc: 'Pleasant room, classic style king size bed, carpeted, wooden or tiled floors with a choice of pool or city view.',
    price: 'From ₦ 40,000/night',
    img: garden_premier_img,
  },
  {
    id: 2,
    name: 'Family Suite',
    desc: 'Spacious bedroom with king size bed and adjoining small bedroom with small working area, a choice of a single bed or two and a restroom. Perfect for family.',
    price: 'From ₦ 50,000/night',
    img: family_suite_img,
  },
  {
    id: 3,
    name: 'Premier Executive',
    desc: 'Elegant room with king size bed, warmly decorated, carpeted or wooden or tiled floors.',
    price: 'From ₦ 70,000/night',
    img: premier_executive_img,
  },
  {
    id: 4,
    name: 'Luxury Suite',
    desc: 'Luxurious master bedroom with a king size bed with a spacious living room and a guest restroom, lavishly decorated in African style with a dining area including a table for 6 and a sitting area furnished with leather sofas.',
    price: 'From ₦ 100,000/night',
    img: luxury_suite_img,
  },
  {
    id: 5,
    name: 'Royal Suite',
    desc: 'An atmosphere of modern simplicity and luxury, one master bedroom with king size bed and an oversized marble bathroom in addition to a living area with a large sofa and a private working station, a table for 4 persons and tea/coffee amenities.',
    price: 'From ₦ 130,000/night',
    img: royal_suite_img,
  },
  {
    id: 6,
    name: 'Governor’s Suite',
    desc: 'Classy master bedroom with a king size bed and jacuzzi with a choice of pool or park view, two sitting rooms, one of which has a mini bar, in addition to a guest restroom and a complimentary access to a private lounge that opens daily from 7 a.m. till 10 p.m.',
    price: 'From ₦ 170,000/night',
    img: governer_suite_img,
  },
];

const Rooms = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate a fetch request with a timeout
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="spinner-container">
      <div className="spinner"></div>
    </div>;
  }

  return (
    <section className='rooms-page'>
      <div className="container rooms-page-container">
        {rooms.map((room) => (
          <div key={room.id} className='room-card'>
            <div className="room-image-wrapper">
              <img src={room.img} alt={room.desc} />
              <div className="room-price-wrap">
                <h4 className='room-price'>{room.price}</h4>
                <Link className='btn btn-primary'>Book Now</Link>
              </div>
            </div>
            <div className="room-card-bottom">
              <h3>{room.name}</h3>
              <p className="paragraph">{room.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Rooms;
