import { resizeFile } from "@/util/resizeimage";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { uploadImage } from "@/api/Uploadfile";
import { useAuth } from "@clerk/clerk-react";
import { useState } from "react";
import { RotateCw } from "lucide-react";
const FormUploadImage = ({ setValue }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { getToken } = useAuth();
  const hdlOnchange = async (e) => {
    setIsLoading(true);
    const file = e.target.files[0];
    const token = await getToken();
    if (!file) {
      return;
    }
    try {
      const resizedImage = await resizeFile(file);
      const res = await uploadImage(token, resizedImage);
      setValue("image", res.data.result);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  return (
    <div>
      <Label>Upload Image</Label>
      <div className="flex items-center gap-2">
        <Input type="file" onChange={hdlOnchange} />
        {isLoading && <RotateCw className="animate-spin" />}
      </div>
    </div>
  );
};
export default FormUploadImage;
