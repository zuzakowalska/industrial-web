'use strict';
var w1 = $("#carousel").innerWidth();
var w2 = $("#carousel li").outerWidth(true);
var windowWidth = $(window).width()

$(function () {

    $(window).bind("resize", function () {
        setClock();
    });
    setClock();
});

function setClock() {
    if (windowWidth > 768) {
        var clock = setInterval(function () {
            slideObject();
        }, 3000);
        slideObject();
        console.log(windowWidth);
    } else {
        clearInterval(clock);
    }
}

function slideObject() {
    var firstContent = $("#carousel li:first").html();
    $("#carousel").append("<li>" + firstContent + "</li>");
    moveLeft();

    //        if (w1 <= w2) {
    //            moveTop();
    //        } else {
    //            moveLeft();
    //        }

    console.log("w1 = " + w1 + ", w2 = " + w2);
}

function moveLeft() {
    var wx = $("#carousel li:first").innerWidth();
    $("#carousel li:first").animate({
        marginLeft: -wx
    }, 1500, function () {
        deleteFirst();
    });
}

//    function moveTop() {
//        $("#carousel li:first").animate({
//            marginTop: "300px"
//        }, 1000, function () {
//            deleteFirst();
//        });
//    }

function deleteFirst() {
    $("#carousel li:first").remove();
}