from urllib.request import urlopen
import re

def get_member_since(username):
    link = urlopen("https://www.codewars.com/users/" + username).read().decode('utf-8')
    result = re.findall('Member Since:.{,20}20\d{2}', link)[0]
    return result.split(':')[-1].strip('</b>')
