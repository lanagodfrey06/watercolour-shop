import React from "react";
import { Link } from "react-router-dom";
import artworks from "../data/artworks";

function Collections() {
  return (
    <main className="collections-page">
      <section className="collections-intro">
        <p className="eyebrow">THE GALLERY WALL</p>
        <h1>Places worth remembering.</h1>
        <p>
          Browse the collection as a small gallery of treasured places,
          painted softly in watercolour.
        </p>
      </section>

      <section className="gallery-wall" aria-label="Artwork collection">
        {artworks.map((artwork, index) => (
          <Link
            to={`/artwork/${artwork.id}`}
            className={`gallery-frame gallery-frame-${(index % 3) + 1}`}
            key={artwork.id}
          >
            <div className="frame-inner">
              <img src={artwork.image} alt={artwork.title} />
            </div>
            <div className="gallery-caption">
              <h2>{artwork.title}</h2>
              <p>{artwork.location}</p>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}

export default Collections;
