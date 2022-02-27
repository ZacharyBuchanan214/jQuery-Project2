const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];

// Adding Data from the storeItems array of objects to a <p> tag
let j = 0;
storeItems.forEach(function (item, i) {

    if (item.inStock) {

        $('#appendToMe').append(`<div class="inStock"><p class="price">$${item.price}</p> <p class="name">${item.name}</p> <p class="detail">${item.details}</p></div>`);

        $('.price').eq(j).wrap(`<div class="p_wrap"></div>`);
        $('.name').eq(j).wrap(`<div class="p_wrap"></div>`);
        $('.detail').eq(j).wrap(`<div class="p_wrap"></div>`);
        j++;

    }

});

$('#buttonClick').click(function () {
    $('.contentContainer').toggleClass("darkMode");
    $('.inStock').toggleClass("darkMode2");
    $('.product').toggleClass("darkMode3");
    $('.button').toggleClass("darkMode4");
    $('.line').toggleClass("darkMode5");
});