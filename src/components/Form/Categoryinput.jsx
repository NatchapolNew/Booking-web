import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/util/categories";

const Categoryinput = ({ name, register, setValue }) => {
  return (
    
      <div className="mb-2">
        <input hidden {...register(name)}/>
        <label className="capitalize">{name}</label>
        <Select onValueChange={(value)=>setValue(name,value)} required>
          <SelectTrigger>
            <SelectValue placeholder="Please select category" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((item, index) => {

              return (
                <SelectItem value={item.label} key={index}>
                  <span className="capitalize flex items-center gap-4">
                   <item.icon/>
                    {item.label}
                    </span>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>

  );
};
export default Categoryinput;
