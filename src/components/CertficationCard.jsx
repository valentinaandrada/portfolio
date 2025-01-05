const CertificationCard = ({ year, title, institution, currentLanguage }) => {
  return (
    <div className="leading-6 md:leading-7 tracking-tight md:flex gap-4 mb-8">
      <p className="p mb-2 min-w-[100px]">{year[currentLanguage]}</p>
      <div className="pl-4 border-l border-neutral-500 dark:border-neutral-300 ">
        <p className="text-secondary dark:text-darkSecondary">
          {title[currentLanguage]}
        </p>
        <p className="p">{institution[currentLanguage]}</p>
      </div>
    </div>
  );
};

export default CertificationCard;
