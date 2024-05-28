function countVowels(str) {
  str1 = str.split("");
  let vow = 0;
  str1.forEach((ele) => {
    if (ele in ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]) {
      vow++;
    }
  });
  return vow;
}
