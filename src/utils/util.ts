/**
 * 根据当前时间输入相应的问候语
 * @returns {string} 问候语字符串
 */
export function timeFix (): string {
    const time: Date = new Date()
    const hour: number = time.getHours()
    return hour < 9 ? '早上好' : (hour <= 11 ? '上午好' : (hour <= 13 ? '中午好' : (hour < 20 ? '下午好' : '晚上好')))
}
