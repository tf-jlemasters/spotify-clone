export function millisToMinutesAndSeconds(millis) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 6000) / 1000).toFixed(0);
    return seconds == 60
        ? minutes + 1 + ":oo"
        : minutes + ":" + (seconds < 10 ? "0" : "") +
        seconds;
}