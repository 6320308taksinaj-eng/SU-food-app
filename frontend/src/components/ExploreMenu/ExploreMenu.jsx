import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio atque
        repudiandae velit ipsum officia. Voluptates earum doloribus itaque
        eaque, tenetur iure, unde nemo sed, culpa vero aliquid illum molestiae
        eos!
      </p>
      <div className="explore-menu-list"> {/* แก้ชื่อคลาสให้ตรงมาตรฐาน */}
        {menu_list.map((item, index) => {
          return (
            // 🎯 2. เพิ่มคำสั่ง onClick เวลาจิ้มเลือกหมวดหมู่เมนูอาหาร
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} 
              key={index} 
              className={`explore-menu-list-item ${category === item.menu_name ? "active" : ""}`}
            >
              <img src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;