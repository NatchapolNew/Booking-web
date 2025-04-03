
import { useUser } from "@clerk/clerk-react"
import CampingCard from "../Card/CampingCard"
import useCampingStore from "@/store/camping-store"

const CampingLists = () => {
    const campings = useCampingStore((state)=>state.campings)
 
  return (
    <section className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-4">
        {campings.map((item)=>{
            return(
                    <CampingCard key={item.id} campings={item}/>
            )
        })}
    </section>
  )
}
export default CampingLists