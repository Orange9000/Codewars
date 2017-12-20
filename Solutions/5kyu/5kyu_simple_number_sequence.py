def missing(s):
    for i in range(1,len(s)//2):
        check=find(int(s[:i]), s)
        if check: return check
    return -1

        
def find(n, s):
    msng=[]
    for i in range(len(s)):
        if not s: break
        if not s.startswith(str(n)):
            msng.append(n)
        else: s=s.replace(str(n),'',1)
        n+=1
    return msng[0] if len(msng)==1 else False
