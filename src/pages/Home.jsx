import React from "react";
import { Link } from "react-router-dom";
import artworks from "../data/artworks";

function Home() {
  const featuredArtworks = artworks.slice(0, 3);

  return (
    <main>

      {/* HERO */}

      <section className="hero">

        <div className="hero-content">

          <p className="eyebrow">
            DIGITAL WATERCOLOUR ART
          </p>

          <h1>
            Art inspired by
            <br />
            the places that
            <br />
            stay with us.
          </h1>

          <p>
            Beautiful artwork inspired by landscapes,
            landmarks and unforgettable places.
          </p>

          <Link to="/shop" className="button">
            Explore the collection
          </Link>

        </div>

        <div className="hero-image">
          <img
            src={artworks[0].image}
            alt={artworks[0].title}
          />
        </div>

      </section>


      {/* FEATURED */}

      <section className="featured">

        <div className="section-heading">
          <p className="eyebrow">DISCOVER</p>

          <h2>
            Popular collections
          </h2>
        </div>


        <div className="artwork-grid">

          {featuredArtworks.map((artwork) => (

            <Link
              to={`/artwork/${artwork.id}`}
              className="artwork-card"
              key={artwork.id}
            >

              <div className="artwork-image">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                />
              </div>

              <h3>
                {artwork.title}
              </h3>

              <p>
                {artwork.location}
              </p>

            </Link>

          ))}

        </div>

      </section>


      {/* ABOUT PREVIEW */}

      <section className="about-preview">

        <div>
          <p className="eyebrow">
            THE ARTIST
          </p>

          <h2>
            Thoughtfully created.
            <br />
            Made to be loved.
          </h2>

          <p>
            Each piece is created with care and inspired
            by beautiful places from around the world.
          </p>

          <Link to="/about" className="button">
            Meet the artist
          </Link>
        </div>

      </section>

    </main>
  );
}

export default Home;
