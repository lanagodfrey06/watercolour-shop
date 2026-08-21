import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero-copy">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h1>Painting the places that stay with us.</h1>
          <p>
            I’m Tracy, a watercolour artist inspired by travel, quiet moments,
            and the feeling of discovering somewhere special for the first time.
          </p>
        </div>

        <div className="about-hero-art">
          <img src="/images/lake-como.jpg" alt="Watercolour artwork of Lake Como" />
          <span>Lake Como, Italy</span>
        </div>
      </section>

      <section className="about-story">
        <div>
          <p className="eyebrow">MY PROCESS</p>
          <h2>Small details. Big memories.</h2>
        </div>
        <div className="about-story-copy">
          <p>
            Every piece begins with a place that has left an impression: a
            rainy city street, a distant mountain, or a view beside the sea.
            I turn those memories into soft, expressive artwork designed to
            bring a little calm into your home.
          </p>
          <p>
            I work with a gentle palette and loose layers of colour, allowing
            each painting to feel personal while leaving room for your own
            memories to become part of it.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="about-value">
          <span>01</span>
          <h2>Inspired by travel</h2>
          <p>Landmarks, landscapes, and the little details that make a place memorable.</p>
        </div>
        <div className="about-value">
          <span>02</span>
          <h2>Made with care</h2>
          <p>Thoughtful artwork created to feel at home in your space.</p>
        </div>
        <div className="about-value">
          <span>03</span>
          <h2>Meant to be loved</h2>
          <p>Pieces that bring back a favourite journey, view, or feeling.</p>
        </div>
      </section>

      <section className="about-callout">
        <p className="eyebrow">COME AND HAVE A LOOK</p>
        <h2>Find a place to keep.</h2>
        <Link to="/shop" className="button">Explore the collection</Link>
      </section>
    </main>
  );
}

export default About;
