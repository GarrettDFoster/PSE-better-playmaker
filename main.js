$('#XLabel').parent().html(
    '<tr>' +
        '<td>' +
            '<label for="XLabel" style="font-weight: bold;">&nbsp;x:</label>' +
            '<input style="width:50px;" id="XLabel" name="XLabel">&nbsp;' +
        '</td>' +
        '<td>' +
            '<label for="YLabel" style="font-weight: bold;">&nbsp;y:</label>' +
            '<input style="width:50px;" id="YLabel" name="YLabel">&nbsp;' +
        '</td>' +
    '</tr>'
);

//turn inputs into spinners
$('#XLabel').spinner({ step: 10 }).change(function () {
    setCursor($('#XLabel').spinner('value'), $('#YLabel').spinner('value'));
});
$('#YLabel').spinner({ step: 10 }).change(function () {
    setCursor($('#XLabel').spinner('value'), $('#YLabel').spinner('value'));
});

//attach changed callback to textbox for up and down buttons
$('.ui-spinner-button').click(function () {
    $(this).siblings('input').change();
});

var setX = function (x) {
    CurX = x;

    $("#XLabel").html("<span style='color:#0000FF;'>" + CurX + "</span>");
    NewX = (x + 5800) / 20;

    //update cursor spot
    $("#MySpot").css({
        left: NewX
    });
}

var setY = function (y) {
    CurY = y
    $("#YLabel").html("<span style='color:#0000FF;'>" + CurY + "</span>");

    NewY = (y + (YOffset * 20)) / 20;

    //update cursor spot
    $("#MySpot").css({
        top: NewY
    });
}

var setCursor = function (x, y) {
    setX(x);
    setY(y);
}

function UpdateXY() {
    CurX = (NewX * 20) - 5800;
    CurY = (NewY * 20) - (YOffset * 20);
    $("#XLabel").spinner('value', CurX);
    $("#YLabel").spinner('value', CurY);
}