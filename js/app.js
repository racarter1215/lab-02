'use strict';

let imageGallery = [];

function ImagePool(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    imageGallery.push(this);
}

const AddValuesToImages = (item) => {
    let $template = $('#photo-template').html();
    let $target = $('#main');
    $target.append(Mustache.render($template, item));
}

const DropDownMenu = () => {
    imageGallery.forEach((value) => {
        $('select').append(
            `<option value="${value.keyword}">${value.keyword}</option>`
        );
    });
};

$.ajax(`data/page-1.json`).then( data => {
    data.forEach((value) => {
        new ImagePool(value.image_url, value.title, value.description, value.keyword, value.horns);
    });
    imageGallery.forEach( value => {
        AddValuesToImages(value);
    });
    DropDownMenu();
});

function clickHandler(event) {
    $('.enact').hide();
    let id = `.${event.target.value}`;
    $(id).show();
};

$('select').on('click', clickHandler);

