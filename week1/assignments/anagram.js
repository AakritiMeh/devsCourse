function anagram(str1, str2) {
  let ans;
  if (str1.length === str2.length) {
    s1 = str1.split("");
    s2 = str2.split("");
    s1.sort();
    //console.log(s1);
    s2.sort();
    ans = true;
    //console.log(s2);
    s1.forEach((ele, idx) => {
      if (ele !== s2[idx]) {
        //console.log(ele);
        //console.log(s2[idx]);
        ans = false;
      }
    });
    return ans;
  } else {
    return false;
  }
}

let ans = anagram("hello", "leojh");
console.log(ans);

//forEach doe not support "break", "continue", or "return" statements like the traditional loops
