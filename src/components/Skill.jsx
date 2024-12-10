const Skill = ({ Icon, name }) => {
    return (
      <div className="flex items-center space-x-2 md:space-x-4 px-2">
        {/* Icon */}
        <Icon size={20} className=" dark:text-neutral-300" />
        {/* Skill Name */}
        <p className="text-lg font-light text-neutral-500 dark:text-neutral-300">
          {name}
        </p>
      </div>
    );
  };
  
  export default Skill;
