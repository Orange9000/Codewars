redarr=arr=>[...new Set(arr)].sort().map((e,i)=>[i,e]).reduce(function (obj,n){obj[n[0]]=n[1]; return obj;},{})
