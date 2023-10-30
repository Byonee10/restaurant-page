import createRestaurantHomePage from './Home.js'
import createTabs from "./tabs.js";

function loadPage(){
    createTabs();
    createRestaurantHomePage();
}

export default loadPage;