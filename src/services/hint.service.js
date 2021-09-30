const STORAGE_KEY = 'hints'

export const hintsService = {
    save,
    get
}

function save(action) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(action))
}

function get() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) === null ? true : localStorage.getItem(STORAGE_KEY))
}