$(document).ready(function(){
  $(".form").submit(function(event){
    event.preventDefault();
    var sudoku = new Sudoku();
    var rows = [];
    var columns = [];
    var squares = [];
    for (var i = 1; i < 10; i++) {
      var row = $(".row"+i).map(function(){return $(this).val();}).get();
      rows.push(row);
    }
    for (var j = 1; j < 10; j++) {
      var column = $(".column"+j).map(function(){return $(this).val();}).get();
      columns.push(column);
    }
    for (var k = 1; k < 10; k++) {
      var square = $(".square"+k).map(function(){return $(this).val();}).get();
      squares.push(square);
    }

    var board = [rows, columns, squares];
    var result = sudoku.checker(board);
    if(result) {
      $("#output").text("That is a valid sudoku solution");
    } else {
      $("#output").text("That is an abomination");
    }
  });
});
