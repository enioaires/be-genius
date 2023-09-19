import { UserButton } from "@clerk/nextjs";
import { FC } from "react";

type Props = {};

const NavbarRoutes: FC<Props> = ({}) => {
  return (
    <div className="flex gap-x-2 ml-auto">
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};
export default NavbarRoutes;
