import PropTypes from "prop-types";
import { FaDollarSign } from "react-icons/fa";
import { GoBook } from "react-icons/go";
export const Course = ({ course, handleSelectBtn }) => {
  const { name, description, price, credit, photo } = course;
  return (
  <div>
      <div className="card card-compact h-[410px] shadow-xl p-1">
        <figure>
          <img
            src={photo}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="*:flex *:gap-2 *:items-center space-x-4 flex items-center *:text-base">
            <div >
            <span><FaDollarSign /></span>
              <p>price : {price}</p>
            </div>
            <div>
             <span><GoBook /></span>
             <p>Credit : {credit} hr</p>
            </div>
          </div>
          <div className="">
            <button onClick={()=>handleSelectBtn(course, credit, price)}
             className="btn bg-blue-500 text-white w-full text-xl">Select</button>
          </div>
        </div>
      </div>
      </div>
  );
};

Course.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelectBtn: PropTypes.func
};
