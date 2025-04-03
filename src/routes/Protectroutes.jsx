import { useAuth } from "@clerk/clerk-react"
import { Link } from "react-router"

const Protectroutes = ({eL}) => {
 const {isLoaded,isSignedIn} = useAuth()
 console.log(isSignedIn)
    if(!isLoaded){
        return <h1>Loading...</h1>
    }
    if(!isSignedIn){
        return <div className="flex w-screen h-screen items-center justify-center">
            <p>Access Denied!!! Go to  <Link to="/">Home</Link></p>
        </div>
    }
  return eL
  
}
export default Protectroutes