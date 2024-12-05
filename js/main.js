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
