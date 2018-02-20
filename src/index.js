/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    let arrLength = preferences.length;

    for (let i = 0; i < arrLength; i++) {
        let firstSpichonee = preferences[i];
        let firstSpichoneePosition = i + 1;

        let thirdSpichoneePosition = firstSpichonee;
        let thirdSpichonee = preferences[firstSpichonee - 1];

        let secondSpichoneePosition = thirdSpichonee;
        let secondSpichonee = firstSpichoneePosition;

        if (preferences[secondSpichoneePosition - 1] === secondSpichonee &&
            preferences[thirdSpichoneePosition - 1] === thirdSpichonee) {
            count++;
        }

    }


    return Math.floor(count / 3);
};