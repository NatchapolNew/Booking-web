import { Label } from "@radix-ui/react-label"
import { Textarea } from "@/components/ui/textarea"
const TextareaInput = ({register,name,type,placeholder,errors}) => {
    
  return (
        <div className="mb-2">
            <Label htmlFor={name} className="capitalize">{name}</Label>
            <Textarea 
            rows={5}
            type={type} 
            {...register(name)} 
            placeholder={placeholder}
            className={`${errors[name] && "border-red-500"}`}
             />
            {
              errors[name] && (<p className="text-red-500 text-sm">{errors[name].message}</p>)
            }
        </div>
  )
}
export default TextareaInput