import "./About.css";
import authorImg from "../../assets/family.jpeg";

function About() {
  return (
    <section className="about">
      <img className="about__author-image" src={authorImg} alt="Author" />
      <div className="about__text">
        <div className="about__title">About the Author</div>
        <p className="about__description">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know. You
          can also talk about your experience with TripleTen, what you learned
          there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
