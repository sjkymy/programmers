function solution(sizes) {
    const width = sizes.map((size) => {
        size.sort((a,b) => b - a);
        return size[0]
    });
    const heigth = sizes.map((size) => {
        size.sort((a,b) => a - b);
        return size[0]
    });
    return Math.max(...width) * Math.max(...heigth)
}