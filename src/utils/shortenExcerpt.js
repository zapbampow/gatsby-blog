function shortenExcerpt(excerpt) {
    const string = excerpt.slice(3, 150);
    const arr = string.split(' ').slice(0, 16);
    const newString = arr.join(' ');
    return `${newString} ...`
}

export default shortenExcerpt;