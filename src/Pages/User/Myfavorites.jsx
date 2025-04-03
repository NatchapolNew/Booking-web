import CampingCard from "@/components/Card/CampingCard";
import useCampingStore from "@/store/camping-store";
import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";

const Myfavorites = () => {
  const { getToken } = useAuth();
  const actionListFavorites = useCampingStore(
    (state) => state.actionListFavorites
  );
  const favorites = useCampingStore((state) => state.favorites);

  const FetchFavorites = async () => {
    const token = await getToken();
    actionListFavorites(token);
  };

  useEffect(() => {
    FetchFavorites();
  }, []);
  console.log(favorites)
  return (
    <>
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4">
        {favorites.map((item)=>{
            return(
                    <CampingCard key={item.id} campings={item.Landmark}/>
            )
        })}
    </section>
    </>
  );
};
export default Myfavorites;
