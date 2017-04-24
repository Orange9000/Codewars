from collections import Counter

TO_NUM = {'A':'2','B':'2','C':'2',
          'D':'3','E':'3','F':'3',
          'G':'4','H':'4','I':'4',
          'J':'5','K':'5','L':'5',
          'M':'6','N':'6','O':'6',
          'P':'7','R':'7','S':'7',
          'T':'8','U':'8','V':'8',
          'W':'9','X':'9','Y':'9'}

def find_duplicate_phone_numbers(phone_numbers):
    return sorted('{}-{}:{}'.format(i[:3],i[3:],j) for i,j in
                  Counter(to_digit_form(s) for s in phone_numbers).most_common()
                      if j>1)
    
    
def to_digit_form(s):
    return ''.join(TO_NUM[x] if x.isalpha() else x for x in
                      filter(lambda x: x.isalnum(), s.upper())
                                                              )
