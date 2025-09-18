import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'; // Import Header
import Footer from './Footer'; // Import Footer
import './Watchlist.css'; 

function Watchlist() {
  return (
    // Wrap everything to include the Header and Footer
    <>
      <Header /> 
      <div className="watchlist-section">
        {/* Top Bar */}
        <div className="topbar">
          <h3>What to watch</h3>
          <a href="#" className="recommend-link">Get more recommendations &gt;</a>
        </div>

        {/* Watchlist Link */}
        <a href="#" className="watchlist-link">From your Watchlist &gt;</a>

        {/* Empty Watchlist Box */}
        <div className="watchlist-box text-center">
          <div className="bookmark-icon">
            <span>+</span>
          </div>
          <h5 className="fw-bold">Your Watchlist is empty</h5>
          <p className="subtext">Save shows and movies to keep track of what you want to watch.</p>
          
          {/* Button that links to the Popular Movies page */}
          <Link to="/movie/popular" className="browse-btn-link">
            <button className="browse-btn">
              Browse popular movies
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Watchlist;

