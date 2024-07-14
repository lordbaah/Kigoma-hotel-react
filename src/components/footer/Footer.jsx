import './Footer.css'
import { Link } from 'react-router-dom'
import logo from '/logo.png'
import facebook_img from '../../assets/images/homepage/Facebook.png'
import twitter_img from '../../assets/images/homepage/Twitter.png'
import instagram_img from '../../assets/images/homepage/Instagram.png'

const Footer = () => {
  return (
    <footer>
        <div className='container footer-container'>
            <h2 className='section-head'>Feel free to say hello</h2>

            <div className='footer-menu-wrap'>
                <div className='footer-menu-one'>
                    <img  src={logo} alt="" />
                    <p className='paragraph'>
                        Perched on the edge of the Wikki Hills, Kigamo commands breathtaking views down the valley
                        that borders the Yankari Game Reserve. Enjoy exclusive game viewing, thrilling night game
                        drives, bush dining, amazing Nigerian culture and old-fashioned safari luxury.
                    </p>
                </div>

                <div className='footer-menu-two'>
                    <div>
                        <h4>Addres</h4>
                        <p>Wikki Camp, Yankari Reserve, Bauchi</p>
                    </div>
                    <div>
                        <h4>Email</h4>
                        <p>Hello@kigoma.com</p>
                    </div>
                    <div>
                        <h4>Phone</h4>
                        <p>+234 803 102 4720</p>
                    </div>
                </div>

                <div className='footer-menu-three'>
                    <h3>ABOUT</h3>
                    <ul className="footer-list-wrap">
                        <li className="footer-list">
                            <Link className="footer-link">About</Link>
                        </li>
                        <li className="footer-list">
                            <Link className="footer-link">Accessibility</Link>
                        </li>
                        <li className="footer-list">
                            <Link className="footer-link">Awards</Link>
                        </li>
                        <li className="footer-list">
                            <Link className="footer-link">Policies</Link>
                        </li>
                        <li className="footer-list">
                            <Link className="footer-link">Development</Link>
                        </li>
                        <li className="footer-list">
                            <Link className="footer-link">Careers</Link>
                        </li>
                        <li className="footer-list">
                            <Link className="footer-link">News & Press</Link>
                        </li>
                        <li className="footer-list">
                            <Link className="footer-link">Videos</Link>
                        </li>
                        <li className="footer-list">
                            <Link className="footer-link">Covid-19</Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-social">
                <ul className='footer-socail-wrap'>
                    <li>
                        <Link className='footer-socail-link'><img src={facebook_img} alt="facebook" /></Link>
                    </li>
                    <li>
                        <Link className='footer-socail-link'><img src={twitter_img} alt="twitter" /></Link>
                    </li>
                    <li>
                        <Link className='footer-socail-link'><img src={instagram_img} alt="instagram" /></Link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer
