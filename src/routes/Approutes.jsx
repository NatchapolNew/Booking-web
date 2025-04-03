import Mainmap from "@/components/map/Mainmap";
import Layout from "@/Layouts/Layout";
import LayoutAdmin from "@/Layouts/LayoutAdmin";
import About from "@/Pages/About";
import Camping from "@/Pages/Admin/Camping";
import Dashboard from "@/Pages/Admin/Dashboard";
import Manage from "@/Pages/Admin/Manage";
import Home from "@/Pages/Home";
import Notfound from "@/Pages/Notfound";
import Profile from "@/Pages/User/Profile";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import Protectroutes from "./Protectroutes";
import CampingDetail from "@/Pages/User/CampingDetail";
import Checkout from "@/Pages/User/Checkout";
import Checkoutcomplete from "@/Pages/User/Checkoutcomplete";
import Myorders from "@/Pages/User/Myorders";
import Myfavorites from "@/Pages/User/Myfavorites";

const Approutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route element={<Layout/>} >
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>

      {/* Privateuser */}
      <Route path="user"element={<Layout/>}>
        <Route path="profile" element={<Profile/>}/>
        <Route path="camping/:id" element={<CampingDetail/>}/>
        <Route path="checkout/:id" element={<Checkout/>}/>
        <Route path="complete/:session" element={<Checkoutcomplete/>}/>
        <Route path="myorders" element={<Myorders/>}/>
        <Route path="my-favorites" element={<Myfavorites/>}/>
      </Route>


        {/* Private */}
        <Route path="admin" element={<Protectroutes eL={<LayoutAdmin/>}/>}>
          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage />} />
          <Route path="camping" element={<Camping/>} />
        </Route>

        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Approutes;
