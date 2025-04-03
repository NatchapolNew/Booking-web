import useCampingStore from "@/store/camping-store";
import MapHome from "../map/MapHome";
import CampingLists from "./CampingLists";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import CategoryList from "./CategoryList";

const CampingContainer = () => {
  const actionListCampings = useCampingStore(
    (state) => state.actionListCampings
  );
  //Clerk
  const { user } = useUser();

  useEffect(() => {
    //||first true
    //&&find first false
    //?? nullist มีค่าหรือไม่ ถ้าไม่ เป็นnull or undefinded
    const id = user?.id ?? null;
    actionListCampings(id);
  }, [user?.id]);
  return (
    <div>
      <MapHome />
      <CategoryList/>
      <CampingLists />
    </div>
  );
};
export default CampingContainer;
