import { useState } from "react";
import Rating from "@mui/material/Rating";
import Input from "./Input";

const ReactCard = () => {
  const [rating, setRating] = useState(0);
  // const [ratingData, setRatingData] = useState({});
  console.log("rating", rating);
  const handleRating = (e) => {
    setRating((prev) => ({ ...prev, e }));
    localStorage.setItem("ratingData", JSON.stringify(rating));
  };

  // useEffect(() => {
  //   localStorage.setItem("ratingData", JSON.stringify(ratingData));
  // }, [ratingData]);
  return (
    <>
      {rating === 0 ? (
        <div className="">
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={handleRating}
          />
        </div>
      ) : (
        <div>
          <Input />
        </div>
      )}
    </>
  );
};

export default ReactCard;
