const TitleContainer = ({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) => {
  return (
    <div className="flex items-center gap-5 border-b border-primary-blue/30 pb-4">
      <div className="h-7 w-7 bg-background-secondary/80 rounded-md flex items-center justify-center text-sm text-primary">
        {icon}
      </div>
      <p className="text-primary text-sm font-semibold">{title}</p>
    </div>
  );
};

export default TitleContainer;
