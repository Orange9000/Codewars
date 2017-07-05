def calculate_1RM(w, r):
    return {0:None,1:w}.get(r, max(map(round,(w*(1+r/30),100*w/(101.3-2.67123*r), w*pow(r,0.1)))))
