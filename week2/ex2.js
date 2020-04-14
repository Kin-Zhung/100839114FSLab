
const makeUpperCase = (words) => {
    return new Promise((resolve, reject) => {
        out = []
        for (word of words) {
            if (typeof word !== 'string') {
                reject('Not all items in the array are strings!');
            }
            out.push(word.toUpperCase());
        }
        resolve(out);
    });
}

const sortWords = (words) => {
    return new Promise((resolve, reject) => {
        resolve(words.sort());
    });
}

