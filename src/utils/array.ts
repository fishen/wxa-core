export function includes<T>(arr: T[], item: T) {
    return Array.isArray(arr) && arr.indexOf(item) >= 0;
}
