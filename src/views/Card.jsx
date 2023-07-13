import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/fontawesome-svg-core";
import {
  faUserEdit
} from "@fortawesome/free-solid-svg-icons";
import {useStateContext} from "../context/ContextProvider"
function Card(props) {
  const {users} = useStateContext()
    return (
      <div className="grid grid-cols-2 gap-2 ">
        {users.map((user, index) =>    
        <div className="p-2 rounded-md shadow-md bg-zinc-200" key={index}>
          <div className="flex justify-between items-center">
              <div className="text-zinc-900 font-bold">{user.firstname}{" "}{user.secondname}</div>
            <div>editUser</div>
          </div>
          <div className="relative mt-10 flex justify-center">
            <div className="flex justify-center items-center bg-white w-[90px] h-[90px] rounded-[45px] shadow-md">
              <img
                src={require("../images/CAP5.jpg")}
                alt="profileImage"
                className="w-20 h-20 rounded-[40px] object-cover "
              />
            </div>
          </div>
          <div className="flex flex-col items-start gap-2 mt-5">
            <div className="text-zinc-900  font-bold">
              {user.email}
            </div>
            <div className="text-zinc-900  font-bold">{user.gender}</div>
              <div className="text-zinc-900  font-bold">{ "born on "}{user.dob}</div>
              <div className="text-zinc-900  font-bold">{"i am "}{ user.status}</div>
            <div className="text-zinc-900  font-bold">i have motorBike</div>
          </div>
        </div>)}
    
      </div>
    );
}

export default Card;