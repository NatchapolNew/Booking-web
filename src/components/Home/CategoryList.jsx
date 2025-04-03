import { categories } from "@/util/categories"
import { set } from "date-fns"
import { useSearchParams } from "react-router"


const CategoryList = () => {
    const [searchParams,setSearchParams] = useSearchParams()
    const handleFilter = (category)=>{
        console.log(category)
        // setSearchParams()
        const params = new URLSearchParams(searchParams)
        const c = searchParams.get('category')|| ""
        if(c === category){
            params.delete("category")
        }else{
            params.set('category',category)
        }
        setSearchParams(params)
    }

  return (
    <div className="flex justify-between">
        {categories.map((item)=>{
            return(

                <button 
                onClick={()=>handleFilter(item.label)}
                className="flex flex-col items-center m-2 hover:text-green-400"  
                key={item.label} >
                <item.icon/>
                <p className="capitalize font-bold">{item.label}</p>
                </button>
                
            )
        })}
    </div>
  )
}
export default CategoryList