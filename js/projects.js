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

function createProjectsCards() {
    for (let [index, project] of projects.entries()) {

        //Create number container
        const projectNumber = document.createElement('h4');
        projectNumber.className = 'side__vertical__text';
        const currentIndex = (index + 1).toString();
        const paddingZerosFormat = currentIndex.padStart(4 - currentIndex.length, "0");
        projectNumber.innerText = `Proj #${paddingZerosFormat}`;

        //Create Image container
        const projectImageDOM = document.createElement('div');
        projectImageDOM.className = 'project__image';
        const image = document.createElement('img');
        image.src = project.image;
        /* image.setAttribute('href', project.links[0].href); */
        projectImageDOM.appendChild(image);


                        //Create title/subtitle
                        const projectTitleDOM = document.createElement('div');
                        projectTitleDOM.className = 'project__title';
                        const subtitle = document.createElement('h4');
                        subtitle.innerText = 'Featured Project'
                        const title = document.createElement('h1');
                        title.innerText = project.title;
                        projectTitleDOM.append(subtitle, title);

                        //Create description
                        const projectDescriptionDOM = document.createElement('div');
                        projectDescriptionDOM.className = 'project__description';
                        const description = document.createElement('p');
                        description.innerText = project.description;
                        projectDescriptionDOM.append(description);

                        //Create technologies
                        const projectTechnologiesDOM = document.createElement('div');
                        projectTechnologiesDOM.className = 'project__technologies';
                        const ul = document.createElement('ul');
                        project.technologies.forEach((technology, indexTechnology) => {
                            const li = document.createElement('li');
                            li.innerText = technology;
                            ul.appendChild(li);
                        });
                        projectTechnologiesDOM.appendChild(ul);

                        //Create links
                        const projectLinksDOM = document.createElement('div');
                        projectLinksDOM.className = 'project__links';
                        project.links.forEach(link => {
                            const icon = document.createElement('i');
                            icon.className = link.icon;
                            const a = document.createElement('a');
                            a.appendChild(icon);
                            a.setAttribute('href', link.href);
                            a.target = '_blank';
                            projectLinksDOM.appendChild(a);
                        });

       
        //Create Text container
        const projectTextDOM = document.createElement('div');
        projectTextDOM.className = 'project__text';
        projectTextDOM.append(projectTitleDOM, projectDescriptionDOM, projectTechnologiesDOM, projectLinksDOM);


         //Create project container
         const projectDOM = document.createElement('div');
         //projectDOM.setAttribute('data-project-number', project.title);
         projectDOM.setAttribute('data-project-number', paddingZerosFormat);
         projectDOM.className = 'project';
         projectDOM.append(projectNumber, projectImageDOM, projectTextDOM);

        //Append in parent container
        projectContainer.appendChild(projectDOM);

    }
}
createProjectsCards();
