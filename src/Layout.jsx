import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaTasks } from "react-icons/fa";
import { TbLayoutDashboard, TbSettings } from "react-icons/tb";
import { RiUserSettingsLine } from "react-icons/ri";
import { MdCreate, MdFiberNew, MdCancelPresentation } from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineUser, AiOutlineLogout } from "react-icons/ai";

const Layout = () => {
  const path = useLocation().pathname;

  const [sidebarVisible, setSidebarVisible] = useState(true);

  useEffect(() => {
    const isMobile = window.innerWidth <= 640;
    setSidebarVisible(!isMobile);
    console.log("useEffect executed with isMobile:", isMobile);
  }, []);

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
      <div className="relative">
        <button onClick={toggleSidebar} className="absolute top-4 right-4 z-10">
          <FaTasks className="text-2xl hover:text-blue-500" />
        </button>
      </div>
      <div className="flex flex-row">
        <div
          className={`${
            sidebarVisible ? "block" : "hidden"
          } relative flex flex-col h-screen bg-white max-w-[12rem] md:max-w-[16rem] p-4`}
        >
          <div className="p-2 mb-2 min-w-[8rem] md:min-w-[12rem]">
            <h5 className="block text-md md:text-2xl font-semibold text-gray-900">
              Task Manager
            </h5>
          </div>
          <nav className="flex flex-col gap-1 min-w-[8rem] md:min-w-[12rem] p-2">
            <div
              className={`flex items-center w-full p-2 rounded-sm text-start hover:bg-blue-500 hover:border-l-8 hover:border-red-500 outline-none ${
                path === "/" ? "active" : ""
              }`}
            >
              <Link to="/" className="flex flex-row items-center w-full">
                <span className="text-black text-md md:text-xl pe-2">
                  <TbLayoutDashboard />
                </span>
                <span className="text-decoration-none text-sm md:text-xl text-black ">
                  Dashboard
                </span>
              </Link>
            </div>
            <div
              className={`flex items-center w-full p-2 rounded-sm text-start hover:bg-blue-500 hover:border-l-8 hover:border-red-500 outline-none ${
                path === "/create" ? "active" : ""
              }`}
            >
              <Link to="/create" className="flex flex-row items-center w-full">
                <span className="text-black text-md md:text-xl pe-2">
                  <MdCreate />
                </span>
                <span className="text-decoration-none text-sm md:text-xl text-black ">
                  Cretae
                </span>
              </Link>
            </div>
            <div
              className={`flex items-center w-full p-2 rounded-sm text-start hover:bg-blue-500 hover:border-l-8 hover:border-red-500 outline-none ${
                path === "/new" ? "active" : ""
              }`}
            >
              <Link to="/new" className="flex flex-row items-center w-full">
                <span className="text-black text-md md:text-xl pe-2">
                  <MdFiberNew />
                </span>
                <span className="text-decoration-none text-sm md:text-xl text-black ">
                  New
                </span>
              </Link>
            </div>
            <div
              className={`flex items-center w-full p-2 rounded-sm text-start hover:bg-blue-500 hover:border-l-8 hover:border-red-500 outline-none ${
                path === "/progress" ? "active" : ""
              }`}
            >
              <Link
                to="/progress"
                className="flex flex-row items-center w-full"
              >
                <span className="text-black text-md md:text-xl pe-2">
                  <GrInProgress />
                </span>
                <span className="text-decoration-none text-sm md:text-xl text-black ">
                  Progress
                </span>
              </Link>
            </div>
            <div
              className={`flex items-center w-full p-2 rounded-sm text-start hover:bg-blue-500 hover:border-l-8 hover:border-red-500 outline-none ${
                path === "/canceled" ? "active" : ""
              }`}
            >
              <Link
                to="/canceled"
                className="flex flex-row items-center w-full"
              >
                <span className="text-black text-md md:text-xl pe-2">
                  <MdCancelPresentation />
                </span>
                <span className="text-decoration-none text-sm md:text-xl text-black ">
                  Canceled
                </span>
              </Link>
            </div>
            <div
              className={`flex items-center w-full mb-2 p-2 rounded-sm text-start hover:bg-blue-500 hover:border-l-8 hover:border-red-500 outline-none ${
                path === "/completed" ? "active" : ""
              }`}
            >
              <Link
                to="/completed"
                className="flex flex-row items-center w-full"
              >
                <span className="text-black text-md md:text-xl pe-2">
                  <BsCheckCircle />
                </span>
                <span className="text-decoration-none text-sm md:text-xl text-black ">
                  Completed
                </span>
              </Link>
            </div>
            <div className="border-b"></div>
            <div
              className={`flex items-center w-full p-2 mt-2 rounded-sm text-start hover:bg-blue-500 hover:border-l-8 hover:border-red-500 outline-none ${
                path === "/profile" ? "active" : ""
              }`}
            >
              <Link to="/profile" className="flex flex-row items-center w-full">
                <span className="text-black text-md md:text-xl pe-2">
                  <AiOutlineUser />
                </span>
                <span className="text-decoration-none text-sm md:text-xl text-black ">
                  Profile
                </span>
              </Link>
            </div>
            <div
              className={`flex items-center w-full p-2 rounded-sm text-start hover:bg-blue-500 hover:border-l-8 hover:border-red-500 outline-none ${
                path === "/edit-profile" ? "active" : ""
              }`}
            >
              <Link
                to="/edit-profile"
                className="flex flex-row items-center w-full"
              >
                <span className="text-black text-md md:text-xl pe-2">
                  <RiUserSettingsLine />
                </span>
                <span className="text-decoration-none text-sm md:text-xl text-black ">
                  Edit Profile
                </span>
              </Link>
            </div>
            <div
              className={`flex items-center w-full p-2 rounded-sm text-start hover:bg-blue-500 hover:border-l-8 hover:border-red-500 outline-none ${
                path === "/logout" ? "active" : ""
              }`}
            >
              <Link to="/logout" className="flex flex-row items-center w-full">
                <span className="text-black text-md md:text-xl pe-2">
                  <AiOutlineLogout />
                </span>
                <span className="text-decoration-none text-sm md:text-xl text-black ">
                  Logout
                </span>
              </Link>
            </div>
          </nav>
        </div>
        <div className="p-4 mt-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
