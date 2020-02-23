console.log("hello");

const projects = [
    {
        title: "Cool Project", 
        screenshot: "http://gotoflashgames.com/files/file/033.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux"
      }
];

const printToDom = (divId,textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
  }


const createBio = () => {
    let domString="";
    domString += '<div>';
    domString += '<img class = "myPhoto" src = "./screenshots/IMG_5486.JPG" alt="black and white selfie"></img>';
    domString += '<p>Hello!!!  My name is Michele Rawlins.  Welcome to my page.</p>';
    domString += '<p> I have worked in manufacturing and the food industry for the last 32 years.</p>';


printToDom('bio-photo',domString)

} 


createBio();






const createProjectCards = () => {
    let projectsList = "";
    let domString = "";
    for(let i=0; i < projectsList.length; i++){
    if (projectsList[i].available === 'true');
domString += `<div id = "title">${projectsList[i].title}`;
domString += `<img src = ${projectsList[i].screenshot}>`;
domString += `<p> ${projectsList[i].description}</p>`;
domString += `<p> ${projectsList[i].technologiesUsed}</p>`;
domString += `<p> ${projectsList[i].url}</p>`;
domString += `<p> ${projectsList[i].githubUrl}</p>`;

}
printToDom('projectsPage',domString )
};
const init = () => {

    createProjectCards(projects);
};

init();