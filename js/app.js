'use strict';

let imageGallery = [];

$.ajax('data/page-1.json', console.log('Data Pulled'));

function ImagePool(image_url, title, description, keyword, horns) {
    this.image_url = image_url;
    this.title = title;
    this.description = description;
    this.keyword = keyword;
    this.horns = horns;
    imageGallery.push(this);
}

// ImagePool.prototype.render = () => {
// $('#photo-template').append(`
//     <h2>${this.title}</h2>
//     <img src=${this.image_url}>
//     <p>${this.description}</p>
//     <p>${this.keyword}</p>
//     <p>${this.horns}</p>
// `);
// }

console.log($.ajax('data/page-1.json'));

const AddValuesToImages = (item) => {
$('#photo-template').append(`
    <article class="horns ${item.keyword}">
    <h2>${item.title}</h2>
    <img src=${item.image_url}>
    <p>${item.description}</p>
    <p>${item.keyword}</p>
    <p>${item.horns}</p>
    `);
}

$.ajax('data/page-1.json').then(data => {
data.forEach(addValuesToImages);
});

const DropDownMenu = () => {
    imageGallery.forEach((value) => {
        $('select').append(
            `<option value="${value.keyword}">${value.keyword}</option>`
        );
    });
};

$.ajax('data/page-1.json').then( data => {
    data.forEach((value) => {
        new ImagePool(value.image_url, value.title, value.description, value.keyword, value.horns);
    });
    imageGallery.forEach( value => {
        AddValuesToImages(value);
    });
    DropDownMenu();
});

function clickHandler(event) {
    $('.horns').hide();
    let id = `.${event.target.value}`;
    $(id).show();
};

$('select').on('click', clickHandler);

