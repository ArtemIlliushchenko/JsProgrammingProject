import { profile } from '../../data/content';

function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About me</h2>
        <p className="card">{profile.summary}</p>
      </div>
    </section>
  );
}

export default About;
