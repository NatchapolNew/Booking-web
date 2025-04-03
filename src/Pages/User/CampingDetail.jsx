import { readCamping } from "@/api/Camping";
import BookingContainer from "@/components/booking/BookingContainer";
import Breadcrums from "@/components/campings/Breadcrums";
import Description from "@/components/campings/Description";
import Imagecontainer from "@/components/campings/Imagecontainer";
import Mainmap from "@/components/map/Mainmap";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const CampingDetail = () => {
  const { id } = useParams();
  const [camping, setCamping] = useState([]);
  useEffect(() => {
    fetchCampingDetail(id);
  }, []);

  const fetchCampingDetail = async (id) => {
    try {
      const res = await readCamping(id);
      setCamping(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <div>
      {/* Breadcrums */}
      <Breadcrums name={camping.title} />
      {/* Header */}
      <header className="flex items-center justify-between mt-4">
        {/* title */}
        <h1 className="font-bold text-4xl">{camping.title}</h1>
        <div className="flex gap-2">
          {/* sharebutton */}
          <p>Share</p>
          {/* Favoritebutton */}
          <p>Favorite</p>
        </div>
      </header>
      {/* Image */}
      <Imagecontainer image={camping.secure_url} name={camping.title} />
      {/* Description map */}
      <section className="lg:grid lg:grid-cols-12 gap-x-12">
      <div className="col-span-8">
      <Description text={camping.description}/>
      {
        camping.lat && <Mainmap Location={[camping.lat,camping.lng]}/>
      }
       
      </div>
      {/* Calendar */}
      <div className="lg:col-span-4 flex flex-col items-center">
        <BookingContainer campingId={camping.id} price={camping.price} bookings={[]}/>
      </div>
      </section>

    </div>
  );
};
export default CampingDetail;
