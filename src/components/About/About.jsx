import "./About.css";
import authorImg from "../../assets/family.jpeg";

function About() {
  return (
    <section className="about">
      <img className="about__author-image" src={authorImg} alt="Author" />
      <div className="about__text">
        <div className="about__title">About the Author</div>
        <p className="about__description">
          Hello! My name is Cody Marsee and I'm a prospective Software Engineer.
          <br />
          <br />
          My time at TripleTen has been very beneficial! I have learned about
          many things such as JavaScript, Node, CSS, GitHub, and React just to
          name a few. Throughout my time with TripleTen, I have gained a
          confidence & desire to continue learning & pushing myself. I look
          forward to helping others in their Software Engineering needs whether
          that be frontend, backend, or full stack!
        </p>
      </div>
    </section>
  );
}

export default About;
