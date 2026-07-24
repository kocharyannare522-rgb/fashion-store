import { useWishlist } from "../../Contexts/WishlistContext";
import { useCart } from "../../Contexts/MyContext";
import { Link } from "react-router-dom";
import "./Wishlist.css";

const TrashIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
  </svg>
);

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useWishlist();
  const { addToCart } = useCart();

  if (wishlist.length === 0) {
    return (
      <div className="empty_wishlist">
        <h2>Your Wishlist is empty</h2>
        <p>Explore our collection and add your favorite items here!</p>
        <Link to="/explore" className="go_explore_btn">Go to Explore</Link>
      </div>
    );
  }
  return (
    <div className="wishlist_page">
      <h1 className="wishlist_title">My Favorites</h1>
      <div className="products_grid">
        {wishlist.map((item) => (
          <div key={item.id} className="product_card">
            <div className="product_images_container">
              <button 
                className="remove_wishlist_btn" 
                onClick={() => toggleWishlist(item)}
                aria-label="Remove from wishlist"
              >
                <TrashIcon />
              </button>
              <div className="product_images_grid">
                {item.images.slice(0, 1).map((imgUrl, index) => (
                  <img className="exploreImg" key={index} src={imgUrl} alt={item.name} />
                ))}
              </div>
            </div>
            <div className="product_info">
              <h3>{item.name}</h3>
              <p className="price">${item.price}</p>
              <div className="wishlist_actions">
                <Link 
                  to="/orderedList" 
                  className="add_btn_link" 
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}