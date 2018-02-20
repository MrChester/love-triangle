/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count = 0;
    let arrLength = preferences.length;
    let firstSpichonee = 0,
        firstSpichoneePosition = 0,
        secondSpichonee = 0,
        secondSpichoneePosition = 0,
        thirdSpichonee = 0,
        thirdSpichoneePosition = 0;

    for (let i = 0; i < arrLength - 1; i++) {
        firstSpichonee = preferences[i];
        firstSpichoneePosition = i + 1;

        thirdSpichoneePosition = firstSpichonee;
        thirdSpichonee = preferences[firstSpichonee - 1];

        secondSpichoneePosition = thirdSpichonee;
        secondSpichonee = firstSpichoneePosition;

        if ((preferences[secondSpichoneePosition - 1] === secondSpichonee) &&
            (preferences[thirdSpichoneePosition - 1] === thirdSpichonee)) {
            count++;
        }

    }


    return count;
};