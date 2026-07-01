import { MdLockOutline } from "react-icons/md";
import {
  TbTransferIn,
  TbTrendingUp,
  TbCalendar,
  TbPhone,
  TbPercentage,
} from "react-icons/tb";

const CLIENT_DETAILS_DATA = [
  { id: "balance", name: "Balance", icon: <TbTransferIn />, value: "2,34,000" },
  {
    id: "exposure",
    name: "Exposure",
    icon: <TbTrendingUp />,
    value: "5,34,000",
  },
  {
    id: "joined-date",
    name: "Joined Date",
    icon: <TbCalendar />,
    value: "N/A",
  },
  { id: "phone", name: "Phone", icon: <TbPhone />, value: "N/A" },
  {
    id: "sharing-ratio",
    name: "Sharing ratio",
    icon: <TbPercentage />,
    value: "100",
  },
];

const STATUS_DATA = [
  {
    name: "Status",
    value: "Active",
  },
  {
    name: "Bet Lock",
    value: "Unlocked",
  },
  {
    name: "Sports",
    value: "Unlocked",
  },
  {
    name: "Casino",
    value: "Unlocked",
  },
];

const UserDataAndStatus = () => {
  return (
    <div className="mt-5">
      <div className="grid grid-cols-2 gap-6">
        {CLIENT_DETAILS_DATA.map((item) => (
          <div className="flex gap-5" key={item.id}>
            <div className="h-7.5 w-7.5 bg-background-secondary/80 rounded-full flex items-center justify-center text-base">
              {item.icon}
            </div>
            <div className="space-y-1 border-b border-primary-blue/30 w-full pb-4">
              <p className="text-primary-blue2 font-xs">{item.name}</p>
              <p className="text-primary-blue text-sm font-medium">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5.5 bg-background-secondary2/10 rounded-lg p-2.5 grid grid-cols-2 gap-2">
        {STATUS_DATA.map((item) => (
          <div
            className="bg-background-secondary/20 rounded-lg p-4 flex items-center gap-2.5"
            key={item.name}
          >
            <div className="text-[#007200] text-base">
              <MdLockOutline />
            </div>
            <div className="space-y-1">
              <p className="text-primary-blue font-medium text-xs">
                {item.name}
              </p>
              <p className="text-primary text-[10px] bg-background-secondary/50 px-1 rounded-xl">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDataAndStatus;
