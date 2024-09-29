document.getElementById('revealButton').addEventListener('click', function() {
    var hiddenContent = document.getElementById('hiddenContent');
    if (hiddenContent.style.display === 'none' || hiddenContent.style.display === '') {
        hiddenContent.style.display = 'block'; // Show the content
    } else {
        hiddenContent.style.display = 'none'; // Hide the content
    }
});