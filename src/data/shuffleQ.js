const shuffleArray = (qRaw) => {
    const qRand = qRaw.slice();
    for (let i = qRand.length - 1; i > 0; i--) {
        const rand = Math.floor(Math.random() * (i + 1));
        [qRand[i], qRand[rand]] = [qRand[rand], qRand[i]];
    }
    return qRand;
}
export default shuffleArray;