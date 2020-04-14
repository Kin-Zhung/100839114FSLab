const compareToTen = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 10) {
            resolve(num + ' is greater than 10!');
        }
        if (num < 10) {
            reject(num + ' is less than 10.');
        }
    });
}

compareToTen(30)
    .then(result => console.log(result))
    .catch(error => console.log(error));
    
compareToTen(5)
    .then(result => console.log(result))
    .catch(error => console.log(error));