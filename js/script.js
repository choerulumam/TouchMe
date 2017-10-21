var x = Math.floor((Math.random() * 95) + 1);
var y = Math.floor((Math.random() * 70) + 1);

var missed= ["UPS!!", "Focus!!", "Huh!", "you can do it" ];

var i = 0; // trigger random number for x
var j = 0; // trigger random number for y

var a = 0; // total touched
var b = 1; // total untouched

var c = 0; // missed message itteration


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function reArr() {
    if (i != x) {
        x = Math.floor((Math.random() * 95) + 1);
    }
    if (j != y) {
        y = Math.floor((Math.random() * 70) + 1);
    }
}

$(document).ready(function(){
    $('.ball-action').hide();
});

$(document).on('click', '#start', function(){
   $('.ready').fadeOut(1000);
    $('.ball-action').fadeIn(1000);
});


$(document).on('mouseover', '.ball', function () {
    if(c > missed.length-1) {
        c = 0;
    };
    console.log(missed[c]);
    $('.stats').html("<strong>"+missed[c]+"</strong>");
    $('.stats').css('background-color', getRandomColor());
    c++;
    reArr(x, y);
    $(this).animate({
        left: x + '%',
        top: y + '%',
    }, 10);
    $('#untouch').val(b++);
    $(this).css('background-color', getRandomColor());
    console.log('left : ' + x);
    console.log('top : ' + y);
});


$(document).on('click', '.ball', function () {
    a+=1;
    $('#flash').delay(500).fadeIn('normal', function() {
        $(this).text(a + "hit");
        $(this).delay(2500).fadeOut();
    });
    $(this).hide();
    $(this).fadeIn().delay(100);
    $('#touch').val(a);
});
