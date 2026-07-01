import { CiStar } from "react-icons/ci";
import { RiTeamLine } from "react-icons/ri";
import { BsFolder, BsPersonAdd } from "react-icons/bs";
import { IoPersonCircleOutline } from "react-icons/io5";

const CLIENTS_DATA = [
  {
    name: "DL",
    icon: <IoPersonCircleOutline />,
  },
  {
    name: "Super",
    icon: <RiTeamLine />,
  },
  {
    name: "Master",
    icon: <CiStar />,
  },
  {
    name: "Users",
    icon: <RiTeamLine />,
  },
  {
    name: "TeamMates",
    icon: <BsPersonAdd />,
  },
];

const GROUPS_DATA = [
  {
    name: "Blocked users",
    color: "text-[#00BC7C]",
  },
  {
    name: "Fraud users",
    color: "text-[#FF9900]",
  },
  {
    name: "⁠⁠Two days retention",
    color: "text-[#1084FE]",
  },
  {
    name: "One month retention",
    color: "text-[#FF2B3A]",
  },
  {
    name: "New registration",
    color: "text-[#EC34F7]",
  },
];

const BasicButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="flex items-center gap-1 text-primary-blue text-xs py-1.5 px-2 hover:bg-primary-blue/20 w-full">
      {children}
    </button>
  );
};
const ClientsAndGroupsList = () => {
  return (
    <div className="flex-1">
      <p className="text-primary-blue2 text-xs">Clients</p>
      <div className="mt-1.5 space-y-px">
        {CLIENTS_DATA.map((item) => (
          <BasicButton key={item.name}>
            <div className="text-base">{item.icon}</div> {item.name}
          </BasicButton>
        ))}
      </div>

      <p className="text-primary-blue2 text-xs mt-8">Groups</p>
      <div className="mt-1.5 space-y-px">
        {GROUPS_DATA.map((item) => (
          <BasicButton key={item.name}>
            <div className={item.color}>
              <BsFolder />
            </div>{" "}
            {item.name}
          </BasicButton>
        ))}
      </div>
    </div>
  );
};

export default ClientsAndGroupsList;
