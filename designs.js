var height, width, color;

function makeGrid() {
    var table = $("#pixel_canvas");
    table.empty();
    for (var row = 0; row < height; row++) {
        var table_row = $("<tr></tr>")
        for (var column = 0; column < width; column++) {
            table_row.append("<td></td>")
        }
        table.append(table_row);
    }
}

$(function () {
    color = $("#colorPicker").val();
    console.log(color)
    $("#colorPicker").change(function () {
        color = $(this).val();
        console.log(color)
    })

    $("#sizePicker").submit(function (event) {
        event.preventDefault()
        height = $("#input_height").val();
        width = $("#input_width").val();
        makeGrid();
    })

    $("#pixel_canvas").on("click", "td", function (evt) {
        $(evt.target).css("background-color", color);
    })

})