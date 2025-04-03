import { motion } from "motion/react";
import { Link } from "react-router";
import FavoriteToggleButton from "./FavoriteToggleButton";

const CampingCard = ({ campings }) => {
 
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.1,
        rotate: 190,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: 0,
      }}
      transition={{
        duration: 1,
      }}
    >
      <article className="relative hover:scale-105 hover:duration-300 shadow-md p-2 rounded-md">
        <Link to={`/user/camping/${campings.id}`}>
          <div className="h-[300px] rounded-md mb-2">
            <img
              className="w-full h-full object-cover rounded-md"
              src={campings.secure_url}
            />
          </div>

          <div>
            <h3 className="text-xl font-semibold">{campings.title}</h3>
          </div>

          <p className="text-gray-700 text-sm">
            {campings.description.substring(0, 50)}{" "}
            <span className="text-blue-700">เพิ่มเติม..</span>
          </p>
          <div className="flex justify-between">
            <p className="font-bold">฿THB {campings.price}</p>
            <p>
              {campings.lat.toFixed(4)},{campings.lng.toFixed(4)}
            </p>
          </div>
        </Link>

        {/* FavoriteButton */}
        <div className="absolute top-4 right-4">
          <FavoriteToggleButton
          campingId={campings.id}
          isFavorite={campings.isfavorites}
          />
        </div>
      </article>
    </motion.div>
  );
};
export default CampingCard;
