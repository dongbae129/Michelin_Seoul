export const stick = (arr = []) => {
  if (arr.length === 0) {
    return [];
  }
  let test = [];
  arr.map((v, i) => {
    if (v.x <= 50) {
      if (v.y <= 50) {
        test.push(0);
      } else {
        test.push(1);
      }
    } else {
      if (v.y <= 50) {
        test.push(2);
      } else {
        test.push(3);
      }
    }
  });
  return test;
};
export const func_tag = (restaurant) => {
  const tag_arr = restaurant.tag.split(",").map((v) => v.trim());

  const hash_string = tag_arr
    .filter((v) => v)
    .map((v) => "#" + v.trim())
    .join(" ");
  return hash_string;
};

export const moveballbox = () => {
  let moveballtotal = [];
  let arrX = [];
  Array(6)
    .fill(0)
    .map((v, i) => {
      let random = Math.floor(Math.random() * 90);
      arrX.push(random);
    });
  let arrY = [];
  let arrRandomY = [0, 100, 0, 100, 0, 100];
  let i = 0;
  arrX.map((v) => {
    if (v === 0 || v === 100) {
      let randomY = Math.floor(Math.random() * 90);
      arrY.push(randomY);
      return;
    }
    arrY.push(arrRandomY[i]);
    i++;
  });
  arrX.map((v, i) => {
    moveballtotal.push({ x: v, y: arrY[i] });
  });
  return moveballtotal;
};
