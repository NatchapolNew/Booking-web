import { useUser } from '@clerk/clerk-react';
import { CircleUserRound } from 'lucide-react';
const Usericon = () => {
  const {user} = useUser();
  if(user){
    return <img src={user.imageUrl} className='w-6 h-6 rounded-full object-cover'/>
  }else{
    return (
      <div><CircleUserRound /></div>
    )
  }
}
export default Usericon