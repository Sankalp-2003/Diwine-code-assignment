import {
  TbTransferIn,
  TbSquareRoundedPlus,
  TbDownload,
  TbRefresh,
} from "react-icons/tb";
import UserDetailsOverview from "./UserDetailsOverview";
import UserDataAndStatus from "./UserDataAndStatus";
import ParentHierarchy from "./ParentHierarchy";
import TransactionHistory from "./TransactionHistory";

const ACTION_BAR_DATA = [
  { id: "deposit", name: "Deposit", icon: <TbTransferIn /> },
  { id: "create-user", name: "Create New User", icon: <TbSquareRoundedPlus /> },
  { id: "download-csv", name: "Download CSV", icon: <TbDownload /> },
  { id: "refresh-data", name: "Refresh Data", icon: <TbRefresh /> },
];

const UserDetails = () => {
  return (
    <div className="flex-1 h-full flex flex-col min-h-0">
      <div className="flex items-center justify-end gap-4 shrink-0">
        {ACTION_BAR_DATA.map((item) => (
          <button
            key={item.id}
            className="text-primary flex items-center gap-1"
          >
            <div className="text-base">{item.icon}</div>
            <p className="text-xs">{item.name}</p>
          </button>
        ))}
      </div>

      <div className="bg-white/40 mt-5.5 p-4 flex-1 min-h-0 overflow-y-auto hide-scrollbar">
        <UserDetailsOverview />
        <UserDataAndStatus />
        <ParentHierarchy />
        <TransactionHistory />
      </div>
    </div>
  );
};

export default UserDetails;
