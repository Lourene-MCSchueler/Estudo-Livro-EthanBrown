const fortuneCookies = [
    "Conquer your fears or they will conquer you",
    "River needs springs",
    " Do not fear what you don't know",
    "You will have a pleasant surprise",
    "Whenever possible, keep it simple",
]

exports.getFortune = () => {
    const idx = Math.floor(Math.random() * fortuneCookies.length)
    return fortuneCookies[idx]
}