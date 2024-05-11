function includeHTML(file, container) {
    $(container).load(file);
}

includeHTML('/layout/header.html', '#header');
includeHTML('/layout/footer.html', '#footer')
includeHTML('/layout/besties.html', '#besties')
includeHTML('/layout/story.html', '#story')