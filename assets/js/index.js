document.addEventListener('DOMContentLoaded', function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectContainer = document.getElementById('projectContainer');
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');

    // Sample projects array
    const projects = [
        {
            name: 'PlantHub',
            image: 'assets/project_images/web_p1/plantHub-1.png',
            description: 'PlantHub is a comprehensive platform designed for plant enthusiasts, offering a wealth of information about various plants and trees. Built with a user-centric approach, PlantHub aims to educate, engage, and inspire individuals interested in plants and nature.',
            gitHubLink: 'https://github.com/pantheepatel/PlantHub.github.io',
            features: ['Searching', 'Filtering', 'Like-Unlike', 'Pagination', 'login-logout'],
            skills: ['React JS', 'Tailwind CSS', 'DJango'],
            type: 'web',
            images: ['assets/project_images/web_p1/plantHub-1.png', 'assets/project_images/web_p1/plantHub-2.png', 'assets/project_images/web_p1/plantHub-3.png',]
        },
        // {
        //     name: 'PlantHub',
        //     image: 'assets/project_images/web_p1/plantHub-1.png',
        //     description: 'PlantHub is a comprehensive platform designed for plant enthusiasts, offering a wealth of information about various plants and trees. Built with a user-centric approach, PlantHub aims to educate, engage, and inspire individuals interested in plants and nature.',
        //     features: ['Searching', 'Filtering', 'Like-Unlike', 'Pagination', 'login-logout'],
        //     skills: ['React JS', 'Tailwind CSS', 'DJango'],
        //     type: 'app'
        // },
        // Add more projects similarly
    ];

    // Function to generate project cards
    function generateProjects() {
        let html = '';
        projects.forEach(project => {
            html += `
            <div class="col-md-4 card" data-category="${project.type}">
                <img src="${project.image}" alt="${project.name}" class="project-image" data-description="${project.description}">
            </div>
            `;
        });
        projectContainer.innerHTML = html;
    }


    // Initial generation of projects
    generateProjects();

    // Event listener for each project card to open the Bootstrap modal
    const projectCards = document.querySelectorAll('.card');
    projectCards.forEach(card => {
        card.addEventListener('click', function () {
            const projectType = this.getAttribute('data-category');
            const selectedProject = projects.find(project => project.type === projectType);

            // Populate modal content
            document.querySelector('.modal-title').textContent = selectedProject.name;
            document.getElementById('modalImage').src = selectedProject.image;
            document.getElementById('modalDescription').textContent = selectedProject.description;
            document.getElementById('gitHubLink').href = selectedProject.gitHubLink;
            document.getElementById('gitHubLink').innerText = selectedProject.gitHubLink;

            // // Populate image slider
            // const carouselInner = document.getElementById('carouselInner');
            // carouselInner.innerHTML = '';
            // selectedProject.images.forEach((image, index) => {
            //     const itemClass = index === 0 ? 'carousel-item active' : 'carousel-item';
            //     const carouselItem = document.createElement('div');
            //     carouselItem.classList = itemClass;

            //     const imageElement = document.createElement('img');
            //     imageElement.src = image;
            //     imageElement.alt = `${selectedProject.name} Image ${index + 1}`;
            //     imageElement.classList = 'd-block w-100';

            //     carouselItem.appendChild(imageElement);
            //     carouselInner.appendChild(carouselItem);
            // });
            // $('#projectCarousel').carousel();

            // Populate features
            const featuresList = document.getElementById('projectFeatures');
            featuresList.innerHTML = '';
            selectedProject.features.forEach(feature => {
                const li = document.createElement('li');
                li.textContent = feature;
                li.classList = 'badge bg-primary mx-2 my-1 p-2'
                featuresList.appendChild(li);
            });

            // Populate skills
            const skillsList = document.getElementById('projectSkills');
            skillsList.innerHTML = '';
            selectedProject.skills.forEach(skill => {
                const li = document.createElement('li');
                li.textContent = skill;
                li.classList = 'badge bg-primary mx-2 my-1 p-2'
                skillsList.appendChild(li);
            });

            // Show the modal
            $('#projectModal').modal('show');
        });
    });



    // Event listener for the close button within the modal
    $('.close-btn').on('click', function () {
        $('#projectModal').modal('hide');
    });

    // Event listener to handle filtering projects based on category
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            const category = this.getAttribute('data-filter');
            projectCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});
// // Skills array
// const skills = ['AngularJS', 'ReactJS', 'C', 'CSS', 'Bootstrap', 'Java'];

// // Function to generate skills
// function generateSkills() { 
//     console.log('called con')
//     const skillsContainer = document.getElementById('skillsContainer');

//     skills.forEach(skill => {
//         // Create a new column for each skill
//         const col = document.createElement('div');
//         col.classList.add('col-3'); // Bootstrap column class

//         // Create image element
//         const img = document.createElement('img');
//         img.src = `assets/image/${skill}.png`; // Set image source dynamically
//         img.alt = skill; // Set alt text dynamically
//         img.classList.add('imgClass')

//         // Append image to column and column to container
//         col.appendChild(img);
//         skillsContainer.appendChild(col);
//     });
// }

// // Call the function to generate skills
// generateSkills();
document.addEventListener('DOMContentLoaded', function () {
    imagePath = "assets/image/"
    // Array of skill objects
    const skills = [
        { image: 'HTML', name: 'HTML' },
        { image: 'CSS', name: 'CSS' },
        { image: 'JS', name: 'Java Script' },
        { image: 'Bootstrap', name: 'Bootstrap' },
        { image: 'TailwindCSS', name: 'Tailwind CSS' },
        { image: 'AngularJS', name: 'Angular JS' },
        { image: 'ReactJS', name: 'React JS' },
        { image: 'ReactNative', name: 'React Native' },
        { image: 'Python', name: 'Python' },
        { image: 'Django', name: 'Django' },
    ];

    // Get the container to append skills
    const skillsContainer = document.getElementById('skillsContainer');

    // Function to generate skill cards
    function generateSkillCards() {
        skills.forEach(skill => {
            // Create card div
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('col-sm-4', 'col-md-3', 'mb-4'); // Bootstrap column and margin

            // Create skill card content
            const cardContent = `
                <div class="skill-card">
                    <img src="${imagePath}${skill.image}.png" alt="${skill.name}">
                    <div class="skill-name">${skill.name}</div>
                </div>
            `;

            // Set innerHTML of cardDiv
            cardDiv.innerHTML = cardContent;

            // Append cardDiv to skillsContainer
            skillsContainer.appendChild(cardDiv);
        });
    }

    // Generate skill cards
    generateSkillCards();
});
