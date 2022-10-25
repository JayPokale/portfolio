// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");

// let line = 0;
// const readline = () => {
//   return input[line++].trim();
// };

// let t = parseInt(readline());
// while(t--){

// }

// let i = 1
// while(i++<=5) {
//   setTimeout(() => console.log(i), i * 1000);
// }

// const isPrime = (n) => {
//   let mod = 1
//   for(let i=2; i<n-1;i++){
//     mod*=i
//     mod%=n
//   }
//   if(mod==1) console.log(true)
//   else console.log(false)
// }
// isPrime(123456791)

// function easeInOutQuad(x) {return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2}
// let [i, x, t] = [0, 10, 0];
// const increase = (i, x, t) => {
//   if (t <= 50) {
//     console.log(i);
//     i = Math.round(easeInOutQuad(t++ / 50) * x);
//     setTimeout(() => {increase(i, x, t)}, 100);
//   }
// };
// increase(i,x,t)

// const isDecreasing = (arr) => {
//   let out = true
//   for(let i=1; i<arr.length; i++){
//     if(arr[i]>arr[i-1]){
//       out = false
//       break
//     }
//   }
//   return out
// }

// let len = 5
// let arr = [5,2,3,4,5]
// let temp = [0,2]
// for(let i=0; i<Math.floor(5/2); i++){
//   temp.push(arr[5-i-1] - arr[i])
// }
// if(temp.some( x => x < 0 )) console.log(-1)
// else if(isDecreasing(temp)) console.log(temp[0])
// else console.log(-1)

// let arr = [2, 1, 3, 3,4,2, 3, 4];
// const result = arr.reduce((a, b) => {
//   if (a[b]) {
//     a[b] += 1;
//     return a
//   }
//   a[b] = 1;
//   return a;
// }, {});
// console.log(arr.length - Math.max(...Object.values(result)))

// function nCr(n, r) {
//   if (r > n) return -1;
//   if (n == r) return 1;
//   if (r == 0) return 1;
//   return nCr(n - 1, r - 1) + nCr(n - 1, r);
// }

// const nCr = (n, r) => {
//   if (r > n / 2) r = n - r;
//   let out = 1;
//   for (let k = 0; k < r; k++) {
//     out *= (n - k) / (k + 1);
//   }
//   return out;
// };

// const pow2 = (m) => {
//   let out = 1
//   for(let k=0; k<m; k++){
//     out *= 2
//     out %= 1000000007
//   }
//   return out
// }

// let [n, m] = [100, 10];
// let cosVal = 2 * Math.cos((m * Math.PI) / 3);
// let F1 = (1 / 2) * ((pow2(m+1) - 1) / 3 + cosVal);
// let F2 = (1 / 2) * ((pow2(m+1) - 1) / 3 - cosVal);
// let F3 = (1 / 3) * (pow2(m) + cosVal) - 1;
// console.log(F1,F2,F3)

// if (n != 0 || m != 0) {
//   let ans = 0;
//   for (let i = 0; i <= n; i++) {
//     if (i % 3 == 0) ans += nCr(n, i) * F3;
//     else if (i % 3 == 1) ans += nCr(n, i) * F2;
//     else ans += nCr(n, i) * F1;
//     ans %= 1000000007;
//   }
//   console.log(Math.round(ans) + 1);
// } else console.log(0);

// const permutations = (a, n) => {
//   if(n==1) return 1;
//   let ans = 1
//   for(let i=2; i<=n; i++){
//     ans *= i
//   }
//   let counter = 1
//   for(let i=1; i<=n; i++){
//     if(a[i-1]==a[i]){
//       counter++
//       ans /= counter
//     } else {counter = 1}
//   }
//   return ans
// }

// const combination = (temp, index, r, end) => {
//   let temp2 = []
//   if (index == r){
//     for (let i=0; i<r; i++){
//       temp2.push(temp[i]+1)
//     }
//     let tempAns = temp2.reduce((a, b) => a & b)
//     if (tempAns != 0){
//       ans += tempAns * permutations(temp2, r)
//     }
//     return
//   }
//   for( let i=0; i<=end; i++){
//     temp[index] = i;
//     combination(temp, index+1, r, i)
//   }
// }
// let temp = []
// let m = 20
// let n = 10
// let ans = 0
// combination(temp, 0, n, m-1)
// console.log(ans)

// console.log([...Array(3).keys()].map(n=>n+1))

// const permutations = (a, n) => {
//   if(n==1) return 1;
//   let ans = 1
//   for(let i=2; i<=n; i++) ans *= i
//   let counter = 1
//   for(let i=1; i<=n; i++){
//     if(a[i-1]==a[i]){
//       counter++
//       ans /= counter
//     } else {counter = 1}
//   }
//   return ans
// }
// let arr = [1,1, 2]
// console.log(permutations(arr, arr.length))

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");

// let line = 0;
// const readline = () => {
//   return input[line++].trim();
// };

// const T = parseInt(readline());
// for (let i = 0; i < T; i++) {

