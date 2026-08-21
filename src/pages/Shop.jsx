import React from "react";
import { Link } from "react-router-dom";
import artworks from "../data/artworks";

function Shop() {
  const [category, setCategory] = React.useState("All");
  const [search, setSearch] = React.useState("");
  const [priceFilter, setPriceFilter] = React.useState("all");
  const [sort, setSort] = React.useState("featured");

  const categories = ["All", ...new Set(artworks.map((artwork) => artwork.category))];

  const filteredArtworks = artworks
    .filter((artwork) => category === "All" || artwork.category === category)
    .filter((artwork) =>
      `${artwork.title} ${artwork.location}`
        .toLowerCase()
        .includes(search.toLowerCase())
    )
    .filter((artwork) => {
      if (priceFilter === "under-28") return artwork.price < 28;
      if (priceFilter === "28-29") return artwork.price >= 28 && artwork.price < 30;
      if (priceFilter === "30-plus") return artwork.price >= 30;
      return true;
    })
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      if (sort === "name") return a.title.localeCompare(b.title);
      return a.id - b.id;
    });

  return (
    <main className="shop-page">
      <section className="shop-intro">
        <p className="eyebrow">THE COLLECTION</p>
        <h1>Find a place to keep.</h1>
        <p>
          Explore gentle watercolour artwork inspired by memorable places around
          the world.
        </p>
      </section>

      <section className="shop-controls" aria-label="Shop filters">
        <div className="category-tabs">
          {categories.map((item) => (
            <button
              type="button"
              key={item}
              className={category === item ? "category-tab active" : "category-tab"}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <div className="filter-row">
          <label className="search-field">
            <span className="sr-only">Search artwork</span>
            <input
              type="search"
              placeholder="Search artwork or location"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </label>

          <label>
            <span className="sr-only">Filter by price</span>
            <select value={priceFilter} onChange={(event) => setPriceFilter(event.target.value)}>
              <option value="all">All prices</option>
              <option value="under-28">Under £28</option>
              <option value="28-29">£28–£29</option>
              <option value="30-plus">£30 and over</option>
            </select>
          </label>

          <label>
            <span className="sr-only">Sort artwork</span>
            <select value={sort} onChange={(event) => setSort(event.target.value)}>
              <option value="featured">Featured</option>
              <option value="name">Name</option>
              <option value="price-low">Price: low to high</option>
              <option value="price-high">Price: high to low</option>
            </select>
          </label>
        </div>
      </section>

      <section className="shop-results">
        <p className="results-count">
          {filteredArtworks.length} {filteredArtworks.length === 1 ? "artwork" : "artworks"}
        </p>

        {filteredArtworks.length > 0 ? (
          <div className="shop-grid">
            {filteredArtworks.map((artwork) => (
              <Link to={`/artwork/${artwork.id}`} className="shop-card" key={artwork.id}>
                <div className="shop-card-image">
                  <img src={artwork.image} alt={artwork.title} />
                </div>
                <div className="shop-card-details">
                  <div>
                    <h2>{artwork.title}</h2>
                    <p>{artwork.location}</p>
                  </div>
                  <span>£{artwork.price}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="no-results">No artwork matches those filters.</p>
        )}
      </section>
    </main>
  );
}

export default Shop;
