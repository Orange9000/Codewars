class FileNameExtractor {
    static extractFileName (inp) {
        return inp.replace(/(\d+_)([^.]+.[^.]+)(.+)/, `$2`)
    }
}
