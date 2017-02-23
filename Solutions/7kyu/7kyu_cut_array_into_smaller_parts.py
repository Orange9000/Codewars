def makeParts(arr, chunkSize):
    return [arr[i:i+chunkSize] for i in range(0, len(arr), chunkSize)]
