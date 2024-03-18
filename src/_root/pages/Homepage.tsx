import { useState, useEffect } from "react";
import Typed from "../../components/shared/Typed";
import { skills } from "../../constants";
import SkillItem from "../../components/shared/SkillItem";
import { ISkill } from "../../types";
import Loader from "../../components/shared/Loader";

const Homepage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const groupedSkills: { [key: string]: ISkill[] } = {};
  skills.forEach((skill: ISkill) => {
    const groupType = skill.type === "library" ? "framework" : skill.type;
    if (!groupedSkills[groupType]) {
      groupedSkills[groupType] = [];
    }
    groupedSkills[groupType].push(skill);
  });
  return loading ? (
    <Loader />
  ) : (
    <>
      <article className="mb-10 md:mb-2 lg:pt-14">
        <h2 className="text-light-1 h2-bold md:h1-bold text-left">
          <Typed text="Hello I'm <br/>Tanawan Wongsawadee" speed={300}  />
        </h2>
        <p className="text-light-3 small-regular md:base-regular">
          web development who focuses on writing clean, elegant and efficient
          code
        </p>
      </article>
      <div className="flex-1 w-full gap-10 z-20 md:flex md:w-full lg:w-4/5">
        <div className="flex flex-col w-full md:w-1/3 lg:2/6">
          <div className="mb-2">
            <h3 className="h4-bold md:h3-bold text-light-1">Contact</h3>
            <div className="p-2 secondary-bg rounded-md">
              <div className="flex mb-1">
                <svg
                  className="w-6 h-6 mr-2 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 6h-2V5h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2h-.5a6 6 0 0 1 1.5 4v4a1 1 0 1 1-2 0v-4a4 4 0 0 0-4-4h-.5C5 6 3 8 3 10.5V16c0 .6.4 1 1 1h7v3c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-3h5c.6 0 1-.4 1-1v-6a4 4 0 0 0-4-4Zm-9 8.5H7a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Z" />
                </svg>
                <p className="text-light-3 small-regular md:base-regular">
                  t.tanawan.w@gmail.com
                </p>
              </div>
              <div className="flex mb-1">
                <svg
                  className="w-6 h-6 mr-2 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 4a2.6 2.6 0 0 0-2 .9 6.2 6.2 0 0 0-1.8 6 12 12 0 0 0 3.4 5.5 12 12 0 0 0 5.6 3.4 6.2 6.2 0 0 0 6.6-2.7 2.6 2.6 0 0 0-.7-3L18 12.9a2.7 2.7 0 0 0-3.8 0l-.6.6a.8.8 0 0 1-1.1 0l-1.9-1.8a.8.8 0 0 1 0-1.2l.6-.6a2.7 2.7 0 0 0 0-3.8L10 4.9A2.6 2.6 0 0 0 8 4Z" />
                </svg>
                <p className="text-light-3 small-regular md:base-regular">
                  +66 991741280
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="h4-bold md:h3-bold text-light-1">Education</h3>
            <div className="p-2 secondary-bg rounded-md">
              <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-2 ms-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white bg-white" />
                  <time className=" text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    2016-2019
                  </time>
                  <h6 className="text-gray-900 dark:text-white leading-none">
                    Vocational Certificate
                  </h6>
                  <p className="tiny-medium md:small-regular text-gray-500 dark:text-gray-400">
                    Computer Technology at Surin Technical College
                  </p>
                </li>
                <li className="mb-2 ms-4">
                  <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-white bg-white" />
                  <time className=" text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    2019-2021
                  </time>
                  <h6 className="text-gray-900 dark:text-white leading-none">
                    High Vocational Certificate
                  </h6>
                  <p className="tiny-medium md:small-regular text-gray-500 dark:text-gray-400">
                    Computer Technology at Surin Technical College
                  </p>
                </li>
                <li className="mb-2 ms-4">
                  <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-white bg-white" />
                  <time className=" text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    2021-2024
                  </time>
                  <h6 className=" text-gray-900 dark:text-white leading-none">
                    Bachelor Degrees
                  </h6>
                  <p className="tiny-medium md:small-regular text-gray-500 dark:text-gray-400 ">
                    Computer Engineering at Rajamangala University Of Technology
                    isan
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:w-2/3 lg:w-4/6">
          <h3 className="h4-bold md:h3-bold text-light-1">Skills</h3>
          <div className="p-2 secondary-bg rounded-tl-md rounded-bl-md rounded-tr-[50px] rounded-br-md flex-1 overflow-auto  gap-10">
            {Object.keys(groupedSkills).map((type: string) => (
              <div
                key={type}
                className={`${type} flex flex-wrap flex-1 gap-2 my-2`}
              >
                {groupedSkills[type].map((skill, index) => (
                  <SkillItem
                    key={index}
                    label={skill.label}
                    type={skill.type}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <img
        className="hidden-image absolute bottom-0 right-0 z-10 w-[635px] h-[525px] "
        src="assets/images/clip.svg"
        alt="clip"
        loading="lazy"
      />
    </>
  );
};

export default Homepage;
