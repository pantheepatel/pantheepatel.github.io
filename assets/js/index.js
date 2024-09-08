document.addEventListener('DOMContentLoaded', function () {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectContainer = document.getElementById('projectContainer');
    const modal = document.getElementById('projectModal');
    const modalImage = document.getElementById('modalImage');
    const modalDescription = document.getElementById('modalDescription');

    const projects = [
        {
            name: 'PlantHub',
            image: 'assets/project_images/web_p1/plantHub-1.png',
            description: 'PlantHub is a comprehensive platform designed for plant enthusiasts, offering a wealth of information about various plants and trees. Built with a user-centric approach, PlantHub aims to educate, engage, and inspire individuals interested in plants and nature.',
            gitHubLink: 'https://github.com/pantheepatel/PlantHub.github.io',
            replLink: '',
            features: ['Searching', 'Filtering', 'Like-Unlike', 'Pagination', 'login-logout'],
            skills: ['React JS', 'Tailwind CSS', 'DJango'],
            type: 'web1',
            addClass: 'short',
            images: ['assets/project_images/web_p1/plantHub-1.png', 'assets/project_images/web_p1/plantHub-2.png', 'assets/project_images/web_p1/plantHub-3.png',]
        },
        {
            name: 'TriviaTrek',
            image: 'assets/project_images/java_p1/TriviaTrek_1.png',
            description: 'Through this project, I delved into fundamental Java concepts, including object-oriented programming, file handling, and user authentication. As I developed TriviaTrek, I learned the importance of efficient data management and user interaction in creating engaging applications.',
            gitHubLink: 'https://github.com/pantheepatel/TriviaTrek',
            replLink: '',
            features: ['Registration', 'Login', 'Quiz', 'Highscore Updation'],
            skills: ['JAVA', 'OOPs', 'File Handling'],
            type: 'java1',
            addClass: 'long',
            images: ['assets/project_images/java_p1/TriviaTrek_1.png', 'assets/project_images/java_p1/TriviaTrek_2.png', 'assets/project_images/java_p1/TriviaTrek_3.png',]
        },
        {
            name: 'NEWS-APP',
            image: 'assets/project_images/py_p1/news_1.png',
            description: 'Built a dynamic news app in Python, leveraging Beautiful Soup for data scraping to generate news across all topics. The app also offers an advanced feature using the Google NEWS library, where users can specify a particular topic, select whether to include article links, and customize the number of news articles displayed, providing a tailored and flexible news-gathering experience.',
            gitHubLink: '',
            replLink: 'https://replit.com/@PantheePatel1/NEWSGenerator',
            features: ['Topic Search', 'Custom Article Count', 'Include/Exclude Links', 'All/Specific Topic News', 'Real-time Updates'],
            skills: ['Python', 'GoogleNews', 'Data Scrapping with Beautiful Soup'],
            type: 'py1',
            addClass: 'short',
            images: ['assets/project_images/py_p1/news_1.png', 'assets/project_images/py_p1/news_2.png', 'assets/project_images/py_p1/news_3.png',]
        },
        {
            name: 'Calculator',
            image: 'assets/project_images/app_p1/calculator_1.png',
            description: 'My first React Native app, a simple calculator that performs basic arithmetic operations. App is available on 2 themes: Light and Dark.',
            gitHubLink: 'https://github.com/pantheepatel/calculator-app',
            replLink: '',
            features: [],
            skills: ['React Native', 'JavaScript', 'NativeWind'],
            type: 'app1',
            addClass: 'long',
            images: ['assets/project_images/app_p1/calculator_1.png', 'assets/project_images/app_p1/calculator_2.png', 'assets/project_images/app_p1/calculator_3.png']
        },
        {
            name: 'Hospital Management System',
            image: 'assets/project_images/c_p1/HospitalManage_1.png',
            description: 'Developed a C language program in my 1st semester that enabled admin and users to manage patient data, including adding, updating, viewing, and deleting records. The program also featured billing functionality and a help option for guidance.',
            gitHubLink: '',
            replLink: 'https://replit.com/@PantheePatel1/HospitalManagement',
            features: ['Patient Details', 'Add New Patient', 'Delete Patient', 'Update Patient Details', 'Check Billing', 'Update Billing'],
            skills: ['C'],
            type: 'c1',
            addClass: 'short',
            images: ['assets/project_images/c_p1/HospitalManage_1.png', 'assets/project_images/c_p1/HospitalManage_2.png', 'assets/project_images/c_p1/HospitalManage_3.png',]
        },
        {
            name: 'Sudoku Solver',
            image: 'assets/project_images/c_p2/sudoku_1.png',
            description: 'This program developed in C language used to solve Sudoku puzzles using backtracking algorithm to find the solution to any given Sudoku puzzle. The project helped me understand the importance of algorithmic thinking and problem-solving in programming.',
            gitHubLink: '',
            replLink: 'https://replit.com/@PantheePatel1/SudokuSolvver',
            features: [],
            skills: ['C', 'DSA'],
            type: 'c2',
            addClass: 'short',
            images: ['assets/project_images/c_p2/sudoku_1.png']
        },
    ];

    // Function to generate project cards
    function generateProjects() {
        let html = '';
        projects.forEach(project => {
            html += `
                    <div style="
                    overflow: hidden;
                    "
                    class=" ${project.addClass}">
                        <div class="card d-flex justify-content-center" data-category="${project.type}">
                            <img src="${project.image}" alt="${project.name}" data-description="${project.description}"
                            style="
                            min-width: 100%;
                            max-height: 100%; 
                            object-fit: contain;
                            ">
                        </div>
                        <div style="
                        display: flex;
                        justify-content: space-between;
                        width: 85%;
                        margin: auto;
                        ">
                            <span style="font-size: large;">${project.name}</span>
                            <span style="color: #008cba; font-weight: bold; font-size: large;">${project.skills[0]}</span>
                        </div>
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
            const slideNo = 0;
            const projectType = this.getAttribute('data-category');
            const selectedProject = projects.find(project => project.type === projectType);

            // Populate modal content
            document.querySelector('.modal-title').textContent = selectedProject.name;
            // document.getElementById('modalImage').src = selectedProject.image;
            document.getElementById('modalDescription').textContent = selectedProject.description;
            document.getElementById('gitHubLink').href = selectedProject.gitHubLink;
            document.getElementById('gitHubLink').innerText = selectedProject.gitHubLink;
            document.getElementById('replLink').href = selectedProject.replLink;
            document.getElementById('replLink').innerText = selectedProject.replLink;

            const carouselInner = document.getElementById('carouselInner');
            const prevBtn = document.getElementById('carouselControlPrev').addEventListener('click', function () {
                $('#projectCarousel').carousel('prev');
                // console.log("prev");
                if (this.slideNo > 0) {
                    slideNo = slideNo - 1;
                } else {
                    slideNo = selectedProject.images.length - 1;
                }
            });
            const nextBtn = document.getElementById('carouselControlNext').addEventListener('click', function () {
                $('#projectCarousel').carousel('next');
                // console.log("next");
                if (slideNo < selectedProject.images.length - 1) {
                    slideNo = slideNo + 1;
                } else {
                    slideNo = 0;
                }
            });

            carouselInner.innerHTML = '';
            selectedProject.images.forEach((image, index) => {
                if (index === slideNo) {
                    itemClass = 'carousel-item active';
                    // console.log("active :", index, slideNo);
                } else {
                    itemClass = 'carousel-item';
                    // console.log("not active :", index, slideNo);
                }
                // const itemClass = index === 0 ? 'carousel-item active' : 'carousel-item';
                const carouselItem = document.createElement('div');
                carouselItem.classList = itemClass + ' w-100 h-100';

                const imageElement = document.createElement('img');
                imageElement.src = image;
                imageElement.alt = `${selectedProject.name} Image ${index + 1}`;
                imageElement.style = 'max-height:25rem';
                imageElement.classList = 'object-contain m-auto d-flex';

                carouselItem.appendChild(imageElement);
                carouselInner.appendChild(carouselItem);
            });
            $('#projectCarousel').carousel();

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

    var counterContainer = document.querySelector(".website-counter");
    var resetButton = document.querySelector("#reset");
    var visitCount = localStorage.getItem("page_view");

    // Check if page_view entry is present
    if (visitCount) {
        visitCount = Number(visitCount) + 1;
        localStorage.setItem("page_view", visitCount);
    } else {
        visitCount = 1;
        localStorage.setItem("page_view", 1);
    }
    counterContainer.innerHTML = visitCount;

    // Adding onClick event listener
    resetButton.addEventListener("click", () => {
        visitCount = 1;
        localStorage.setItem("page_view", 1);
        counterContainer.innerHTML = visitCount;
    });

});

document.addEventListener('DOMContentLoaded', function () {
    imagePath = "assets/image/"
    certificatePath = "assets/certificates/CERTIFICATE_LANDING_PAGE~"
    // Array of skill objects
    const skills = [
        { image: 'C', name: 'C' },
        { image: 'Java', name: 'Java' },
        { image: 'Python', name: 'Python' },
        { image: 'JS', name: 'Java Script' },
        { image: 'AngularJS', name: 'Angular JS' },
        { image: 'ReactJS', name: 'React JS' },
        { image: 'ReactNative', name: 'React Native' },
        { image: 'HTML', name: 'HTML' },
        { image: 'CSS', name: 'CSS' },
        { image: 'Bootstrap', name: 'Bootstrap' },
        { image: 'TailwindCSS', name: 'Tailwind CSS' },
        { image: 'Jango', name: 'Django' },
        { image: 'GitHub', name: 'GitHub' },

    ];

    const certificates = [
        { image: 'AA4676G4KETK', name: 'App Engine: Qwik Start - Java' },
        { image: 'D88X653XDEDY', name: 'The Structured Query Language (SQL)' },
        { image: 'RVRSGB7G7H6L', name: 'Version Control' },
        { image: 'DAKXKZMFBJU3', name: 'Linux Fundamentals' },
        { image: 'FX4WA85RWY47', name: 'C for Everyone: Programming Fundamentals' },
        { image: 'E65BJ9P4XF88', name: 'What is Data Science?' },
        { image: 'MP4WLMEQW3GK', name: 'Exploratory Data Analysis for Machine Learning' },
        { image: 'C87R8HVLJMGL', name: 'Data Structures' },
        { image: 'PRKK85ZPJEPH', name: 'Algorithmic Thinking (Part 1)' },
        { image: 'YRQKWPZYUQSJ', name: 'Algorithmic Thinking (Part 2)' },
        { image: 'QYR3X568PJNP', name: 'Introduction to HTML5' },
        { image: '77YM94UETPD5', name: 'Introduction to CSS3' },
        { image: 'FX3CRG66CJ5D', name: 'Interactivity with JavaScript' },
        { image: 'F2NF4YJY8KCZ', name: 'Introduction to Web Development' },
        { image: 'HTPFZPBQ723X', name: 'HTML, CSS, and Javascript for Web Developers' },
        { image: 'TJ4WBRWTXFU9', name: 'Advance Styling with Responsive Design' },
        { image: 'UDEMY1', name: 'Logo Design Essentials' },
    ]

    // Get the container to append skills
    const skillsContainer = document.getElementById('skillsContainer');
    const swiperWrapper = document.getElementById('SwiperWrapper');

    function generateSkillCards() {
        skills.forEach(skill => {
            const cardDiv = document.createElement('div');
            cardDiv.classList.add('col-6', 'col-sm-4', 'col-md-3', 'col-lg-2', 'mb-4');
            const cardContent = `
                <div class="skill-card">
                    <img src="${imagePath}${skill.image}.png" alt="${skill.name}">
                    <div class="skill-name">${skill.name}</div>
                </div>
            `;
            cardDiv.innerHTML = cardContent;
            skillsContainer.appendChild(cardDiv);
        });
    }
    function generateCertificates() {
        console.log("certificates");
        certificates.forEach(certificate => {
            const slideDiv = document.createElement('div');
            slideDiv.classList.add('swiper-slide');
            const slideContent = `
                <img src="${certificatePath}${certificate.image}.jpeg" alt="${certificate.name}" class="certificate-img">
                <span class="cetrificateName">${certificate.name}</span>
            `;
            slideDiv.innerHTML = slideContent;
            swiperWrapper.appendChild(slideDiv);
        });
        const certificateCards = document.querySelectorAll('.certificate-img');
        certificateCards.forEach(card => {
            card.addEventListener('click', function () {
                document.querySelector('.modal-title').textContent = card.alt;
                document.getElementById('certiModalImage').src = card.src;
                document.getElementById('certiName').innerText = card.alt;
                $('#certificateModal').modal('show');
            });
        });
    }
    // Event listener for the close button within the modal
    $('.close-btn').on('click', function () {
        $('#certificateModal').modal('hide');
    });


    // Generate skill cards
    generateSkillCards();
    generateCertificates();

    // const certificateCards = document.querySelectorAll('.swiper-slide img');
    // certificateCards.forEach(card => {
    //     card.addEventListener('click', function () {
    //         console.log("clicked", card.src);
    //         document.querySelector('.modal-title').textContent = card.alt;
    //         document.getElementById('certiModalImage').src = card.src;
    //     });
    // });
    // const fullPage = document.getElementById('fullPage');
    // certificateCards.forEach(card => {
    //     card.addEventListener('click', function () {
    //         console.log("clicked", card.src);
    //         const div = document.createElement('div');
    //         div.classList.add('modal');
    //         const modalContent = `
    //             <img src="${card.src}" alt="${card.alt}">
    //         `;
    //         div.innerHTML = modalContent;
    //         fullPage.appendChild(div);
    //         console.log("appended", fullPage);
    //     });
    // });

});