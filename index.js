const team = document.getElementById('teams');
const names = [
    {
        firstName: "Linda",
        secondName: "Brentford"
    },
    {
        firstName: "Matilda",
        secondName: "Sheen"
    },
    {
        firstName: "Anne",
        secondName: "Michealson"
    },
    {
        firstName: "Beatrice",
        secondName: "CarMaicheal"
    },
    {
        firstName: "John",
        secondName: "Luton"
    },
]

for (let index = 0; index < 5; index++) {
    
    const teams = document.createElement('div');
    const name = document.createElement('h1');
    teams.classList.add('team'+index);
    name.innerHTML = names[index].firstName + '<br>' + names[index].secondName;
    teams.appendChild(name);
    team.appendChild(teams);

}

const links = document.querySelectorAll('.nav-links ul li');

links.forEach(element => {
    element.addEventListener('click', () => {
        for (let index = 0; index < 4; index++) {
            if (links[index].hasAttribute('data-target')) {
                links[index].removeAttribute('data-target');
            }
        }
        element.setAttribute('data-target', 'active');
    });
});