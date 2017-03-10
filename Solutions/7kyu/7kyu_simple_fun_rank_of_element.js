const rankOfElement = (arr, i) => arr.slice(0, i).map(d => d <= arr[i] ? 1 : 0).concat(arr.slice(i+1, arr.length).map(d => d < arr[i] ? 1 : 0)).reduce((a,b)=>a+b)
