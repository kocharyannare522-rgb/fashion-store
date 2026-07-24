import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../Contexts/MyContext";
import { useWishlist } from "../../Contexts/WishlistContext";
import "./Explore.css";

const HeartEmpty = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="currentColor"
    className="bi bi-heart"
    viewBox="0 0 16 16"
  >
    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
  </svg>
);

const HeartFilled = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="red"
    className="bi bi-heart-fill"
    viewBox="0 0 16 16"
  >
    <path
      fillRule="evenodd"
      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
    />
  </svg>
);

export default function Explore() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterCountry, setFilterCountry] = useState("All");
  const [filterQuality, setFilterQuality] = useState("All");
  const [sortType, setSortType] = useState("default");
  const [priceRange, setPriceRange] = useState({ min: "", max: "" });
  const { addToCart } = useCart();
  const { wishlist, toggleWishlist } = useWishlist();

  async function fetchMyFile() {
    try {
      setLoading(true);
      let response = await fetch("/JSONS/Explore.json");
      let result = await response.json();
      setData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setTimeout(() => setLoading(false), 1500);
    }
  }

  useEffect(() => {
    fetchMyFile();
  }, []);

  const countries = ["All", ...new Set(data.map((item) => item.country))];
  const qualities = ["All", ...new Set(data.map((item) => item.quality))];

  const filteredAndSortedData = data
    .filter((item) => {
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCountry =
        filterCountry === "All" || item.country === filterCountry;
      const matchesQuality =
        filterQuality === "All" || item.quality === filterQuality;
      const minPrice = priceRange.min === "" ? 0 : parseFloat(priceRange.min);
      const maxPrice =
        priceRange.max === "" ? Infinity : parseFloat(priceRange.max);
      const matchesPrice = item.price >= minPrice && item.price <= maxPrice;
      return matchesSearch && matchesCountry && matchesQuality && matchesPrice;
    })
    .sort((a, b) => {
      if (sortType === "lowToHigh") return a.price - b.price;
      if (sortType === "highToLow") return b.price - a.price;
      return 0;
    });

  if (loading) {
    return (
      <div className="loader_wrapper">
        <div className="dot-spinner">
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
          <div className="dot-spinner__dot"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="explore_container">
      <div className="explore_page">
        <h1 className="title">Latest Fashion Collection</h1>
        <div className="filter_section">
          <div className="filter_group">
            <label>Search</label>
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="filter_group">
            <label>Country</label>
            <select
              value={filterCountry}
              onChange={(e) => setFilterCountry(e.target.value)}
            >
              {countries.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>
          <div className="filter_group">
            <label>Quality</label>
            <select
              value={filterQuality}
              onChange={(e) => setFilterQuality(e.target.value)}
            >
              {qualities.map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>
          <div className="filter_group">
            <label>Min Price</label>
            <input
              type="number"
              placeholder="0"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange({ ...priceRange, min: e.target.value })
              }
            />
          </div>
          <div className="filter_group">
            <label>Max Price</label>
            <input
              type="number"
              placeholder="1000"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange({ ...priceRange, max: e.target.value })
              }
            />
          </div>
          <div className="filter_group">
            <label>Sort By</label>
            <select
              value={sortType}
              onChange={(e) => setSortType(e.target.value)}
            >
              <option value="default">Default</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </div>
        <div className="products_grid">
          {filteredAndSortedData.map((item) => {
            const isFavorite = wishlist.some((fav) => fav.id === item.id);
            return (
              <div key={item.id} className="product_card">
                <div className="product_images_container">
                  <button
                    className="wishlist_btn"
                    onClick={() => toggleWishlist(item)}
                    style={{
                      position: "absolute",
                      right: "10px",
                      top: "10px",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      zIndex: 10,
                    }}
                  >
                    {isFavorite ? <HeartFilled /> : <HeartEmpty />}
                  </button>
                  <div className="product_images_grid">
                    {item.images.slice(0, 4).map((imgUrl, index) => (
                      <img
                        className="exploreImg"
                        key={index}
                        src={imgUrl}
                        alt={item.name}
                      />
                    ))}
                  </div>
                </div>
                <div className="product_info">
                  <h3>{item.name}</h3>
                  <p className="price">${item.price}</p>
                  <h2 className="country">{item.country}</h2>
                  <Link
                    to="/orderedList"
                    className="add_btn_link"
                    onClick={() => addToCart(item)}
                  >
                    Add to Cart
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
