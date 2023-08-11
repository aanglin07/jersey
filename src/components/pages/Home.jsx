import { useState } from "react"
import Search from "../../Search/Search";
import Products from "./../../Products/Products"
import products from "./../../db/data"
import Sidebar from "./../../Sidebar/Sidebar"
import Card from "../Card"


export const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.teamName.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category,Year, teamName }) =>
          category === selected ||         
          Year === selected ||
          teamName === selected
      );
    }

    return filteredProducts.map(
      ({id, img, teamName, star, teamKit, Year }) => (
        <Card
          key={Math.random()}
          id = {id}
          img={img}
          teamName={teamName}
          star={star}
          teamKit={teamKit}
          Year={Year}        
        />
          
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);
  return (
    <div>
        <Sidebar handleChange={handleChange} />
        <Search query={query} handleInputChange={handleInputChange} />
        <Products result={result} />
    </div>
  )
}


