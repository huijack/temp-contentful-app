import heroImg from './assets/hero.svg'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            90's crucifix unicorn, locavore pabst meditation trust fund kombucha
            iPhone gochujang neutra kickstarter. Fam beard palo santo polaroid
            humblebrag narwhal sus chicharrones mustache. Farm-to-table
            chillwave chicharrones gochujang jianbing tilde 90's pickled selvage
            crucifix cloud bread hoodie.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className='img' />
        </div>
      </div>
    </section>
  )
}

export default Hero
