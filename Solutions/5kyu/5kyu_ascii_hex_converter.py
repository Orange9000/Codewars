import re

class Converter():
    @staticmethod
    def to_ascii(h):
        return ''.join(chr(int(c, 16)) for c in re.findall('.{2}', h))
    @staticmethod
    def to_hex(s):
        return ''.join(hex(ord(c)).replace('0x','') for c in s)
