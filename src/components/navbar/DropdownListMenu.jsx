import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from "@clerk/clerk-react";
import { AlignLeft } from "lucide-react";
import Usericon from "./Usericon";
import { Button } from "../ui/button";
import { publicLinks,privateLinks } from "@/util/Links";
import { Link, NavLink } from "react-router";
import SignOutLink from "./SignOutLink";

const DropdownListMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <AlignLeft />
            <Usericon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {publicLinks.map((items, index) => {
            return (
              <DropdownMenuItem key={index}>
                <NavLink to={items.href}>{items.label}</NavLink>
              </DropdownMenuItem>
            );
          })}

          <DropdownMenuSeparator />

          {/* กรณียังไม่ได้ล็อคอิน */}
          <SignedOut>
            <DropdownMenuItem>
              <SignInButton mode="modal">
                <button>Login</button>
              </SignInButton>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <SignUpButton mode="modal">
                <button>Register</button>
              </SignUpButton>
            </DropdownMenuItem>
          </SignedOut>


          {/* กรณีล็อคอินแล้ว */}
          <SignedIn>
          {privateLinks.map((items, index) => {
            return (
              <DropdownMenuItem key={index}>
                <Link to={items.href}>{items.label}</Link>
              </DropdownMenuItem>
            );
          })}
          <DropdownMenuSeparator/>
            <DropdownMenuItem>
              <UserButton />
              <SignOutLink/>
            </DropdownMenuItem>
          </SignedIn>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default DropdownListMenu;
