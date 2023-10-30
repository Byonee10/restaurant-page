
const Menu = () => {
    const content = document.querySelector(".content");
    const pageContent = document.createElement("div");
    pageContent.setAttribute('id','pageContent');


    const title = document.createElement("h1");
    title.innerText = "Menu";
    pageContent.appendChild(title);


    const ul = document.createElement("ul");
    const li1 = document.createElement("li");
    const li2 = document.createElement("li");
    const li3 = document.createElement("li");
    li1.innerText = "Sarma";
    li2.innerText = "Nohut";
    li3.innerText = "Pilav";
    ul.append(li1,li2,li3);

    pageContent.appendChild(ul);



    content.appendChild(pageContent);

}

export default Menu;