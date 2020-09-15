let hobbies_header = document.getElementById('hobbies_header');

hobbies_header.onclick = function () {
    let hobbies_links = document.getElementById('hobbies_links');
    let hobbies_header_indicator = document.getElementById('hobbies_header_indicator');

    if (hobbies_links.style.maxHeight !== '0px' && hobbies_links.style.maxHeight !== '') {
        hobbies_links.style.maxHeight = null;
        hobbies_header_indicator.classList.remove('fa-chevron-circle-down');
        hobbies_header_indicator.classList.add('fa-chevron-circle-up');
    } else {
        hobbies_links.style.maxHeight = hobbies_links.scrollHeight + "px";
        hobbies_header_indicator.classList.remove('fa-chevron-circle-up');
        hobbies_header_indicator.classList.add('fa-chevron-circle-down');
    }
};
