import { useEffect, useState } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { CiCircleCheck } from "react-icons/ci";
import { FiRefreshCcw } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { IoIosSearch, IoMdRefresh } from "react-icons/io";
import { TbHistory, TbCircleCheck, TbFileCheck } from "react-icons/tb";

const THEME_STORAGE_KEY = "theme";

const STATUS_BADGE_DATA = [
  { id: "bet-pending", name: "Pending", icon: <TbHistory />, value: 0 },
  { id: "declare", name: "Declare", icon: <TbCircleCheck />, value: 0 },
  {
    id: "declaration-pending",
    name: "Pending",
    icon: <TbFileCheck />,
    value: 0,
  },
];

const ACTION_BUTTONS = [
  { id: "search", icon: <IoIosSearch /> },
  { id: "notification", icon: <GoBell /> },
  { id: "checked", icon: <CiCircleCheck /> },
];

const BasicButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="text-primary-blue border border-glass px-4 py-2.5 text-base rounded-full">
      {children}
    </button>
  );
};

const SideNavRight = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem(THEME_STORAGE_KEY) === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    const nextIsDarkMode = !isDarkMode;
    localStorage.setItem(THEME_STORAGE_KEY, nextIsDarkMode ? "dark" : "light");
    setIsDarkMode(nextIsDarkMode);
  };

  return (
    <aside className="p-4 py-2 pl-0 h-full flex flex-col items-center">
      <BasicButton>
        <IoMdRefresh />
      </BasicButton>

      <div className="space-y-2.5 mt-6">
        {STATUS_BADGE_DATA.map((item) => (
          <div
            key={item.id}
            className="bg-glass/50 rounded-full text-primary-blue p-2.5 flex flex-col items-center gap-0.5"
          >
            <div className="text-sm">{item.icon}</div>
            <p className="text-[8px] font-medium uppercase">{item.name}</p>
            <p className="text-xs font-medium">{item.value}</p>
          </div>
        ))}

        <BasicButton>
          <FiRefreshCcw />
        </BasicButton>
      </div>

      <div className="mt-6 space-y-6">
        <div className="h-4 w-4 rounded-full overflow-hidden">
          <img
            src="/common/tricolor.png"
            alt="Flag Icon"
            className="h-full w-full object-cover"
          />
        </div>

        {ACTION_BUTTONS.map((item) => (
          <button key={item.id} className="text-base text-primary-blue block">
            {item.icon}
          </button>
        ))}

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          aria-pressed={isDarkMode}
          className="text-base text-primary-blue block"
        >
          {isDarkMode ? <BsSun /> : <BsMoonStars />}
        </button>
      </div>
    </aside>
  );
};

export default SideNavRight;
