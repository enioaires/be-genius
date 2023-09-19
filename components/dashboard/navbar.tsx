import { FC } from "react";
import MobileSidebar from "./mobile-sidebar";
import NavbarRoutes from "../navbar-routes";

type Props = {};

const Navbar: FC<Props> = ({}) => {
  return (
    <div className="p-4 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};
export default Navbar;
