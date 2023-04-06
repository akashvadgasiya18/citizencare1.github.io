import React from "react";
import "./Search.css";

const SearchBar = () => {
  return (
    <>
      <form>
        <div class="search-sre-container">
          <div class="search_ser_wrap search_ser_wrap_1">
            <div class="search_ser_box">
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
