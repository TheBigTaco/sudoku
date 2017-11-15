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
