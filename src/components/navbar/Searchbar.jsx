import { useSearchParams } from "react-router";
import { Input } from "../ui/input";
import { useDebounce, useDebouncedCallback } from "use-debounce";

const Searchbar = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const updateSearch = useDebouncedCallback((value) => {
    console.log(value);
    const params = new URLSearchParams(searchParams)
    if(value){
      params.set('search',value)
    }else{
      params.delete('search')
    }
    setSearchParams(params)
  }, 500);

  const hdlSearch = (e) => {
    updateSearch(e.target.value);
  };

  return (
    <Input
      onChange={hdlSearch}
      type="text"
      placeholder="Search..."
      className="max-w-sm"
    />
  );
};
export default Searchbar;
