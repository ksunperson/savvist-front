
import { useState } from "react";
import SideBar from "../sidebar";
import { TbMenu2 } from "react-icons/tb";

export default function HeaderSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="relative">
      {isSidebarOpen && <SideBar onClose={toggleSidebar} />}
      <div className={`cursor-pointer fixed top-10 left-10 z-50 ${isSidebarOpen ? 'hidden' : ''}`} onClick={toggleSidebar}>
        <TbMenu2 size={30} />
      </div>
    </div>
  );
}
