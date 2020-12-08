import React from "react";
import { useSelector } from "react-redux";

const filterByColor = (colors) => (product) =>
  !colors.length || colors.includes(product.color);

const filterPrices = (prices) => (product) =>
  (!prices.max || product.price <= prices.max) &&
  (!prices.min || product.price >= prices.min);

const composeFilters = (filters) => (product) =>
  filters.every((filter) => filter(product));

const filterProducts = ({ products }) => {
  const { data = [], filters } = products;
  return data.filter(
    composeFilters([
      filterByColor(filters.colors),
      filterPrices(filters.prices),
    ]),
  );
};
const Products = () => {
  const data = useSelector(filterProducts);
  return (
    <table>
      <thead>
        <tr>
          <th>nome</th>
          <th>cor</th>
          <th>preco</th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ id, name, color, price }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{color}</td>
            <td>{price}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Products;
