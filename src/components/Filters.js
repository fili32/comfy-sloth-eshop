import React from "react";
import styled from "styled-components";
import { useFilterContext } from "../context/filter_context";
import { getUniqueValues, formatPrice } from "../utils/helpers";
import { FaCheck } from "react-icons/fa";

const Filters = () => {
  const {
    filters: {
      text,
      category,
      company,
      color,
      min_price,
      price,
      max_price,
      shipping,
    },
    updateFilters,
    all_products,
    clearFilters,
  } = useFilterContext();
  const categories = getUniqueValues(all_products, "category");
  const companies = getUniqueValues(all_products, "company");
  const colors = getUniqueValues(all_products, "colors");
  return (
    <Wrapper>
      <form onSubmit={(e) => e.preventDefault()}>
        {/* text */}
        <div className="form-control">
          <input
            className="search-input"
            name="text"
            onChange={updateFilters}
            type="text"
            placeholder="Search"
            value={text}
          />
        </div>
        {/* end of text */}
        {/* category */}
        <div className="form-control">
          <h5>category</h5>
          <div>
            {categories.map((c, index) => {
              return (
                <button
                  key={index}
                  onClick={updateFilters}
                  type="button"
                  name="category"
                  className={`${
                    category === c.toLowerCase() ? "active" : null
                  }`}
                >
                  {c}
                </button>
              );
            })}
          </div>
        </div>
        {/* end of category */}
        {/*company */}
        <div className="form-control">
          <h5>Company</h5>
          <select
            name="company"
            htmlFor="company"
            className="company"
            value={company}
            onChange={updateFilters}
          >
            {companies.map((comp, index) => {
              return (
                <option
                  key={index}
                  value={comp}
                  className={`${comp === company ? "active" : null}`}
                >
                  {comp}
                </option>
              );
            })}
          </select>
        </div>
        {/* end of company */}
        {/* colors */}
        <div className="form-control">
          <h5>colors</h5>
          <div className="colors">
            {colors.map((col, index) => {
              return (
                <button
                  key={index}
                  onClick={updateFilters}
                  type="button"
                  name="color"
                  value={col}
                  className={`${col === "all" ? "all-btn" : "color-btn"} ${
                    color === col ? "active" : null
                  }`}
                  style={{ backgroundColor: col }}
                >
                  {col === "all" ? "All" : color === col ? <FaCheck /> : null}
                </button>
              );
            })}
          </div>
        </div>
        {/* end of colors */}
        {/*price*/}
        <div className="form-control">
          <h5>price</h5>
          <p className="price">{formatPrice(price)}</p>
          <input
            type="range"
            name="price"
            min={min_price}
            max={max_price}
            value={price}
            onChange={updateFilters}
          />
        </div>
        {/*end of price*/}
        {/*shipping*/}
        <div className="form-control shipping">
          <label> Free shipping </label>
          <input
            type="checkbox"
            name="shipping"
            checked={shipping}
            onChange={updateFilters}
          />
        </div>
        {/*end of shipping*/}
      </form>
      <button className="clear-btn" onClick={clearFilters}>
        clear filters
      </button>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    text-transform: capitalize;
  }

  button {
    display: block;
    margin: 0.25em 0;
    padding: 0.25rem 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
  .active {
    border-color: var(--clr-grey-5);
  }
  .company {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
  }
  .colors {
    display: flex;
    align-items: center;
  }
  .color-btn {
    display: inline-block;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #222;
    margin-right: 0.5rem;
    border: none;
    cursor: pointer;
    opacity: 0.5;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 0.5rem;
      color: var(--clr-white);
    }
  }
  .all-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    opacity: 0.5;
  }
  .active {
    opacity: 1;
  }
  .all-btn .active {
    text-decoration: underline;
  }
  .price {
    margin-bottom: 0.25rem;
  }
  .shipping {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
  }
  .clear-btn {
    background: var(--clr-red-dark);
    color: var(--clr-white);
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
