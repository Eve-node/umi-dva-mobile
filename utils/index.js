/**
 * 当前时间
 *
 * @export
 * @returns
 */
export function updateCurrentTime() {
    const d = new Date();
    return `${d.getFullYear()}年${pad(d.getMonth() + 1, 0)}月${pad(
        d.getDate(),
        2
    )}日 ${pad(d.getHours(), 2)}:${pad(d.getMinutes(), 2)}`;
}
