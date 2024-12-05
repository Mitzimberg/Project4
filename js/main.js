document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.page-content').forEach(content => content.classList.remove('active'));
        document.querySelectorAll('.showcase-box').forEach(box => box.classList.remove('active'));

        this.classList.add('active');
        const targetSection = document.querySelector(this.getAttribute('href'));
        targetSection.classList.add('active');

        if (this.getAttribute('href') === '#work') {
            document.querySelector('.showcase-box').classList.add('active');
        }
    });
});

function showSection(sectionClass) {
    document.querySelectorAll('.page-content').forEach(section => {
        section.classList.remove('active');
    });
    document.querySelector(`.${sectionClass}`).classList.add('active');
}

document.querySelectorAll('.showcase img').forEach(img => {
    img.addEventListener('click', function() {
        const name = this.getAttribute('data-name');
        const altText = this.getAttribute('alt');

        const descriptionTitle = document.getElementById('description-title');
        const descriptionText = document.getElementById('description-text');

        descriptionTitle.textContent = name;
        descriptionText.textContent = altText;
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.showcase img');
    const descriptionTitle = document.getElementById('description-title');
    const descriptionText = document.getElementById('description-text');

    images.forEach(img => {
        img.addEventListener('click', () => {
            const name = img.getAttribute('data-name');
            const altText = img.getAttribute('alt');

            descriptionTitle.textContent = name || "No Name";
            descriptionText.textContent = altText || "No Description Available";
        });
    });
});
images.forEach(img => {
    img.addEventListener('click', () => {
        const name = img.getAttribute('data-name');
        const altText = img.getAttribute('alt');
        console.log("Name:", name);
        console.log("Alt Text:", altText);

        descriptionTitle.textContent = name || "No Name";
        descriptionText.textContent = altText || "No Description Available";
    });
});

let scrollArrow = document.querySelector(".scroll-arrow");

window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        scrollArrow.classList.add("hidden");
    }
});

document.addEventListener("scroll", () => {
    const scrollContainer = document.querySelector(".scroll-container");
    const line = document.querySelector(".line");
    const texts = document.querySelectorAll(".hidden-text");
    const images = document.querySelectorAll(".background-image");

    const containerTop = scrollContainer.getBoundingClientRect().top;
    const containerHeight = scrollContainer.offsetHeight;
    const viewportHeight = window.innerHeight;

    const scrollProgress = Math.min(Math.max((viewportHeight - containerTop) / containerHeight, 0), 1);

    const lineHeight = scrollProgress * 100;
    line.style.height = `${lineHeight}%`;

    texts.forEach((text, index) => {
        const revealStart = index * 0.5;
        const revealEnd = revealStart + 0.9;

        if (scrollProgress >= revealStart && scrollProgress <= revealEnd) {
            const localProgress = (scrollProgress - revealStart) / (revealEnd - revealStart);
            text.style.opacity = localProgress;
            text.style.transform = `translateY(${20 * (1 - localProgress)}px)`;

            images[index].style.opacity = localProgress; // Show images with the same progress
        } else if (scrollProgress > revealEnd) {
            text.style.opacity = 1;
            text.style.transform = "translateY(0)";
            images[index].style.opacity = 1; // Fully visible after the reveal range
        } else {
            text.style.opacity = 0;
            text.style.transform = "translateY(20px)";
            images[index].style.opacity = 0; // Hidden before the reveal range
        }
    });
});
