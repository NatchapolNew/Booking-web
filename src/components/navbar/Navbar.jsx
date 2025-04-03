import DropdownListMenu from "./DropdownListMenu";
import Logo from "./Logo";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-col items-center py-5
      sm:flex-row sm:gap-4 justify-between">
        <Logo/>
        <Searchbar/>
        <DropdownListMenu/>
      </div>
    </nav>
  );
};
export default Navbar;
