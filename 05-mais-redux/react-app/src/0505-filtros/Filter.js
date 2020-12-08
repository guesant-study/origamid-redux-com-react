import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "./helper/useForm";
import { changeFilters, getProductsColors } from "./store/products";

const Filter = () => {
  const colors = useSelector(getProductsColors);
  const [minPrice, setMinPrice] = React.useState("");
  const [maxPrice, setMaxPrice] = React.useState("");
  const [selectedColors, setSelectedColors] = React.useState([]);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(changeFilters({ name: "colors", value: selectedColors }));
  }, [dispatch, selectedColors]);

  React.useEffect(() => {
    dispatch(
      changeFilters({
        name: "prices",
        value: { min: Number(minPrice), max: Number(maxPrice) },
      }),
    );
  }, [dispatch, minPrice, maxPrice]);

  function handleChange({ target }) {
    if (target.checked) {
      setSelectedColors([...selectedColors, target.value]);
    } else {
      setSelectedColors(
        selectedColors.filter((color) => color !== target.value),
      );
    }
  }
  function isColorChecked(color) {
    return selectedColors.includes(color);
  }

  return (
    <div>
      <input
        type="number"
        placeholder="Min"
        {...useForm(minPrice, setMinPrice)}
      />
      <input
        type="number"
        placeholder="Max"
        {...useForm(maxPrice, setMaxPrice)}
      />
      {colors.map((color) => (
        <label key={color}>
          <input
            type="checkbox"
            value={color}
            checked={isColorChecked(color)}
            onChange={handleChange}
          />
          {color}
        </label>
      ))}
    </div>
  );
};

export default Filter;
