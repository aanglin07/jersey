import "./Category.css";
import Input from "../../components/Main/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Search By League</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="English Premier League"
          title="English Premier League"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="La Liga"
          title="La Liga"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Serie A"
          title="Serie A"
          name="test"
        />
        
      </div>
    </div>
  );
}

export default Category;
