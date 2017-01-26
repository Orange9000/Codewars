import re

is_mac_48_address = lambda address: bool(re.fullmatch('-'.join(['[0-9A-F]{2}']*6), address))
