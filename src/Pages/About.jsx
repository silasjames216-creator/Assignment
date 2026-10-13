function About() {
     return <section className="page">
        <p className="eyebrow">Get to know me</p>
        <h1>About Me</h1>
        <p className="intro">I study Computer Science at Modibbo Adama University in Yola. I enjoy turning ideas into useful websites and visual designs while learning more about technology and problem-solving.</p>
        <div className="about-grid">
            <article className="card">
                <h2>Experience</h2>
                <h3>SIWES Industrial Trainee</h3>
                <p className="muted">Toko Academy, Nigeria · May 2026–Present</p>
                <p>Gaining practical experience in a professional environment and connecting academic knowledge with industry practice.</p>
                </article>
                <article className="card">
                    <h2>Education</h2>
                    <h3>BSc Computer Science</h3>
                    <p className="muted">Modibbo Adama University, Yola</p>
                    <p>Currently in progress.</p>
                </article>
            </div>
            <h2 className="section-title">Skills & Tools</h2>
            <div className="tags">
                <span>Python basics</span>
                <span>Web development</span>
                <span>Graphic design</span>
                <span>Technical writing</span>
                <span>VS Code</span>
                <span>Microsoft Office & Google Workspace</span>
            </div>
            <h2 className="section-title">Interests</h2>
            <p>Web development · Graphic design · Chess · Music · Technology</p>
        </section>
    }
export default About
