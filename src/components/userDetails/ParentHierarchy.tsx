import { TbUserShield, TbUserCog } from "react-icons/tb";
import { VscTypeHierarchy } from "react-icons/vsc";
import TitleContainer from "./TitleContainer";

const PARENT_HIERARCHY_DATA = [
  {
    id: "admin",
    name: "Balaji",
    role: "Admin",
    icon: <TbUserShield />,
    sharingRatio: 0,
  },
  {
    id: "dl",
    name: "testdl",
    role: "DL",
    icon: <TbUserCog />,
    sharingRatio: 15,
  },
  {
    id: "super",
    name: "testsuper",
    role: "SUPER",
    icon: <TbUserCog />,
    sharingRatio: 20,
  },
  {
    id: "master",
    name: "testmaster",
    role: "MASTER",
    icon: <TbUserCog />,
    sharingRatio: 30,
  },
];

const ParentHierarchy = () => {
  return (
    <div className="mt-5.5">
      <TitleContainer icon={<VscTypeHierarchy />} title="Parent Hierarchy" />

      <div className="mt-5.5 bg-background-secondary2/10 rounded-lg p-2.5 grid grid-cols-2 gap-2 max-md:grid-cols-1">
        {PARENT_HIERARCHY_DATA.map((item) => (
          <div
            className="bg-background-secondary/20 rounded-lg p-4 flex items-center justify-between"
            key={item.name}
          >
            <div className="flex items-center gap-2.5">
              <div className="h-7 w-7 bg-glass rounded-md flex items-center justify-center text-sm text-primary">
                {item.icon}
              </div>
              <div className="space-y-1">
                <p className="text-primary-blue font-medium text-xs">
                  {item.name}
                </p>
                <p className="text-primary text-[10px] bg-background-secondary/50 px-1 rounded-xl">
                  {item.role}
                </p>
              </div>
            </div>

            <div className="text-primary-blue text-xs">
              {" "}
              SR:{" "}
              <span className="text-sm font-semibold">
                {item.sharingRatio}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParentHierarchy;
