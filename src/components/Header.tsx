import { IoIosSearch } from "react-icons/io";
import {
  TbWallet,
  TbDice5,
  TbUsers,
  TbTrendingDown,
  TbTrendingUp,
} from "react-icons/tb";

const BADGE_DATA = [
  { name: "Available", icon: <TbWallet />, value: "₹1,01,00,000" },
  { name: "Chips", icon: <TbDice5 />, value: "100" },
  { name: "Client Wallet", icon: <TbUsers />, value: "1,48,000" },
  {
    name: "Exposure",
    icon: <TbTrendingDown />,
    value: "48,000",
    subValue: "2,11,900",
  },
  { name: "Balaji", icon: <TbTrendingUp />, value: "0" },
];
const Header = () => {
  return (
    <div className="flex px-2 py-2 items-center justify-between max-md:flex-col max-md:items-start max-md:gap-2">
      <div className="flex gap-4 max-md:w-full">
        <h3 className="text-primary text-base font-semibold">Create User</h3>
        <div className="rounded-full border border-glass text-secondary p-2 flex items-center gap-2 min-w-60 bg-glass/40 max-md:min-w-0 max-md:flex-1">
          <IoIosSearch height={8} width={8} />
          <input
            className="bg-transparent text-xs w-full border-none outline-none"
            placeholder="Search by user, selection, or email...."
          />
        </div>
      </div>

      <div className="flex gap-2.5 max-md:w-full max-md:overflow-x-auto max-md:pb-1">
        {BADGE_DATA.map((item) => (
          <div
            key={item.name}
            className="bg-glass/50 rounded-full text-primary-blue p-2.5 flex items-center gap-1"
          >
            <div className="text-base">{item.icon}</div>
            <p className="text-[10px]">{item.name}</p>
            <p className="text-xs">
              {item.value}{" "}
              {item.subValue && (
                <span className="text-[8px]">({item.subValue})</span>
              )}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
