document.addEventListener('DOMContentLoaded', () => {
    const titles = [
        'AI & Machine Learning',
        'Student at SVECW',
        'MERN Stack Developer',
        'Problem Solver'
    ];
    let index = 0;
    let charIndex = 0;
    const titleElement = document.getElementById('rotating-title');

    function typeTitle() {
        if (charIndex < titles[index].length) {
            titleElement.textContent += titles[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeTitle, 100); // Adjust typing speed here
        } else {
            setTimeout(() => {
                titleElement.textContent = '';
                charIndex = 0;
                index = (index + 1) % titles.length;
                setTimeout(typeTitle, 500); // Adjust delay before next title here
            }, 1000); // Adjust pause before clearing the text here
        }
    }

    typeTitle();

    // Event listener for navbar clicks
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const sectionId = link.getAttribute('href').substring(1);
            showSection(sectionId);
            scrollToSection(sectionId);
        });
    });
});

function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function showSection(sectionId) {
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

function downloadResume() {
    const link = document.createElement('a');
    link.href = 'Jaswanthi_resume.pdf';
    link.download = 'Jaswanthi_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
