var close_btn = document.getElementById('close');
var showcase = document.getElementById('showcase-container');
var showcase_img = document.getElementById('showcase-image');

import { oeuvresHorsCours } from "./items.js";
close_btn.onclick = () => {
    showcase.style.display = 'none';
}
function createContainerItem(title, content, imagePath) {
    let container = document.createElement('div');
    container.classList.add('container');

    let contentDiv = document.createElement('div');

    let titleElement = document.createElement('h1');
    titleElement.textContent = title;

    let contentElement = document.createElement('p1');
    contentElement.textContent = content;

    contentDiv.appendChild(titleElement);
    contentDiv.appendChild(contentElement);

    let imageElement = document.createElement('img');
    imageElement.src = imagePath;
    imageElement.classList.add('showcase');
    imageElement.onclick = ()=>{
        showcase.style.display = 'inherit';
        showcase_img.src = imageElement.src
        showcase_img.style.width = '25%'
    }
    let labelElement = document.createElement('label');
    labelElement.textContent = 'Cliquez pour voir ';

    let expandIcon = document.createElement('i');
    expandIcon.classList.add('fa-solid', 'fa-expand');

    labelElement.appendChild(expandIcon);

    container.appendChild(contentDiv);
    container.appendChild(imageElement);
    container.appendChild(labelElement);

    return container;
}


document.addEventListener('DOMContentLoaded',()=>{
    var listContainer = document.querySelector('.list');
    oeuvresHorsCours.forEach(function(data) {
        var newItem = createContainerItem(data.titre, data.description, data.src);
        listContainer.appendChild(newItem);

    });
})