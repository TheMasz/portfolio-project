import { ISkill } from "../../types";

const SkillItem = ({ label, type }: ISkill) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="flex items-center justify-center rounded-full bg-gray-500 h-[64px] w-[64px]">
        <img
          width={32}
          height={32}
          className="rounded-full bg-gray-500"
          src={`assets/images/${
            type === "language"
              ? "language.png"
              : type === "framework" || type === "library"
              ? "layer.png"
              : type === "database"
              ? "database.png"
              : ""
          }`}
          alt={label}
          loading="lazy"
        />
      </div>
      <h6 className="text-light-1 small-semibold">{label}</h6>
    </div>
  );
};

export default SkillItem;
