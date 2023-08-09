import { BsFillBagFill } from "react-icons/bs";

const Card = ({ img, teamName, star, teamKit, Year }) => {
  return (
    <>
      <section className="card">
        <img src={img} alt={teamName} className="card-img" />
        <div className="card-details">
          
          <section className="star-rating">
            {star} {star} {star} {star}           
          </section>
          <section className="card-title">          
          <h5 >{teamName}</h5> 
          <div>{teamKit}</div>
          {Year}
          </section>
          
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
        
        </div>
      </section>
    </>
  );
};

export default Card;
