import { useForm } from "react-hook-form";
import FormInput from "@/components/Form/FormInput";
import TextareaInput from "@/components/Form/TextareaInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { campingSchema } from "@/util/Schema";
import Buttons from "@/components/Form/Buttons";
import Categoryinput from "@/components/Form/Categoryinput";
import Mainmap from "@/components/map/Mainmap";
import { createCamping } from "@/api/Camping";

//clerk
import { useAuth } from "@clerk/clerk-react";
import FormUploadImage from "@/components/Form/FormUploadImage";
import { createAlert } from "@/util/createAlert";

const Camping = () => {
  //clerk
  const { getToken, userId } = useAuth();

  const { register, handleSubmit, formState, setValue, reset } = useForm({
    resolver: zodResolver(campingSchema),
  });

  const hdlSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const token = await getToken();
    createCamping(token,data)
      .then((res) => {
        console.log(res.data);
        reset();
        createAlert("success", "Create Landmark Success");
      })
      .catch((err) => {
        console.log(err);
        createAlert("error",err.message)
      });
  };

  const { errors, isSubmitting } = formState;

  return (
    <section>
      <h1 className="capitalize text-2xl font-semibold">create camping</h1>

      <div className="border p-8 mb-4 rounded-md">
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <FormInput
              register={register}
              name="title"
              type="text"
              placeholder="Title..."
              errors={errors}
            />

            <FormInput
              register={register}
              name="price"
              type="number"
              placeholder="Price..."
              errors={errors}
            />

            <TextareaInput
              register={register}
              name="description"
              type="text"
              placeholder="Description..."
              errors={errors}
            />
            <div>
              <Categoryinput
                name="category"
                register={register}
                setValue={setValue}
              />
              <FormUploadImage setValue={setValue} />
            </div>
          </div>
          <Mainmap register={register} setValue={setValue} />

          <Buttons text="create camping" isPending={isSubmitting} />
        </form>
      </div>
    </section>
  );
};
export default Camping;
