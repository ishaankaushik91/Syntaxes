// Frequency of Each element in Matrix
let Okayy = {
    Matrix: [[1, 2, 3], [3, 3, 4], [3, 1, 1]]
}

for (let i = 0; i < Okayy.Matrix.length; i++) {
    for (let j = 0; j < 3; j++) {
        let Frequency = 0;
        for (let k = 0; k < Okayy.Matrix.length; k++) {
            for (let l = 0; l < 3; l++) {
                if (Okayy.Matrix[i][j] == Okayy.Matrix[k][l]) {
                    Frequency++;
                }
            }
        }
        console.log(`Frequency of ${Okayy.Matrix[i][j]} = ${Frequency}`);
    }
}