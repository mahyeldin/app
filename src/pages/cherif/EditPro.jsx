import Sidebarr from "../../components/cherif/SideBarr";
import TravelSearchBar from "../../components/cherif/SearchBarComp/TravelSearchBar";
import Calendar from "../../components/cherif/SearchBarComp/Calendar";
import ProfileForm from "../../components/cherif/ProfileForm";
import NavigationTabs from "../../components/cherif/NavigationTabs";
import { Outlet } from "react-router-dom";
// import { motion } from "motion/react";
import { AnimatePresence } from "framer-motion"; // Correct import
import GithubCardSkew from "../../components/cherif/hooks/github-card-skew";
import Navbar  from "../../components/navbar/navbar";

function EditPro() {
  return (
    <div className="mx-9">
     <Navbar/>
      <div className=" flex flex-row justify-between items-center p-4 ">
        <div className="pt-10 w-[250px]">
          <Sidebarr />
        </div>

        <div className=" pl-10 ml-3 right-0 w-[1000px] h-[340px]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default EditPro;
