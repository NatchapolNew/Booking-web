import useCampingStore from "@/store/camping-store";
import { CardSignInbutton, CardSubmittbutton } from "./Cardbutton";
import { useForm } from "react-hook-form";
import { promise } from "zod";
import { useAuth, useUser } from "@clerk/clerk-react";
import { use } from "react";
import { createNotify } from "@/util/createAlert";

const FavoriteToggleButton = ({ campingId, isFavorite }) => {
  const { getToken,isSignedIn } = useAuth();
  // const { user } = useUser();
  const { handleSubmit, formState } = useForm();
  const { isSubmitting } = formState;
  const actionAddorRemoveFavorite = useCampingStore(
    (state) => state.actionAddorRemoveFavortie
  );

  const hdlSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const token = await getToken();
    const res = await actionAddorRemoveFavorite(token,{
      campingId,
      isFavorite,
    });
    if(res.success){
      createNotify("success",res.message)
    }else{
      createNotify("error",res.message)
    }
  };

  if(!isSignedIn){
    return <CardSignInbutton/>
  }
  return (
    <form onSubmit={handleSubmit(hdlSubmit)}>
      <CardSubmittbutton isPending={isSubmitting} isFavorite={isFavorite} />
    </form>
  );
};
export default FavoriteToggleButton;
