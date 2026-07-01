import { IoPersonSharp } from "react-icons/io5";
import {
  TbGauge,
  TbUsers,
  TbSettings,
  TbUsersPlus,
  TbUsersGroup,
  TbReportAnalytics,
  TbFileInvoice,
  TbFileDescription,
  TbHeadset,
  TbDice,
  TbFilePencil,
  TbBuildingBank,
  TbGift,
  TbSettingsAutomation,
  TbSpeakerphone,
  TbUserSquare,
  TbLogout,
} from "react-icons/tb";

const NAV_DATA = [
  { name: "Dashboard", icon: <TbGauge /> },
  { name: "Clients", icon: <TbUsers /> },
  { name: "Operator", icon: <TbSettings /> },
  { name: "Create", icon: <TbUsersPlus /> },
  { name: "Result", icon: <TbUsersGroup /> },
  { name: "Reports", icon: <TbReportAnalytics /> },
  { name: "Statement", icon: <TbFileInvoice /> },
  { name: "History", icon: <TbFileDescription /> },
  { name: "Betting Assistant", icon: <TbHeadset /> },
  { name: "Casino Game", icon: <TbDice /> },
  { name: "All Request", icon: <TbFilePencil /> },
  { name: "Deposit Withdrawal", icon: <TbBuildingBank /> },
  { name: "Bonus Management", icon: <TbGift /> },
  { name: "Operations", icon: <TbSettingsAutomation /> },
  { name: "System Alerts", icon: <TbSpeakerphone /> },
  { name: "Accounts", icon: <TbUserSquare /> },
  { name: "Logout", icon: <TbLogout /> },
];

const SideNav = () => {
  return (
    <aside className="p-3.5 h-full">
      <div className="text-primary">
        <IoPersonSharp height={16} width={16} />
      </div>

      <div className="inline-flex flex-col gap-5 justify-center h-full text-primary">
        {NAV_DATA.map((item) => (
          <button className="text-primary text-sm" key={item.name}>
            {item.icon}
          </button>
        ))}
      </div>
    </aside>
  );
};

export default SideNav;
