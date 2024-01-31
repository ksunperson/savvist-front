import { useState } from "react";
import SideBar from "../sidebar";
import { BsThreeDots } from "react-icons/bs";

export default function HeaderSidebarToggler() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {isSidebarOpen && <SideBar onClose={toggleSidebar} />}
      <div className={`cursor-pointer fixed top-10 left-10 z-50  ${isSidebarOpen ? 'hidden ' : ''} `} onClick={toggleSidebar}>
        <BsThreeDots size={20} />
      </div>
    </div>
  );
}
