import Buttons from "@/components/Form/Buttons";
import FormInput from "@/components/Form/FormInput";
import { useForm } from "react-hook-form";
import { profileSchema } from "@/util/Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@clerk/clerk-react";
import { createProfile } from "@/api/profile";
import { createNotify } from "@/util/createAlert";

const Profile = () => {
  //clerk
  const { getToken, userId } = useAuth();
  const { register, handleSubmit, formState, setValue, resetField } = useForm({
    resolver: zodResolver(profileSchema),
  });
  const { errors, isSubmitting } = formState;

  const profile = async (data) => {
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    const token = await getToken();
    await createProfile(token, data, userId) //เรียกfunctionแล้วส่ง token,Data กลับไป
      .then((res) => {
        createNotify("success", res.data.message);
        resetField("firstname");
        resetField("lastname");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold mb-4">create profile</h1>
      <div className="border p-8 mb-4 rounded-md">
        <form onSubmit={handleSubmit(profile)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              register={register}
              name="firstname"
              type="text"
              placeholder="Input your firstname..."
              errors={errors}
            />

            <FormInput
              register={register}
              name="lastname"
              type="text"
              placeholder="Input your lastname..."
              errors={errors}
            />
            <Buttons text="Create profile" isPending={isSubmitting} />
          </div>
        </form>
      </div>
    </section>
  );
};
export default Profile;
