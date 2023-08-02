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
          <section>
          <h5 className="card-title">{teamName} || {teamKit} || {Year}</h5> 
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
