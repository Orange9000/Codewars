import re

count_smileys = lambda arr: [bool(re.fullmatch('(:|;)(-|~)?(\)|D)', x)) for x in arr].count(1)
