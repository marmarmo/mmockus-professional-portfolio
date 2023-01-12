import eCommerce from "./Projects/e-commerce.png";
import gopher from "./Projects/gopher-a-friend.png";
import mvc from "./Projects/mvc.png";
import rainbow from "./Projects/rainbowchaser.png";
import pwa from "./Projects/pwa.png";
import socialNetwork from "./Projects/socialNetwork.png";

export const projects = [
  {
    index: 0,
    imagePath: gopher,
    alt: "A social website for children to chat in groups about specific blog topics.",
    title: "Gopher A Friend",
    description:
      " Gopher a Friend is a place for kids to discuss their interests with other kids that share those interests. An 8 year old kid who is obsessed with Uzbekistan is unlikely to find another kid that even knows that the country exists let alone wants to talk about it. Gopher a Friend is the place where that kid can find the 10 other kids spread across the country who are also enthralled with Uzbekistan and can talk about it and learn from each other.",
      gitHub: "https://github.com/MMockus15/Gopher-a-Friend",
      appLink: "https://gopher-a-friend.herokuapp.com/profile"
  },
  {
    index: 1,
    imagePath: rainbow,
    alt: "An app to pin and locate rainbows in your area.",
    title: "Rainbow Chasers",
    description:
      "A tracker app made fun! Keep track of rainbows in your area, while finding and pinning them to a map with a custom playlist. For this App we used Mapbox API and Genius API. The user is able to click their location on a map anywhere in the world they are currently viewing a rainbow. The app allows you to track your cordinates and drop a pin when you are viewing a rainbow. It then generates a random Rainbow Kitten Surprise song for you to play as a rainbow spotting prize!",
      gitHub: "https://github.com/MMockus15/Project1-T5-Rainbow-Chaser",
      appLink: "https://seanmgrant.github.io/Project1-T5-Rainbow-Chaser/"
  },
  {
    index: 2,
    imagePath: eCommerce,
    alt: "A backend server for an e-commerce business site.",
    title: "e-Commerce Back End",
    description:
      "This is a backend server database for an eCommerce business website. The database has relational tables that have information on products, categories, and tags. Routes are provided to get, post, put, and delete information on each table. To create this backend erver we used a MySQL database using the MySQL2 and Sequelize packages. I used Insomnia to continually test routes and make sure the backend was working properly.",
      gitHub: "https://github.com/MMockus15/e-commerce-back-end",
      appLink: "https://drive.google.com/file/d/1Tq9l2ldDkEYN0rIxqYiBfxuYVAbKrrpN/view"
  },
  {
    index: 3,
    imagePath: mvc,
    alt: "An app where developer can add their own and comment on others blog posts.",
    title: "MVC Tech Blog",
    description:
      " This project uses the Model-View-Controller (MVC) structure to build a website similar to Wordpress. This is a place where developers can publish blog posts, as well as comment on other blog posts. To begin a User signs up for an account. They are able to then login, go to their dashboard to view all of their blog posts, comment on others blog posts, edit their posts, and delete their posts. This was created with multiple node packages including, espress-handlebars, MySQL2, Sequalize, dotenv, bcrypt, espress-session, and connect-session-sequalize.",
      gitHub: "https://github.com/MMockus15/mvc-tech-blog",
      appLink: "https://pure-crag-52361.herokuapp.com/"
  },
  {
    index: 3,
    imagePath: socialNetwork,
    alt: "Back end social network API.",
    title: "Social Network API",
    description:
      "This is a back end API using MongoDB database and Express.js server. It can track users, similar to a social media app. It tracks users thoughts, and reactions to those thoughts. It also tracks friends lists.",
      gitHub: "https://github.com/MMockus15/social-network-api",
      appLink: "https://drive.google.com/file/d/1bTlUyNRI7DbaCgjC_vKWJ8nnTyvzpeyz/view"
  },
  {
    index: 4,
    imagePath: pwa,
    alt: "A progressive web application.",
    title: "Progressive Web Application",
    description:
      "This app is a progressive web appication designed so a user can enter data in an online or offline setting. It will store text data in the cached file in order to save pre existing data when the user is no longer logged on. The user is also able to edit and delete that saved data. PWA's are used in order to provide better usability while the user is both on and offline.",
      gitHub: "https://github.com/MMockus15/progressive-web-application",
      appLink: "https://calm-cliffs-86145.herokuapp.com/"
  },
];

export default projects;
