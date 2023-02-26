let arr = [2,1,3,5,7,6,9,8];

const findGretest = (arr, n) =>{
	if(arr.length > 0){
    arr.sort();
  	arr.reverse();
    return arr[n-1]
  }else{
  	return 0;
  }
}
const max = findGretest(arr, 5);
console.log(max);