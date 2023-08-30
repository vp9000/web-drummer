import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { icons } from "./icons";

type Props = {
  type: keyof typeof icons;
  className?: string;
};

const Icon = ({ type, className }: Props) => {
  return <FontAwesomeIcon icon={icons[type]} className={className} />;
};

export default Icon;
