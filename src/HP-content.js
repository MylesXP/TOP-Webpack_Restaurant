function hpBuilder(){
    // Creating Elements
    let contentDiv = document.getElementById('content');
    let navWrapper = document.createElement('div');
    let navbar = document.createElement('ul');
    let navHome = document.createElement('li');
    let navAbout = document.createElement('li');
    let navContact = document.createElement('li');
    let heroWrapper = document.createElement('div');
    let heroTL = document.createElement('h1');
    let heroSL = document.createElement('h3');
    
    // Adding classes to Elements
    navbar.classList.add('navbar');
    navWrapper.classList.add('nav-wrapper');
    heroWrapper.classList.add('herocopy_wrapper');
    
    // Append newly made elements
    contentDiv.appendChild(navWrapper);
    contentDiv.appendChild(heroWrapper);
    heroWrapper.appendChild(heroTL);
    heroWrapper.appendChild(heroSL);
    navWrapper.appendChild(navbar);
    navbar.appendChild(navHome);
    navbar.appendChild(navAbout);
    navbar.appendChild(navContact);

   
    navbar.childNodes.forEach(x => {
        x.classList.add('navitem');
        x.appendChild(document.createElement('a'));
    });

    // Add Content to Elements
    navHome.firstChild.textContent = 'Home';
    navHome.firstChild.href = '#';
    navAbout.firstChild.textContent = 'About';
    navAbout.firstChild.href = '#';
    navContact.firstChild.textContent = 'Contact';
    navContact.firstChild.href = '#';
    heroSL.textContent = 'Get Ready for Burger Time!';
    heroTL.textContent = 'The Greatest Burger in the World, Right Here';
    
}

export {hpBuilder};