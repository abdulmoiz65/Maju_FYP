document.getElementById('toggleButton').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const navbar = document.getElementById('navbar');
    const content = document.getElementById('content');
    const toggleButton = document.getElementById('toggleButton');
    
    sidebar.classList.toggle('visible');
    
    if (sidebar.classList.contains('visible')) {
        content.style.marginLeft = '250px';
        navbar.style.marginLeft = '250px';
    } else {
        content.style.marginLeft = '0';
        navbar.style.marginLeft = '2rem';
    }
    
    const barsIcon = toggleButton.querySelector('.fa-bars');
    const closeIcon = toggleButton.querySelector('.fa-close');
    barsIcon.style.display = sidebar.classList.contains('visible') ? 'none' : 'inline';
    closeIcon.style.display = sidebar.classList.contains('visible') ? 'inline' : 'none';
});

// slider 

function changeImage(imageSrc) {
    const mainImage = document.getElementById('currentImage');
    mainImage.style.opacity = '0';
    
    setTimeout(() => {
        mainImage.src = imageSrc;
        mainImage.style.opacity = '1';
    }, 300);
}