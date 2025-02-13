import { Link } from "react-router";

/* eslint-disable react/prop-types */
const JobCard = ({ job }) => {
  const {
    _id,
    job_title,
    category,
    deadline,
    description,
    min_price,
    max_price,
    bid_count
  } = job;
  return (
    <Link to={`/job/${_id}`}>
      <div className="w-full max-w-sm px-4 py-3 bg-white rounded-md shadow-md hover:scale-[1.05] transition-all">
        <div className="flex items-center justify-between">
          <span className="text-xs font-light text-gray-800 ">
            Deadline: {new Date(deadline).toLocaleDateString()}
          </span>
          <span className={`px-3 py-1 text-[10px] rounded-md ${
                              category === "Web Development" &&
                              "text-blue-500 bg-blue-100/60"
                            } ${
                              category === "Graphics Design" &&
                              "text-emerald-500 bg-emerald-100/60"
                            }  ${
                              category === "Digital Marketing" &&
                              "text-pink-500 bg-pink-100/60"
                            }
                            `}>
            {category}
          </span>
        </div>

        <div>
          <h1
            title={job_title}
            className="mt-2 text-lg font-semibold text-gray-800 "
          >
            {job_title.substring(0, 30)}...
          </h1>

          <p className="mt-2 text-sm text-gray-600 ">
            {description.substring(0, 50)}...
          </p>
          <p className="mt-2 text-sm font-bold text-gray-600 ">
            Range: ${min_price} - ${max_price}
          </p>
          <p className="mt-2 text-sm font-bold text-gray-600 ">
            Bid Counts: {bid_count}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default JobCard;
