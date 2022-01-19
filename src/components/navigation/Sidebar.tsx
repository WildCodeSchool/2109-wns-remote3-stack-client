import React, { Dispatch, SetStateAction } from 'react';
import { nav } from './NavLinks';
import Header from './sidebar/Header';
import LinkButton from './sidebar/LinkButton';
import UserAvatar from './sidebar/UserAvatar';

interface IProps {
  setIsSidebar: Dispatch<SetStateAction<boolean>>;
  isSideBar: boolean;
}

function Sidebar({ setIsSidebar, isSideBar }: IProps): JSX.Element {
  return (
    <div
      className={`w-screen z-20 lg:w-desktopSidebar h-screen bg-darkBlue lg:bg-darkGray px-5 py-8 fixed inset-0 ${
        isSideBar
          ? 'transform translate-x-0 duration-500'
          : 'transform -translate-x-full lg:translate-x-0 duration-500'
      }`}
    >
      <Header setIsSidebar={setIsSidebar} />
      <div className="h-full flex flex-col lg:justify-between lg:py-10">
        <div>
          <UserAvatar setIsSidebar={setIsSidebar} />
          <div className="w-full">
            {nav.map((item) => {
              return (
                <div key={item.name}>
                  <LinkButton item={item} setIsSidebar={setIsSidebar} />
                </div>
              );
            })}
          </div>
        </div>
        <div className="bg-purple items-center  justify-center p-2 w-full  mt-2 lg:mt-10 rounded-sm flex">
          <p className="ml-2">logout</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
