import Avatar from "../ui/Avatar";
import {
  TbTransferIn,
  TbTransferOut,
  TbListDetails,
  TbClipboardCheck,
  TbKey,
  TbPencil,
  TbSettings,
} from "react-icons/tb";

const OVERVIEW_DETAILS = [
  {
    name: "Lifetime P&L",
    value: "1,00,000",
  },
  {
    name: "Sports P&L",
    value: "2,00,000",
  },
  {
    name: "Casino P&L",
    value: "3,00,000",
  },
];

const OVERVIEW_ACTIONS = [
  { id: "deposit", name: "Deposit", icon: <TbTransferIn /> },
  { id: "withdraw", name: "Withdraw", icon: <TbTransferOut /> },
  { id: "statement", name: "Statement", icon: <TbListDetails /> },
  { id: "bet-list", name: "Bet List", icon: <TbClipboardCheck /> },
  { id: "change-password", name: "Change Password", icon: <TbKey /> },
  { id: "edit", name: "Edit", icon: <TbPencil /> },
  { id: "settings", name: "Settings", icon: <TbSettings /> },
];

const UserDetailsOverview = () => {
  return (
    <div className="relative rounded-2xl flex flex-col items-center bg-background-secondary/20 py-2">
      <div className="absolute top-4 right-4 text-active-text bg-active-bg rounded-md py-1 px-2 text-xs font-semibold">
        Active
      </div>

      <Avatar name="Casino" size="lg" />
      <p className="mt-1.5 text-base text-primary font-medium">Casino</p>
      <div className="mt-2.5 inline-flex bg-primary-blue/5 px-2 py-1 rounded-sm gap-2">
        {OVERVIEW_DETAILS.map((item, index) => (
          <div className="text-primary-blue text-sm" key={item.name}>
            {index + 1}. {item.name} ={" "}
            <span className="font-semibold">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="mt-3 flex items-center gap-3">
        {OVERVIEW_ACTIONS.map((item) => (
          <button className="text-base text-primary p-0.5 border border-primary/30 rounded-sm">
            {item.icon}
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserDetailsOverview;
