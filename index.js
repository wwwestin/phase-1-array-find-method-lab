function superbowlWin(record) {
    const wins = record.find(({result}) => result === "W");
    if(wins === undefined) {
        return undefined;
    }
    return wins.year
};

superbowlWin(record);