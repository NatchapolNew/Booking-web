import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
const FormInput = ({register,name,type,placeholder,errors}) => {
    
  return (
        <div className="mb-2">
            <Label htmlFor={name} className="capitalize">{name}</Label>
            <Input type={type} {...register(name)} 
            placeholder={placeholder}
            className={`${errors[name] && "border-red-500"}`}
            />
            {
              errors[name] && (<p className="text-red-500 text-sm">{errors[name].message}</p>)
            }
        </div>
  )
}
export default FormInput