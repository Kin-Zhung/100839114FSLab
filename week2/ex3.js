const p1 = 101;
const p2 = "follow the white";
const p3 = new Promise(function(resolve, reject) {
    resolve("rabbit... neo");
});

Promise.all([p1, pr2, pr3])
    .then((values) => { console.log(values); });
