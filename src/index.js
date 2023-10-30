import "./style.css";
import { componentA } from "./Menu";
import { componentB } from "./Contact";
import Icon from "./restaurant-background.jpg";
const myImage = new Image();
myImage.src = Icon ;
document.body.style.backgroundImage = 'url('+Icon+')';
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center center";
const tab1 = document.createElement("a");
const tab2 = document.createElement("a");
const tab3 = document.createElement("a");
tab1.href = "#";
tab2.href = "#";
tab3.href = "#";
tab1.innerText = "HOME";
tab2.innerText = "MENU";
tab3.innerText = "CONTACT";
const tabs = document.createElement("div");
const title = document.createElement("h1");
title.innerText = "WELCOME";
tabs.classList.add("tabs");
tabs.append(tab1,tab2,tab3);

const contentDiv = document.querySelector(".content");
contentDiv.append(title,tabs);


