function find(object, path) {
  try { 
    return path.includes('.') 
                  ? 
           find(
                object[path.split('.')[0]],
                path.replace(/[^\.]+\./, '')
                )
                  :
           object.hasOwnProperty(path) ? object[path] : undefined
      }
  catch (TypeError) { return undefined }
}
