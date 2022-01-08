export function totalUsersFormat(value) {
    let formatted = value;
    if (value.length > 3) {
        formatted = `+${value[0]}k`;
    } else if (value.length === 3) {
        formatted = `+${value[0]}00`;
    }
    return formatted;
}
