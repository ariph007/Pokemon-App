const capitalizeName = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const truncateString = (str, num) => {
    if (str?.length > num) {
        return str.slice(0, num) + '...'
    } else {
        return str
    }
};

const probality = () => {
    if (Math.random() < 0.5) {
        return 0
    } else {
        return 1
    }
};

export { capitalizeName, truncateString, probality };