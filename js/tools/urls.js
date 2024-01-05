//export var url = window.location.host


export default function make_url(folder, file) {
    return `${location.origin}/suits/php/${folder}/${file}`
}
