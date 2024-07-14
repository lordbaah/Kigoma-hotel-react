import './Newsletter.css'

const Newsletter = () => {
  return (
    <section className='section newsletter'>
        <div className='container newsletter-container'>
            <h2 className='section-head'>Be in the know.</h2>
            <h4>Get the latest info on the best deals, offers and promotions.</h4>
            <div className='form-container'>
                <form>
                    <input className='input' type="text" placeholder='*First Name'/>
                    <input className='input' type="email" placeholder='*Email Address'/>
                    <button className='btn btn-primary'>Get Email Updates</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Newsletter
