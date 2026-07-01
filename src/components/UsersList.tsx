import { BiSortAZ } from "react-icons/bi";
import Avatar from "./ui/Avatar";
import { MdLockOutline } from "react-icons/md";

const USER_LIST_DATA = [
  { name: "Casino", value: "34,000" },
  { name: "Cricket", value: "12,45,000" },
  { name: "Football", value: "8,90,500" },
  { name: "Tennis", value: "2,15,000" },
  { name: "Live Casino", value: "56,000" },
  { name: "Teen Patti", value: "1,20,000" },
  { name: "Andar Bahar", value: "78,500" },
  { name: "Poker", value: "3,40,000" },
  { name: "Roulette", value: "45,000" },
  { name: "Blackjack", value: "1,02,000" },
  { name: "Baccarat", value: "67,000" },
  { name: "Dragon Tiger", value: "29,000" },
  { name: "Slots", value: "15,000" },
  { name: "Horse Racing", value: "5,60,000" },
  { name: "Kabaddi", value: "3,10,000" },
  { name: "Basketball", value: "95,000" },
  { name: "Volleyball", value: "22,000" },
  { name: "Badminton", value: "18,500" },
  { name: "Greyhound Racing", value: "41,000" },
  { name: "Virtual Sports", value: "33,000" },
];

const UsersList = () => {
  return (
    <div className="flex-1">
      <div className="flex items-center justify-between">
        <p className="text-primary text-sm">User List</p>
        <BiSortAZ className="text-primary" height={16} width={16} />
      </div>

      <div className="mt-2 space-y-1 max-h-90 md:max-h-full overflow-y-auto hide-scrollbar">
        {USER_LIST_DATA.map((item) => (
          <button className="flex items-center justify-between w-full hover:bg-primary-blue/20 rounded-xl p-3">
            <div className="flex items-center gap-2.5">
              <Avatar name={item.name} size="sm" />
              <div className="space-y-2">
                <p className="text-xs text-primary">{item.name}</p>
                <p className="text-[10px] text-primary-blue2">{item.value}</p>
              </div>
            </div>

            <div className="text-base text-active-text">
              <MdLockOutline />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
