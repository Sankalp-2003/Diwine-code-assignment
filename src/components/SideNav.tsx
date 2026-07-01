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
  TbChevronRight,
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
    <aside className="relative h-full w-14 shrink-0 max-md:hidden">
      <div className="group absolute inset-y-0 left-0 w-14 hover:w-56 overflow-hidden transition-[width] duration-300 ease-in-out flex flex-col px-2 py-3.5 z-20 bg-main-background/80 backdrop-blur-sm">
        <div className="text-primary shrink-0 px-1 mb-3">
          <IoPersonSharp height={16} width={16} />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-1 overflow-y-auto hide-scrollbar">
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 delay-100 whitespace-nowrap text-[10px] text-secondary uppercase tracking-wider mb-2 px-1">
            Options
          </p>

          {NAV_DATA.map((item) => (
            <button
              key={item.name}
              className="flex items-center gap-3 w-full px-1 py-1.5 rounded-lg hover:bg-primary-blue/20 transition-colors text-primary text-sm"
            >
              <span className="shrink-0 text-base">{item.icon}</span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-150 delay-100 text-xs whitespace-nowrap">
                {item.name}
              </span>
              <TbChevronRight className="ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-150 delay-100 text-secondary" />
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
