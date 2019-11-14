$(function(){ 
var ddData = [
    {
        text: "UK",
        value: 1,
        selected: false,
        selected: true,
        imageSrc: "img/header-images/uk.png"
    },
    {
        text: "UN",
        value: 2,
        selected: false,
        imageSrc: "img/header-images/uk.png"
    },
    {
        text: "RU",
        value: 3,
        selected: false,
        imageSrc: "img/header-images/uk.png"
    },
    {
        text: "RU",
        value: 3,
        selected: false,
        imageSrc: "img/header-images/uk.png"
    },
    {
        text: "RU",
        value: 3,
        selected: false,
        imageSrc: "img/header-images/uk.png"
    },
    {
        text: "RU",
        value: 3,
        selected: false,
        imageSrc: "img/header-images/uk.png"
    }


   
];

$('#deliver__dropdown').ddslick({
    data:ddData,
    width:300,
    imagePosition:"right",
    onSelected: function(selectedData){
    }   
});
});