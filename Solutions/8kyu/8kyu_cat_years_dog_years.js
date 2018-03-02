var humanYearsCatYearsDogYears = function(hy) {
  return [hy,
          15+{[hy>1]:9,[hy<=1]:0}[true]+4*({[(hy-2)>0]:hy-2,[(hy-2)<=0]:0}[true]),
          15+{[hy>1]:9,[hy<=1]:0}[true]+5*({[(hy-2)>0]:hy-2,[(hy-2)<=0]:0}[true])
          ]
}
