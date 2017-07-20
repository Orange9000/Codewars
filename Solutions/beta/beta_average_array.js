function avgArray(arr) {
  return arr[0].map(function(e,i){
                      var avg = e;
                      for (var j=1; j<arr.length; j++){
                        avg += arr[j][i]
                      }
                      return avg/arr.length
                    }
                    )
}
