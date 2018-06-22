import re

class FileNameExtractor:
    def extract_file_name(inp):
        return re.match('\d+_([^.]+.[^.]+)', inp).group(1)
