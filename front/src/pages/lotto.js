function lottoNum(array, num) {
  if (!array || null) {
    var array = [];
  }
  let n = Math.floor(Math.random() * 25) + 1;
  if (array.length < num && array.indexOf(n) < 0) {
    array.push(n);
    return lottoNum(array, num);
  } else {
    if (array.length < num) {
      return lottoNum(array, num);
    }
    return array;
  }
}
function arrcheck(arrX, arrY, point) {
  while (true) {
    for (let i = 0; i < arrX.length; i++) {
      for (let j = 0; j < arrY.length; j++) {
        if (i === j) break;
        if (point[i].x + 2 >= point[j].x) {
          if (point[i].x - 2 <= point[j].x) {
            if (point[i].y + 2 >= point[j].y) {
              if (point[i].y - 2 <= point[j].y) {
                point.splice(j, 1);
                let randomX = lottoNum(null, 1)[0];
                let randomY = lottoNum(null, 1)[0];
                point.splice(j, 0, { x: randomX, y: randomY });
                return arrcheck(arrX, arrY, point);
              }
            }
          }
        }
      }
    }
    break;
  }
}
function check() {
  let arrY = lottoNum(null, 5);
  let arrX = lottoNum(null, 5);
  let point = [];
  for (let pp in (arrX, arrY)) {
    point.push({ x: arrX[pp], y: arrY[pp] });
  }
  arrcheck(arrX, arrY, point);
}
check();
