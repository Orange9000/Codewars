const persistence = (num, r=0) => String(num).length == 1 ? r : persistence(String(num)
                                                                            .split('')
                                                                            .reduce((x,y) => parseInt(x) * parseInt(y)), r+1)
