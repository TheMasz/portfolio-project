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
    label: "React",
    type: "library",
  },
  {
    label: "Next",
    type: "framework",
  },
  {
    label: "Express",
    type: "library",
  },
  {
    label: "Angular",
    type: "framework",
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
      "Suggest locations around the location in your plan (5km.)",
      "Suggest Navigative.",
      "Reviews and Update Profile",
      "Admin management system",
    ],
    desc: `This project aims to provide personalized travel recommendations to users based on their preferences and interests. By utilizing cosine similarity, the system compares user profiles with destination attributes to suggest the most suitable travel destinations. The core functions include recommending travel destinations and tourist attractions based on user preferences and interests, suggesting travel plans by comparing similar user profiles to provide tailored recommendations, assisting users in creating travel itineraries with step-by-step guidance on how to reach various destinations (non-realtime navigation), and recommending travel destinations within a 5km radius of a chosen location. Additionally, the recommendation system can be improved through user reviews of tourist attractions, allowing users to rate and provide feedback on their experiences.`,
    github: "https://github.com/TheMasz/travelProject",
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
    dev: ["React Redux", "ExpressJS", "CSS", "MongoDB"],
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
      "Authentication: Users can sign up, log in, and log out.",
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
    name: "Ecommerce-StripePayment",
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
      "Authentication: Users can sign up, log in, and log out.",
      "Browse and category products",
      "Add products to a shopping cart",
      "Checkout and payment processing using Stripe",
      "Order tracking for users",
      "Admin dashboard for product and order management",
    ],
    desc: `This project is a simple e-commerce website developed for learning purposes. It allows users to browse products, add them to a shopping cart, and make purchases using the Stripe payment gateway`,
    github: "https://github.com/TheMasz/Shoping-StripePayment",
  },
  {
    id: 6,
    name: "Chat-WebSocket",
    pics: ["1.png", "2.png", "3.png", "4.png"],
    dev: ["React", "WebSocket", "ExpressJS", "TailwindCSS", "MongoDB"],
    functions: [
      "Authentication: Users can sign up, log in, and log out.",
      "Real-time: Chating and notification chat",
    ],
    desc: `This project is a real-time chat application developed for learning purposes. It allows users to engage in instant messaging with others and receive notifications for new messages in real-time. The project integrates various technologies such as React for the frontend, WebSocket for real-time communication, ExpressJS for the backend, TailwindCSS for styling, and MongoDB for data storage.`,
    github: "https://github.com/TheMasz/chat-websocket",
  },
];
