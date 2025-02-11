import "./style.css";

function knightMoves(start, end) {
  const knightMoves = [
    [2, 1],
    [2, -1],
    [-2, 1],
    [-2, -1],
    [1, 2],
    [1, -2],
    [-1, 2],
    [-1, -2],
  ];

  function isValidMove(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }

  let queue = [[start[0], start[1], [start]]];
  let visited = new Set();
  visited.add(start.toString());

  while (queue.length > 0) {
    let [x, y, path] = queue.shift();

    if (x === end[0] && y === end[1]) {
      console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
      path.forEach((step) => console.log(step));
      return path;
    }

    for (let [dx, dy] of knightMoves) {
      let nx = x + dx;
      let ny = y + dy;

      if (isValidMove(nx, ny) && !visited.has([nx, ny].toString())) {
        visited.add([nx, ny].toString());
        queue.push([nx, ny, [...path, [nx, ny]]]);
      }
    }
  }

  return [];
}

knightMoves([0, 0], [0, 1]); // Example
