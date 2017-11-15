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

var Sudoku = require('./../js/Sudoku.js').sudokuModule;

describe('checker', function() {
  it('should check if number does not appear more than once in a row/colum/square', function() {
    var row = [1,2,3,4,5,6,7,8,9];
    var rows = [row];
    var column = [1,2,3,4,5,6,7,8,9];
    var columns = [column];
    var square = [1,2,3,4,5,6,7,8,9];
    var squares = [square];
    var board = [rows, columns, squares];
    var sudoku = new Sudoku();
    expect(sudoku.checker(board)).toEqual(true);
  });
});
describe('checker', function() {
  it('should check if number does appear more than once in a row/colum/square', function() {
    var row = [1,2,3,4,5,6,7,7,9];
    var rows = [row];
    var column = [1,2,3,4,5,6,7,7,9];
    var columns = [column];
    var square = [1,2,3,4,5,6,7,7,9];
    var squares = [square];
    var board = [rows, columns, squares];
    var sudoku = new Sudoku();
    expect(sudoku.checker(board)).toEqual(false);
  });
});
describe('checker', function() {
  it('should check if number does appear more than once on the board', function() {
    var row1 = [1,2,3,4,5,6,7,7,9];
    var row2 = [1,2,3,4,5,6,7,7,9];
    var row3 = [1,2,3,4,5,6,7,7,9];
    var row4 = [1,2,3,4,5,6,7,7,9];
    var row5 = [1,2,3,4,5,6,7,7,9];
    var row6 = [1,2,3,4,5,6,7,7,9];
    var row7 = [1,2,3,4,5,6,7,7,9];
    var row8 = [1,2,3,4,5,6,7,7,9];
    var row9 = [1,2,3,4,5,6,7,7,9];
    var rows = [row1,row2,row3,row4,row5,row6,row7,row8,row9];
    var column1 = [1,2,3,4,5,6,7,7,9];
    var column2 = [1,2,3,4,5,6,7,7,9];
    var column3 = [1,2,3,4,5,6,7,7,9];
    var column4 = [1,2,3,4,5,6,7,7,9];
    var column5 = [1,2,3,4,5,6,7,7,9];
    var column6 = [1,2,3,4,5,6,7,7,9];
    var column7 = [1,2,3,4,5,6,7,7,9];
    var column8 = [1,2,3,4,5,6,7,7,9];
    var column9 = [1,2,3,4,5,6,7,7,9];
    var columns = [column1,column2,column3,column4,column5,column6,column7,column8,column9];
    var square1 = [1,2,3,4,5,6,7,7,9];
    var square2 = [1,2,3,4,5,6,7,7,9];
    var square3 = [1,2,3,4,5,6,7,7,9];
    var square4 = [1,2,3,4,5,6,7,7,9];
    var square5 = [1,2,3,4,5,6,7,7,9];
    var square6 = [1,2,3,4,5,6,7,7,9];
    var square7 = [1,2,3,4,5,6,7,7,9];
    var square8 = [1,2,3,4,5,6,7,7,9];
    var square9 = [1,2,3,4,5,6,7,7,9];
    var squares = [square1,square2,square3,square4,square5,square6,square7,square8,square9];
    var board = [rows, columns, squares];
    var sudoku = new Sudoku();
    expect(sudoku.checker(board)).toEqual(false);
  });
});
describe('checker', function() {
  it('should check if number does appear more than once on the board', function() {
    var row1 = [1,2,3,4,5,6,7,8,9];
    var row2 = [1,2,3,4,5,6,7,8,9];
    var row3 = [1,2,3,4,5,6,7,8,9];
    var row4 = [1,2,3,4,5,6,7,8,9];
    var row5 = [1,2,3,4,5,6,7,8,9];
    var row6 = [1,2,3,4,5,6,7,8,9];
    var row7 = [1,2,3,4,5,6,7,8,9];
    var row8 = [1,2,3,4,5,6,7,8,9];
    var row9 = [1,2,3,4,5,6,7,8,9];
    var rows = [row1,row2,row3,row4,row5,row6,row7,row8,row9];
    var column1 = [1,2,3,4,5,6,7,8,9];
    var column2 = [1,2,3,4,5,6,7,8,9];
    var column3 = [1,2,3,4,5,6,7,8,9];
    var column4 = [1,2,3,4,5,6,7,8,9];
    var column5 = [1,2,3,4,5,6,7,8,9];
    var column6 = [1,2,3,4,5,6,7,8,9];
    var column7 = [1,2,3,4,5,6,7,8,9];
    var column8 = [1,2,3,4,5,6,7,8,9];
    var column9 = [1,2,3,4,5,6,7,8,9];
    var columns = [column1,column2,column3,column4,column5,column6,column7,column8,column9];
    var square1 = [1,2,3,4,5,6,7,8,9];
    var square2 = [1,2,3,4,5,6,7,8,9];
    var square3 = [1,2,3,4,5,6,7,8,9];
    var square4 = [1,2,3,4,5,6,7,8,9];
    var square5 = [1,2,3,4,5,6,7,8,9];
    var square6 = [1,2,3,4,5,6,7,8,9];
    var square7 = [1,2,3,4,5,6,7,8,9];
    var square8 = [1,2,3,4,5,6,7,8,9];
    var square9 = [1,2,3,4,5,6,7,8,9];
    var squares = [square1,square2,square3,square4,square5,square6,square7,square8,square9];
    var board = [rows, columns, squares];
    var sudoku = new Sudoku();
    expect(sudoku.checker(board)).toEqual(true);
  });
});

function Sudoku() {

}

Sudoku.prototype.checker = function(board) {
  var valid = true;
  board.forEach(function(section){
    section.forEach(function(item){
      var array = [];
      for (var i = 0; i < 9; i++) {
        for (var j = 0; j < array.length; j++) {
          if(item[i] === array[j])
          {
            valid = false;
            break;
          }
        }
        if(valid === false) {
          break;
        }
        array.push(item[i]);
      }
    });
  });
  return valid;
};

exports.sudokuModule = Sudoku;
