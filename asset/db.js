let db;

const request = indexedDB.open('scores', 1);

request.onupgradeneeded = (event) => {
    db = event.target.result;
    db.createObjectStore('mathScores', {autoIncrement: true});
};

request.onerror = (event) => {
    console.log(`looks like we ran into an error ${event.target.errorCode}`)
};

const saveRecords = (score) => {
    console.log('adding new data');
    const userScore = db.transaction(['scores'], 'readwrite');
    const data = userScore.createObjectStore('scores');
    data.add(score)
}