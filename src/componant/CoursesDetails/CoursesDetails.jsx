import PropTypes from "prop-types";

export const CoursesDetails = ({data, time, price}) => {
  return (
    <div className="md:w-1/3">
      <div className="text-[#2F80ED] bg-white font-bold text-xl text-center border-b-2 py-3">
        <h1>Credit Hour Remaining : {data.length} hr</h1>
      </div>
      <div className="bg-white p-5">
        <h1 className="text-xl font-bold">Course Name</h1>
        <div>
          <ul className="list-decimal pl-5">
         {
             data.map(data =><li className="py-1" key={data.id}>{data.name}</li>)
          } 

          </ul>
        </div>
        <hr />
        <div className="text-xl font-semibold py-2">
          <h1>Total Credit Hour : {time}</h1>
        </div>
        <hr />
        <div className="text-xl font-semibold py-2">
          <h1>Total Price : {price} USD</h1>
        </div>
      </div>
    </div>
  );
};

CoursesDetails.propTypes = {
  data: PropTypes.object,
  time: PropTypes.number,
  price: PropTypes.number
}