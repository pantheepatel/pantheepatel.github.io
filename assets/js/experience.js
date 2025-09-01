// Professional Experience Data & Dynamic Rendering
const experiences = [
    //   {
    //     title: "Trainee Engineer",
    //     date: "January 2025 - Current",
    //     company: { name: "Simform solutions", url: "https://www.simform.com/" },
    //     location: "Ahmedabad, Gujarat",
    //     details: [
    //       "As an intern, I am honing my skills in .NET and Angular, focusing on developing scalable web applications while following industry best practices.",
    //       "Working on hands-on projects, debugging, optimizing performance, and implementing efficient coding solutions to meet business needs.",
    //       "Participating in daily sync-ups, mentor evaluations, and supervisor interviews to enhance technical proficiency."
    //     ]
    //   },
    {
        title: "Software Developer",
        date: "January 2025 - Current",
        company: { name: "Simform Solutions", url: "https://www.simform.com/" },
        location: "Ahmedabad, Gujarat",
        details: [
            "Started as a trainee and transitioned into Software Developer after 7 months of training in .NET and Angular.",
            "Building and optimizing backend solutions with a focus on scalable, maintainable, and efficient code.",
            "Working on backend features that leverage microservices and Azure, focusing on building scalable and reliable solutions."
        ]
    },
    {
        title: "Web Developer Intern",
        date: "September 2022 - February 2024",
        company: { name: "Humbee Studios", url: "https://www.humbeestudio.com/" },
        location: "Ahmedabad, Gujarat",
        details: [
            "As a versatile professional, I have honed my skills in web development, testing, project management, and social media management to deliver exceptional results in a dynamic and ever-evolving digital landscape.",
            "Teamed on user-centric design strategy in translation of UX and business requirements into coded solutions.",
            "Tested web-based product functionality and delivered iterations to customer."
        ]
    }
];

function renderExperiences(showAll = false) {
    const container = document.getElementById("experienceContainer");
    container.innerHTML = "";
    const toShow = showAll ? experiences : experiences.slice(0, 2);
    toShow.forEach(exp => {
        const div = document.createElement("div");
        div.className = "resume-item";
        div.innerHTML = `
      <h4>${exp.title}</h4>
      <h5>${exp.date}</h5>
      <p><em><a href="${exp.company.url}" target="_blank">${exp.company.name}</a>, ${exp.location}</em></p>
      <ul>
        ${exp.details.map(d => `<li>${d}</li>`).join("")}
      </ul>
    `;
        container.appendChild(div);
    });

    // Show/hide expand button based on experience count
    const expandBtn = document.getElementById("expandExperienceBtn");
    if (experiences.length > 2) {
        expandBtn.style.display = "flex";
    } else {
        expandBtn.style.display = "none";
    }
}

let experienceExpanded = false;
function toggleExperience() {
    experienceExpanded = !experienceExpanded;
    renderExperiences(experienceExpanded);
    document.getElementById("expandText").textContent = experienceExpanded ? "Show Less" : "Show More";
    document.getElementById("expandIcon").className = experienceExpanded ? "bx bx-chevron-up bx-sm" : "bx bx-chevron-down bx-sm";
    // Optional: Add active style when expanded
    const expandBtn = document.getElementById("expandExperienceBtn");
    if (experienceExpanded) {
        expandBtn.classList.add("expanded-experience-btn");
    } else {
        expandBtn.classList.remove("expanded-experience-btn");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    renderExperiences();
    document.getElementById("expandExperienceBtn").addEventListener("click", toggleExperience);
});
