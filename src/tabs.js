import menu from './Menu';
import contact from './Contact';
import createRestaurantHomePage from './Home';
const createTabs = ()=>{
    const content = document.querySelector(".content");


    const homeTab = document.createElement("div");
    const menuTab = document.createElement("div");
    const contactTab = document.createElement("div");

    homeTab.innerText = "home";
    menuTab.innerText = "menu";
    contactTab.innerText = "contact";
    
    homeTab.addEventListener("click",()=>{
        clearPageContent();
        createRestaurantHomePage()});

    menuTab.addEventListener("click",()=>{
        clearPageContent();
        menu();});

    contactTab.addEventListener("click",()=>{
        clearPageContent();
        contact();});
    content.append(homeTab,menuTab,contactTab);
}

const clearPageContent = () => {
    const pageContent = document.querySelector("#pageContent");
    const content = document.querySelector(".content");
    if(pageContent){
        content.removeChild(pageContent);
        
    }
}




export default createTabs;