import Image from "next/image";
import { FC } from "react";

type Props = {};

const Logo: FC<Props> = ({}) => {
  return <Image height={130} width={130} alt="Logo" src="/logo.svg" />;
};
export default Logo;
