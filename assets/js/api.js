async function fetchProfileData() {
    const url = "https://raw.githubusercontent.com/eduardofloriani/portfolio-js/main/data/profile.jSON"
    const fetching = await fetch(url)
    return await fetching.json()
}