// const combination = (temp, arr, index, r) => {
//   let temp2 = []
//   if (index == r){
//     for (let i=0; i<r; i++){
//       temp2.push(arr[temp[i]])
//     }
//     ans += (temp2.reduce((a, b) => a & b))
//     return
//   }
//   for( let i=0; i<arr.length; i++){
//     temp[index] = i;
//     combination(temp, arr, index+1, r,i)
//   }
// }

//   let values = readline().split(' ').map(e => parseInt(e))

//   let temp = [];
//   let arr = [...Array(values[1]).keys()].map(n=>n+1);
//   let ans = 0;
//   combination(temp, arr, 0, values[0]);
//   console.log(ans);
// }

// const fs = require("fs");
// const input = fs.readFileSync(0, "utf-8").trim().split("\n");

// let line = 0;
// const readline = () => {
//   return input[line++].trim();
// };

// let ans

// const permutation = (a, n) => {
//   if(n==1) return 1;
//   let ans = 1
//   for(let i=2; i<=n; i++) ans *= i
//   let counter = 1
//   for(let i=1; i<=n; i++){
//     if(a[i-1]==a[i]){
//       counter++
//       if(counter>1){
//         ans /= counter
//       }
//     } else {counter = 1}
//   }
//   return ans
// }

// const combination = (temp, index, r, end) => {
//   let temp2 = []
//   if (index == r){
//     for (let i=0; i<r; i++){
//       temp2.push(temp[i]+1)
//     }
//     let tempAns = temp2.reduce((a, b) => a & b)
//     if (tempAns != 0){
//       ans += (tempAns * permutation(temp2, r))%998244353
//       if(ans>998244353){ans %= 998244353}
//     }
//     return
//   }
//   for( let i=0; i<=end; i++){
//     temp[index] = i;
//     combination(temp, index+1, r, i, end)
//   }
// }

// const T = parseInt(readline());
// for (let i = 0; i < T; i++) {

// let values = readline().split(' ').map(e => parseInt(e))
// let temp = []
// let n = values[1]
// ans = 0
// combination(temp, 0, values[0], n-1)
// console.log(ans)

// }

// let m = 3
// let n = 3
// for(let i=1; i<=n; i++){
//   for(let j=1; j<=m; j++){

//   }
// }

// function factorial(n) {
//   if (n == 0) return 1;
//   if (n < 0) return -1;
//   let res = 1;
//   for (let i = 2; i < n + 1; ++i) res *= i;
//   return res;
// }
// function nCr(n, r) {
//   if (r > n) return -1;
//   if (n == r) return 1;
//   if (r == 0) return 1;
//   return nCr(n - 1, r - 1) + nCr(n - 1, r);
// }
// function Skn(k, n) {
//   let ans = 0;
//   for (let i = 0; i < n; i++) {
//     ans += (-1) ** i * nCr(n, i) * (n - i) ** k;
//   }
//   return ans;
// }

// function getAllSubsets(m, n) {
//   const subsets = [[]];

//   for (let el = 1; el <= m; el++) {
//     const last = subsets.length - 1;
//     for (let i = 0; i <= last; i++) {
//       subsets.push([...subsets[i], el]);
//     }
//   }
//   return subsets.filter((e) => e.length <= n);
// }

// let m = 3;
// let n = 2;
// let sets = getAllSubsets(m, n);
// let ans = 0;
// for (let i = 1; i < sets.length; i++) {
//   let bitWiseAnd = sets[i].reduce((a, b) => a & b);
//   let noOfPermutaion = Skn(n, sets[i].length);
//   ans += bitWiseAnd * noOfPermutaion;
// }
// console.log(ans);

// let m = 3;
// let n = 2;
// let arr = [...Array(m).keys()].map((n) => n + 1);
// let ans = 0
// for (let i = 1; i < n; i++) {
//   let tempArr = []
//   for (let j = 0; j < arr.length; j++) {
//     for (let k = 1; k <= m; k++) {
//       let val = arr[j] & k;
//       if (val) {
//         ans += val;
//         tempArr.push(val);
//       }
//     }
//     ans %= 998244353
//   }
//   arr = tempArr
// }
// console.log(ans)

// let m = 3;
// let n = 3;
// let temp = [];
// for(let i=1; i<=m; i++){
//   for(let j=1; j<=m; j++){
//     temp.push(i&j);
//     console.log(i,j)
//   }
// }
// let sum = 0;
// for(let i=0; i<temp.length; i++){
//   sum+=temp[i];
// }
// console.log(sum)

// const power = (b,s) => {
//   s = 1;
//   while (n) {
//     if (n % 2 == 1) {
//       s = (s * b) % 998244353;
//       b = (b * b) % 998244353;
//     }
//     n = Math.floor(n/2)
//   }
//   return s;
// };
// const count = (i,j) => {
//   return ((i/(1<<(j+1)))<<j) + (i%(1<<(j+1))-(1<<j)+1);
// }

// let m = 10
// let n = 5
// let s = 0
// for(let i=0; i<31; ++i){
//   s=(s+power(count(m,i),n)<<i)%998244353;
// }
// console.log(s)
