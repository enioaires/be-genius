"use client";
import { FC } from "react";
import { Compass, Layout } from "lucide-react";
import SidebarItem from "./sidebar-item";

type Props = {};

const guestRoutes = [
  {
    icon: Layout,
    label: "Inicio",
    href: "/",
  },
  {
    icon: Compass,
    label: "Explorar",
    href: "/search",
  },
];

const SidebarRoutes: FC<Props> = ({}) => {
  const routes = guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  );
};
export default SidebarRoutes;
