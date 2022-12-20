import eCommerce from "./public/images/Portfolio/e-commerce.png";
import gopherAFriend from "./images/Portfolio/gopher-a-friend.png";
import mvc from "./images/Portfolio/mvc.png";
import rainbowChaser from "./images/Portfolio/rainbowchaser.png";

const projects = [
	{
	index: 0,
	imagePath: gopherAFriend,
	alt: "A social media app where kids can connect over comment interests within different blog topics.",
	title: "Gopher A Friend",
	description: "Gopher a Friend is a place for kids to discuss their interests with other kids that share those interests. An 8 year old kid who is obsessed with Uzbekistan is unlikely to find another kid that even knows that the country exists let alone wants to talk about it. Gopher a Friend is the place where that kid can find the 10 other kids spread across the country who are also enthralled with Uzbekistan and can talk about it and learn from each other.",
	appLink: "https://gopher-a-friend.herokuapp.com/login",
	gitHub: "https://github.com/madisenvo/Gopher-a-Friend",
	},
	{
	index: 1,
	imagePath: rainbowChaser,
	alt: "A tracker app made for pinning and locating rainbow sightings",
	title: "Rainbow Chaser",
	description: "A tracker app made fun! Keep track of rainbows in your area, while finding and pinning them to a map with a custom playlist. For this App we used Mapbox API and Genius API. The user is able to click their location on a map anywhere in the world they are currently viewing a rainbow. The app allows you to track your cordinates and drop a pin when you are viewing a rainbow. It then generates a random Rainbow Kitten Surprise song for you to play as a rainbow spotting prize!",
	appLink: "https://seanmgrant.github.io/Project1-T5-Rainbow-Chaser/",
	gitHub: "https://github.com/seanmgrant/Project1-T5-Rainbow-Chaser",
	},
	{
	index: 2,
	imagePath: eCommerce,
	alt: "A backend server database for an eCommerce business website.",
	title: "E Commerce Backend",
	description: " This is a backend server database for an eCommerce business website. The database has relational tables that have information on products, categories, and tags. Routes are provided to get, post, put, and delete information on each table. To create this backend erver we used a MySQL database using the MySQL2 and Sequelize packages. I used Insomnia to continually test routes and make sure the backend was working properly.",
	appLink: "",
	gitHub: "https://github.com/MMockus15/e-commerce-back-end",
	},
	{
	index: 3,
	imagePath: mvc,
	alt: "A tech blog that uses model view controller structure similar to a wordpress website.",
	title: "MVC Tech Blog",
	description: "This project uses the Model-View-Controller (MVC) structure to build a website similar to Wordpress. This is a place where developers can publish blog posts, as well as comment on other blog posts. To begin a User signs up for an account. They are able to then login, go to their dashboard to view all of their blog posts, comment on others blog posts, edit their posts, and delete their posts. This was created with multiple node packages including, espress-handlebars, MySQL2, Sequalize, dotenv, bcrypt, espress-session, and connect-session-sequalize.",
	appLink: "https://pure-crag-52361.herokuapp.com/",
	gitHub: "https://github.com/MMockus15/mvc-tech-blog",
	},
];

export default projects;