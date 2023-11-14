var countPalindromicSubsequence = function (s) {
    let pos = new Map()
    for (let i = 0; i < s.length; i++) {
        let letter = s.charAt(i)
        if (!pos.has(letter)) {
            pos.set(letter, [i, i])
        } else {
            pos.get(letter)[1] = i
        }
    }

    let answer = 0
    for (let [left, right] of pos.values()) {
        let counter = new Set()
        for (i = left + 1; i < right; i++) {
            counter.add(s.charAt(i))
        }
        answer += counter.size
    }
    return answer
};