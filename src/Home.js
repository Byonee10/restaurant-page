

import Icon from "./restaurant-background.jpg";

const createRestaurantHomePage = () => {
    const content = document.querySelector(".content");
    const pageContent = document.createElement("div");
    pageContent.setAttribute('id','pageContent');

    const myImage = new Image();
    myImage.src = Icon ;
    document.body.style.backgroundImage = 'url('+Icon+')';
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundPosition = "center center";

}
export default createRestaurantHomePage;