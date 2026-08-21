import React from "react";
import { Link, useParams } from "react-router-dom";
import artworks from "../data/artworks";

function Artwork() {
  const { id } = useParams();
  const artwork = artworks.find((item) => item.id === Number(id));
  const [selectedImage, setSelectedImage] = React.useState(artwork?.image);
  const [size, setSize] = React.useState("A4");
  const [quantity, setQuantity] = React.useState(1);
  const [liked, setLiked] = React.useState(false);
  const [cartMessage, setCartMessage] = React.useState("");

  if (!artwork) {
    return (
      <main className="missing-page">
        <h1>Artwork not found</h1>
        <Link to="/shop" className="button">Back to shop</Link>
      </main>
    );
  }

  const relatedArtworks = artworks
    .filter((item) => item.category === artwork.category && item.id !== artwork.id)
    .slice(0, 2);
  const galleryImages = [artwork, ...relatedArtworks];

  function addToCart() {
    setCartMessage(`${artwork.title} has been added to your cart.`);
  }

  function buyNow() {
    setCartMessage("Thank you! Checkout will be available soon.");
  }

  return (
    <main className="product-page">
      <div className="product-breadcrumb">
        <Link to="/shop">Shop</Link>
        <span>/</span>
        <span>{artwork.title}</span>
      </div>

      <section className="product-layout">
        <div className="product-gallery">
          <div className="product-main-image">
            <img src={selectedImage} alt={artwork.title} />
          </div>

          <div className="product-thumbnails" aria-label="Artwork images">
            {galleryImages.map((image, index) => (
              <button
                type="button"
                className={selectedImage === image.image ? "thumbnail active" : "thumbnail"}
                onClick={() => setSelectedImage(image.image)}
                key={image.id}
                aria-label={`View ${index === 0 ? "main" : "related"} artwork image`}
              >
                <img src={image.image} alt="" />
              </button>
            ))}
          </div>

          {relatedArtworks.length > 0 && (
            <p className="gallery-note">
              Additional images show pieces from the same collection.
            </p>
          )}
        </div>

        <div className="product-info">
          <p className="eyebrow">{artwork.category}</p>
          <h1>{artwork.title}</h1>
          <p className="product-location">{artwork.location}</p>
          <p className="product-price">£{artwork.price}</p>

          <div className="product-rule" />

          <p className="product-description">{artwork.description}</p>

          <div className="product-option">
            <label htmlFor="size">Size</label>
            <select id="size" value={size} onChange={(event) => setSize(event.target.value)}>
              <option value="A5">A5 — 14.8 × 21 cm</option>
              <option value="A4">A4 — 21 × 29.7 cm</option>
              <option value="A3">A3 — 29.7 × 42 cm</option>
            </select>
          </div>

          <div className="product-actions-row">
            <label className="quantity-control">
              <span>Qty</span>
              <input
                type="number"
                min="1"
                max="10"
                value={quantity}
                onChange={(event) => setQuantity(Math.max(1, Number(event.target.value)))}
              />
            </label>
            <button
              type="button"
              className={liked ? "like-button liked" : "like-button"}
              onClick={() => setLiked(!liked)}
              aria-label={liked ? "Remove from favourites" : "Add to favourites"}
            >
              {liked ? "♥ Saved" : "♡ Like"}
            </button>
          </div>

          <button type="button" className="button product-button" onClick={addToCart}>
            Add to cart
          </button>
          <button type="button" className="product-buy-button" onClick={buyNow}>
            Buy now
          </button>

          {cartMessage && <p className="cart-message" role="status">{cartMessage}</p>}

          <div className="product-details">
            <details open>
              <summary>Details</summary>
              <p>Printed on archival art paper and carefully packaged for delivery.</p>
            </details>
            <details>
              <summary>Delivery</summary>
              <p>Ships flat and protected. Delivery information will be confirmed at checkout.</p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Artwork;
