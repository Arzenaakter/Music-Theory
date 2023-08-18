import { FaClock, FaStar } from "react-icons/fa";
import { PiCalculatorLight } from "react-icons/pi";

const SingleTheoryCard = ({ theory }) => {
  const { img, mentorName, mentorImg, courseName, time, rating, price } =
    theory;
  return (
    <div className="bg-slate-200 p-4 rounded-lg">
      <div>
        <img src={img} alt="" />
        <span>
          <PiCalculatorLight />
        </span>
      </div>

      <div>
        <img src={mentorImg} alt="" />
        <p>{mentorName}</p>
      </div>
      <h4>{courseName}</h4>
      <div>
        <span className="flex gap-2">
          <FaClock />
          {time}
        </span>
        <span className="flex gap-2">
          <FaStar />
          {rating}
        </span>
        <span>${price}</span>
      </div>
    </div>
  );
};

export default SingleTheoryCard;
