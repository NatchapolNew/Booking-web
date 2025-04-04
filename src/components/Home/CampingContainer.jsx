import useCampingStore from "@/store/camping-store";
import MapHome from "../map/MapHome";
import CampingLists from "./CampingLists";
import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import CategoryList from "./CategoryList";
import { useSearchParams } from "react-router";

const CampingContainer = () => {
  const actionListCampings = useCampingStore(
    (state) => state.actionListCampings
  );
  const actionFilter = useCampingStore(
    (state) => state.actionFilter
  );
  //searchParams
  const [searchParams,setSearchParams] = useSearchParams()
  //Clerk
  const { user } = useUser();
  const id = user?.id ?? null;
  
  // useEffect(() => {
  //   //||first true
  //   //&&find first false
  //   //?? nullist มีค่าหรือไม่ ถ้าไม่ เป็นnull or undefinded
    
    
  // }, [user?.id]);

  const search = searchParams.get('search')
  const category = searchParams.get('category')

  useEffect(()=>{
    console.log(category,search)
    if(search || category){
      actionFilter(category,search)
    }else if( !search || !category){
      actionListCampings(id);
    }

  },[search,category])


  return (
    <div>
      <MapHome />
      <CategoryList/>
      <CampingLists />
    </div>
  );
};
export default CampingContainer;
