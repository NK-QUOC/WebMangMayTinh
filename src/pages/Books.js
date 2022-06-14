import React from "react";
import Menu from "../components/Book-menu";
import { useState } from "react";
import BookCategories from "../components/Book-category";
import { useGlobalContext } from "../context";
import SearchForm from "../components/search-form";
function BookMenu() {
  const { BookData } = useGlobalContext();
  const [menuItems, setMenuItems] = useState(BookData); 

  const allCategory = ['All', ...new Set(BookData.map((item) => item.category))];
  const [categories, setCategories] = useState(allCategory);

  const filterItems = (category) => {
    if (category === 'All') {
      setMenuItems(BookData);
      return;
    } 
    const newMenuItems = BookData.filter((item) => item.category === category);
    setMenuItems(newMenuItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>BOOKS</h2>
          <div className="underline"></div>
        </div>
        <SearchForm></SearchForm>        
      </section>
      <BookCategories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} />
    </main>
  );
}

export default BookMenu;
