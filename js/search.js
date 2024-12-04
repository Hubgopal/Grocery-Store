const searchIcon = document.getElementById('searchIcon');
const searchBox = document.getElementById('searchBox');

// Show search box with fade-in when hovering over search icon
searchIcon.addEventListener('mouseenter', () => {
    searchBox.classList.add('show'); // Add 'show' class to fade in
});

// Hide search box with fade-out when it's empty and cursor leaves
searchBox.addEventListener('blur', () => {
    if (searchBox.value.trim() === '') {
        searchBox.classList.remove('show'); // Remove 'show' class to fade out
    }
});

// Keep search box visible while typing
searchBox.addEventListener('input', () => {
    if (searchBox.value.trim() !== '') {
        searchBox.classList.add('show'); // Keep visible while typing
    }
});
