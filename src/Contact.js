
const contact = () => {
    const content = document.querySelector(".content");
    const pageContent = document.createElement("div");
    pageContent.setAttribute('id','pageContent');


    const title = document.createElement("h1");
    title.innerText = "Contact information";
    pageContent.appendChild(title);


    const paragraph = document.createElement("p");
    paragraph.innerText = "Saray Mah. Ataturk Cad. No 61, Alanya 07400 Türkiye";
    pageContent.appendChild(paragraph);



    content.appendChild(pageContent);

}

export default contact;