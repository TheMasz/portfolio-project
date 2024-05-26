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
<<<<<<< HEAD
    dev: ["React Redux", "ExpressJS", "CSS", "MongoDB"],
=======
    dev: ["ReactJS (redux)", "ExpressJS", "CSS", "MongoDB"],
>>>>>>> 518382631e31b7d6762498dabb7078145069b132
    functions: [
      "Authenfication system",
      "Browse and Categorize Products",
      "Seller management system",
      "Admin management system",
      "Payment system",
    ],
    desc: `This project is an advanced e-commerce website developed for learning purposes. It allows users not only to buy products but also to sell them, similar to platforms like Shopee. The project includes a comprehensive authentication system, seller management, and admin management. The checkout process uses a simulator for payment processing, such as adding a picture of mobile payment`,
    github: "https://github.com/TheMasz/Project-Ecommerce",
  },
  {
    id: 3,
    name: "Ourgram",
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
      "Authentication: Users can sign up, log in, and log out.",
      "Profile Management: Users can update their profile information and profile picture.",
      "Post Creation: Users can create new posts with images and captions.",
      "Viewing Posts: Users can view their own posts and posts from other users.",
      "Follow System: Users can follow and unfollow other users to see their posts in the feed.",
      "Likes and Comments: Users can like and comment on posts.",
      "Real-Time Notifications: Users receive notifications for likes, comments, and follows.",
      "Admin management",
    ],
    desc: `This project is a simple web application developed to mimic some basic functionalities of Instagram. It was created using the AltoRouter framework for routing.`,
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
      "User authentication",
      "Posting tweets",
      "Viewing a feed of tweets",
      "Following and unfollowing other users",
      "Liking posts",
      "User profiles",
    ],
    desc: `This project is a Twitter clone developed for learning purposes. It provides an opportunity to learn and explore various modern web technologies including NextJS, Angular, ExpressJS, and MongoDB. The project is built using TypeScript to enhance code quality and maintainability.`,
    github: "https://github.com/TheMasz/twitterClone",
  },
  {
    id: 5,
    name: "Shoping-StripePayment",
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
    ],
    dev: ["React Redux", "ExpressJS", "TailwindCSS", "MongoDB"],
    functions: [
      "User registration and login",
      "Browse and category products",
      "Add products to a shopping cart",
      "Checkout and payment processing using Stripe",
      "Order tracking for users",
      "Admin dashboard for product and order management",
    ],
    desc: `This project is a simple e-commerce website developed for learning purposes. It allows users to browse products, add them to a shopping cart, and make purchases using the Stripe payment gateway`,
    github: "https://github.com/TheMasz/Shoping-StripePayment",
  },
];
