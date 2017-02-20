from bs4 import BeautifulSoup as BS
from urllib.request import urlopen

Url = 'https://www.codewars.com/users/leaderboard'

def get_honor(username):
    html = urlopen(Url).read().decode('utf-8')
    soup = BS(html, 'html.parser')
    
    for i in soup.find_all('tr'):
        try:
            a     = str(i).split('</td>')
            user  = a[0][19:(a[0].find('>')-1)]
            if user == username:
                return int(a[-2][4:])
        except:
            continue
    return "Username not found!"
