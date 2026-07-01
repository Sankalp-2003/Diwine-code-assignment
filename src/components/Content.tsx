import ClientsAndGroupsList from "./ClientsAndGroupsList";
import UserDetails from "./userDetails/UserDetails";
import UsersList from "./UsersList";

const Content = () => {
  return (
    <div className="grow min-h-0 p-3.5 max-md:grow-0">
      <div className="border border-glass rounded-2xl py-5 px-2.5 h-full bg-glass/20 flex gap-16 hide-scrollbar max-md:flex-col max-md:h-auto max-md:gap-6 max-md:overflow-y-visible">
        <div className="flex-1 flex gap-6 max-md:flex-none">
          <ClientsAndGroupsList />
          <UsersList />
        </div>
        <UserDetails />
      </div>
    </div>
  );
};

export default Content;
