import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
// import CardGroup from "./CardGroup.jsx";
import Footer from "./Footer.jsx";
import Cards from "./Cards.jsx";
 
//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</>
	);
};

export default Home;