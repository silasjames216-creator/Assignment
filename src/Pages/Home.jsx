import { Link } from 'react-router-dom'
import silas from '../assets/hero.png'
function Home() {
     return <section className="hero">
        <div className="hero-copy">
            <p className="eyebrow">Hello, I'm</p>
            <h1>Silas James</h1>
            <h2>Computer Science Student & Developer</h2>
            <p>I build real-world solutions through code, design, and curiosity. I am interested in web development, graphics, and technology.</p>
            <div className="actions">
                <Link className="button primary" to="/contact">Get in touch</Link>
                <Link className="button secondary" to="/about">More about me</Link>
            </div>
        </div>
        <div className="portrait-wrap">
            <img className="portrait" src={silas} alt="Silas James" />
        </div>
    </section> }
export default Home
