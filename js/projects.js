const projectContainer = document.querySelector('.projects__container');
const projects = [
    {
        image: '../images/projects/Typing_application.png',
        title: 'Typt', 
        description: 'This web application has been built with the purpose of improving your typing skills with 3 different level of difficulties and multiple challenges to test your speed. Gaining starts to advance to the most advanced levels.', 
        technologies: ['Vuetify', 'Node_JS', 'Express', 'Vue', 'Passport_auth', 'MongoDB'], 
        links: [
            {
                icon: 'fab fa-github',
                href: 'https://github.com/omarBaldi/Typt'
            },
            {
                icon: 'fas fa-external-link-alt',
                href: 'https://typt.herokuapp.com/'
            },
        ]
    },
    {
        image: '../images/projects/wikiTree_image.png',
        title: 'WikiTree', 
        description: 'This application scrape the web page from a starting point given by the user by typing a specific word and using the recursion alghoritm for every link it encounters retrieve the first 5 links of each one and build a graph.', 
        technologies: ['Vue', 'Node_JS', 'Express', 'Puppeteer', 'Materialize', 'GoJs'], 
        links: [
            {
                icon: 'fab fa-github',
                href: 'https://github.com/omarBaldi/wikiTree'
            },
            {
                icon: 'fas fa-external-link-alt',
                href: 'https://wikipediatree.herokuapp.com/'
            },
        ]
    },
    {
        image: '../images/projects/covid_tracker.png',
        title: 'Covid-19 Tracker', 
        description: 'A graphic representation of the COVID virus using different and reactive charts with an intuitive and fresh design. It shows for every country the trend for the people infected, recovered and death.',
        technologies: ['Vue', 'Vuetify', 'Covid19-API', 'Highcharts'], 
        links: [
            {
                icon: 'fab fa-github',
                href: 'https://github.com/omarBaldi/COVID'
            },
            {
                icon: 'fas fa-external-link-alt',
                href: 'https://coviddatatracker.netlify.app/'
            },
        ]
    },
    {
        image: '../images/projects/github_userFinder.png',
        title: 'Github-userFinder', 
        description: 'This application allows you to search every GitHub user and display his informations as well as his personal repositories and their respective commits using the power of GraphQL combined with the GitHub API.',
        technologies: ['Vue', 'Vuetify', 'Apollo', 'GraphQL', 'GitHub API'], 
        links: [
            {
                icon: 'fab fa-github',
                href: 'https://github.com/omarBaldi/githubUserFinder'
            },
            {
                icon: 'fas fa-external-link-alt',
                href: 'https://githubuserfinderrr.netlify.app/'
            },
        ]
    }
];

function createElement(type, attrs = {}) {
    const newElement = document.createElement(type);
    for (let attr in attrs) {
        const value = attrs[attr];
        newElement.setAttribute(attr, value)
    }

    return newElement
};

function createProjectsCards() {
    for (let [index, project] of projects.entries()) {

        const currentIndex = (index + 1).toString();
        const paddingZerosFormat = currentIndex.padStart(4 - currentIndex.length, "0");

        const createProjectNumber = () => {
            const number = createElement('h4', { class: 'side__vertical__text', 'data-text': `Proj #${paddingZerosFormat}` });
            return number
        };

        const createImage = () => {
            const imageContainer = createElement('div', { class: 'project__image' });
            const image = createElement('img', { src: project.image });
            imageContainer.appendChild(image);
            return imageContainer
        };

        const createTitle = () => {
            const titleContainer = createElement('div', { class: 'project__title' });
            const subtitle = createElement('h4', { 'data-text': 'Featured Project' });
            const title = createElement('h1', { 'data-text': project.title }); 
            titleContainer.append(subtitle, title);
            return titleContainer
        };

        const createDescription = () => {
            const descriptionContainer = createElement('div', { class: 'project__description' });
            const description = createElement('p', { 'data-text': project.description });
            descriptionContainer.appendChild(description);
            return descriptionContainer
        };

        const createTechnologies = () => {
            const technologiesContainer = createElement('div', { class: 'project__technologies' });
            const ulTechnologies = createElement('ul');
            project.technologies.forEach(technology => {
                const liTechnology = createElement('li', { 'data-text': technology });
                ulTechnologies.appendChild(liTechnology);
            });
            technologiesContainer.appendChild(ulTechnologies);
            return technologiesContainer
        };

        const createLinks = () => {
            const linksContainer = createElement('div', { class: 'project__links' });
            project.links.forEach(link => {
                const iconLink = createElement('i', { class: link.icon });
                const hrefLink = createElement('a', { href: link.href, target: '_blank' });
                hrefLink.appendChild(iconLink);
                linksContainer.appendChild(hrefLink);
            });
            return linksContainer
        };

        const createTextContainer = () => {
            const projectTextDOM = createElement('div', { class: 'project__text' });
            projectTextDOM.append(createTitle(), createDescription(), createTechnologies(), createLinks());
            return projectTextDOM
        };

        const createProject = () => {
            const projectDOM = createElement('div', { 'data-project-number': paddingZerosFormat, class: 'project'});
            projectDOM.append(createProjectNumber(), createImage(), createTextContainer());
            return projectDOM
        };

        projectContainer.appendChild(createProject());

    }
}
createProjectsCards();
