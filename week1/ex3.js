const slicer = (input) => {
    return (input.slice(-3) + input.slice(0,-3))
}

console.log(slicer("Python"));