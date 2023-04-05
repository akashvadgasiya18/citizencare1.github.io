import React from "react";
import "./Search.css";

const SearchBar = () => {
  return (
    <>
      <form>
        <div class="search-container">
          <div class="search_wrap search_wrap_1">
            <div class="search_box">
              <input type="text" class="input" placeholder="search..." />
              <div class="btn btn_common">
                <i class="fas fa-search"></i>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default SearchBar;
