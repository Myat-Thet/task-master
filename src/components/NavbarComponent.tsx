import {  BiTask } from "react-icons/bi";
import { MdAddTask } from "react-icons/md";
import { Link } from "react-router-dom";
export default function NavbarComponent() {
  return (
    <>
      <div className="navbar bg-base-100 justify-between shadow-sm">
        <div className="flex justify-center items-center">
          <span>
           <Link to="/home"> <BiTask size={30} /></Link>
          </span>
          <div className="flex w-auto bg-gray-300 rounded-full hover:bg-green-300">
            <span className="bg-green-300 rounded-full p-2 font-bold  hover:bg-gray-300">Todo</span>
            <span className="p-2 font-bold">Task</span>

          </div>
        </div>
       
         <div className="flex items-center justify-center">
            <Link to="/new-task"> <div className="mr-5 bg-gray-300 hover:bg-green-200 rounded p-3">
                <MdAddTask size={30}/>
            </div></Link>
          <div className="dropdown dropdown-end">
            
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
         </div>
        </div>

    </>
  );
}
