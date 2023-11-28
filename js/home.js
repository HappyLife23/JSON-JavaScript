const mainContent = document.querySelector('.main-content');

async function home() {
    const response = await fetch('../json/home.json');

    if (response.ok) {
        const jsonContent = await response.json();
        homeContent(jsonContent);

        

    } else {
        console.group('Error' + response.status)
    }

}



function homeContent(jsonContent) {
    jsonContent.homes.forEach(home => {
        
        const h2 = document.createElement('h2');
        h2.textContent = home.name;
        mainContent.appendChild(h2);

        const h4 = document.createElement('h4');
        h4.textContent = home.position;
        mainContent.appendChild(h4);

        const para = document.createElement('p');
        para.textContent = home.description;
        mainContent.appendChild(para);

        const image = document.createElement('img');
        image.src = home.profilePicture;
        mainContent.appendChild(image);
        
        
    });
    
    
}


home();
