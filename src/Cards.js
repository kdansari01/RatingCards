import ReactCard from "./ratingCard";

const Cards = () => {
  return (
    <>
      <div className="card w-50 ">
        <img
          src="https://images.freeimages.com/clg/images/47/479715/bird-vector-10_f.jpg"
          className="card-img-top w-50 "
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title"> Rating Card</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <div>
            <p>
              rate <ReactCard />
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
