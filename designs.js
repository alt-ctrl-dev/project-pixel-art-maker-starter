var color;

/**
* @description creates a table grid using the parameters provided
* @param {number} height height of the grid
* @param {number} width width of the grid
*/
function makeGrid(height, width) {
    var table = $("#pixel_canvas");
    table.empty();
    for (var row = 0; row < height; row++) {
        var table_row = $("<tr></tr>");
        for (var column = 0; column < width; column++) {
            table_row.append("<td></td>");
        }
        table.append(table_row);
    }
}

$(function () {
    //Initially save the color when document is ready
    color = $("#colorPicker").val();
    $("#colorPicker").change(function () {
        color = $(this).val();
    })

    $("#sizePicker").submit(function (event) {
        event.preventDefault();
        makeGrid($("#input_height").val(),$("#input_width").val());
    })

    $("#pixel_canvas").on("click", "td", function (evt) {
        $(evt.target).css("background-color", color);
    })
});