import { useState, useEffect } from "react";
import Typed from "../../components/shared/Typed";
import { skills } from "../../constants";
import SkillItem from "../../components/shared/SkillItem";
import { ISkill } from "../../types";
import Loader from "../../components/shared/Loader";
import { Link } from "react-router-dom";

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
      <article className="mb-10 md:mb-2 lg:pt-14 lg:mb-4">
        <h2 className="text-light-1 h2-bold md:h1-bold text-left lg:mb-4">
          <Typed text="Hello I'm <br/>Tanawan Wongsawadee" speed={300} />
        </h2>
        <p className="text-light-3 small-regular md:base-regular">
          web development who focuses on writing clean, elegant and efficient
          code
        </p>
      </article>
      <div className="flex-1 w-full gap-10 z-20 md:flex md:w-full lg:w-4/5">
        <div className="flex flex-col w-full md:w-1/3 lg:2/6">
          <div className="mb-2 md:mb-4">
            <h3 className="h4-bold md:h3-bold text-light-1">Contact</h3>
            <div className="p-2 secondary-bg rounded-md">
              <div className="flex mb-1">
                <svg
                  className="w-6 h-6 mr-2 text-white"
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
                  className="w-6 h-6 mr-2 text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                    clipRule="evenodd"
                  />
                </svg>

                <Link
                  to={"https://github.com/TheMasz"}
                  target="_blank"
                  className="text-light-3 small-regular md:base-regular"
                >
                  https://github.com/TheMasz
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h3 className="h4-bold md:h3-bold text-light-1">Education</h3>
            <div className="p-2 secondary-bg rounded-md">
              <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-2 ms-4">
                  <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-white bg-white" />
                  <time className=" text-sm font-normal leading-none text-gray-400">
                    2021-Present
                  </time>
                  <h6 className=" text-white leading-none">Bachelor Degrees</h6>
                  <p className="tiny-medium md:small-regular text-gray-400 ">
                    Computer Engineering at Rajamangala University Of Technology
                    isan
                  </p>
                </li>
                <li className="mb-2 ms-4">
                  <div className="absolute w-3 h-3  rounded-full mt-1.5 -start-1.5 border border-white bg-white" />
                  <time className=" text-sm font-normal leading-none text-gray-400">
                    2019-2020
                  </time>
                  <h6 className="text-white leading-none">
                    High Vocational Certificate
                  </h6>
                  <p className="tiny-medium md:small-regular text-gray-400">
                    Computer Technology at Surin Technical College
                  </p>
                </li>
                <li className="mb-2 ms-4">
                  <div className="absolute w-3 h-3 rounded-full mt-1.5 -start-1.5 border border-white bg-white" />
                  <time className=" text-sm font-normal leading-none text-gray-400">
                    2016-2018
                  </time>
                  <h6 className="text-white leading-none">
                    Vocational Certificate
                  </h6>
                  <p className="tiny-medium md:small-regular text-gray-400 ">
                    Computer Technology at Surin Technical College
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
