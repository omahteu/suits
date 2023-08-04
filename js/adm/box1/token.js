export function token() {
    var tokenize = Math.random().toString(16).substring(2) + Math.random().toString(32).substring(2) + Math.random().toString(32).substring(2) + Math.random().toString(32).substring(2)
    document.getElementById('token').value = tokenize
}