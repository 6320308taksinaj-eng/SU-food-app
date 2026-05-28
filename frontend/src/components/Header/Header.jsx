import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Discover a world of flavors in one place. From authentic, spicy Thai
          dishes and Asian favorites to perfectly crafted fusion creations. We
          select only the freshest, premium ingredients, meticulously prepared
          by expert chefs to bring you a unique and memorable dining experience.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
