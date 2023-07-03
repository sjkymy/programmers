function solution(s) {
    let strange = s.split(" ").map((str) => {
        return str.split("").map((a, i) => {
           return i % 2 === 0 ? a.toUpperCase() : a.toLowerCase();
        }).join("");
    })
    return strange.join(" ")
}