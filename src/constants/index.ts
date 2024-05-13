export const navbarLinks = [
  {
    route: "/portfolio-project/",
    label: "Home",
  },
  {
    route: "/portfolio-project/portfolio",
    label: "Portfolio",
  },
];

export const skills = [
  {
    label: "HTML",
    type: "language",
  },
  {
    label: "CSS",
    type: "language",
  },
  {
    label: "JS",
    type: "language",
  },
  {
    label: "TS",
    type: "language",
  },
  {
    label: "PHP",
    type: "language",
  },
  {
    label: "ReactJS",
    type: "library",
  },
  {
    label: "NextJS",
    type: "framework",
  },
  {
    label: "Angular",
    type: "framework",
  },
  {
    label: "NodeJS",
    type: "library",
  },
  {
    label: "Laravel",
    type: "framework",
  },
  {
    label: "TailwindCSS",
    type: "library",
  },
  {
    label: "MongoDB",
    type: "database",
  },
  {
    label: "Firebase",
    type: "database",
  },
  {
    label: "MySQL",
    type: "database",
  },
];

export const portfolios = [
  {
    id: 1,
    name: "Recomandation System for Travelists Website",
    pics: [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
      "9.png",
      "10.png",
      "11.png",
      "12.png",
      "13.png",
      "14.png",
      "15.png",
      "16.png",
      "17.png",
    ],
    dev: ["Laravel", "CSS", "Javascript", "Mysql"],
    functions: [
      "Authenfication system",
      "Recommended travelist locations and plans",
      "Suggest locations around the location in your plan",
      "Reviews and Update Profile",
      "Admin management system",
      "Responsive support",
    ],
    desc: `This project is about recommending tourist attractions based on personal preferences. The system is divided into two parts.
    1. The system can recommend tourist attractions based on personal preferences.
    2. The system can recommend travel plans for people with similar preferences.
    Using the theory of cosine similarity to find similarities. And the user can plan a trip, and the system can recommend routes and places within a radius of 5 kilometers. To improve the recommendation of tourist attractions, a weight profile will be used based on reviews and ratings per place. If users give a high rating, it may mean that they like this type of place.`,
    github: "https://github.com/TheMasz/ourgram",
  },
  {
    id: 2,
    name: "E-Commerce Website",
    pics: [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
      "9.png",
      "10.png",
      "11.png",
      "12.png",
      "13.png",
      "14.png",
      "15.png",
      "16.png",
      "17.png",
      "18.png",
      "19.png",
    ],
    dev: ["ReactJS (redux)", "ExpressJS", "CSS", "MongoDB"],
    functions: [
      "Authenfication system",
      "Seller management system",
      "Admin management system",
      "Payment system",
      "Responsive support",
    ],
    desc: `This project is about e-commerce. It is like cloning the e-commerce of famous brands. The system is divided into three parts.
    1. Buyer 2. Seller 3. Administrator There is a seller management system. Product management, shipping, etc.
    Administrator management system There is a system for viewing product balances. Manage product orders. User management Product management, etc.`,
    github: "https://github.com/TheMasz/Project-Ecommerce",
  },
  {
    id: 3,
    name: "Social Media Website",
    pics: [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
    ],
    dev: ["altorouter php", "Javascript", "CSS", "MySql"],
    functions: [
      "Authenfication system",
      "User Post,Like,comment Actions",
      "Admin management system",
      "Responsive support",
    ],
    desc: `This project is about social media. It is like cloning the social media of famous brands. The system is divided into two parts.
    1. User 2. Administrator, where users can post pictures and captions and like and follow other users. Edit personal information Administrators can manage users, manage posts, etc.`,
    github: "https://github.com/TheMasz/ourgram",
  },
  {
    id: 4,
    name: "Twitter Clone",
    pics: [
      "1.png",
      "2.png",
      "3.png",
      "4.png",
      "5.png",
      "6.png",
      "7.png",
      "8.png",
    ],
    dev: ["AngularJS", "NextJS", "ExpressJS", "TailwindCSS", "MongoDB"],
    functions: [
      "Authenfication system",
      "User Post, Like, Comment, Save Post, Delete Post, Follow, Edit Profile Actions",
    ],
    desc: `This project make for learning about Angular and NextJS like a Twitter clone`,
    github: "https://github.com/TheMasz/twitterClone",
  },
];
