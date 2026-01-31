export default shuffleObject = (objRaw) => {
  let shuffledObj = {};
  var keys = Object.keys(objRaw);
    keys.sort(function(a,b) {
        return Math.random()- 0.5;
    });
    keys.forEach(function(k) {
        shuffledObj[k] = objRaw[k];
    });
  return shuffledObj;
}
