function password(str) {
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}/.test(str)
}
