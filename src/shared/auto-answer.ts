/**
 * 截图模式's 自动答题 interval choices, shared by the settings page's select,
 * the toolbar's cycling button and the phone's sheet — and validated in main
 * against whatever a phone or the toolbar sends. Seconds of one capture cycle.
 */
export const AUTO_ANSWER_INTERVALS = [5, 10, 15, 20, 30, 60]

/** The fallback when a stored or sent value is not one of the choices */
export const DEFAULT_AUTO_ANSWER_INTERVAL = 10

/** An interval choice from the wire ('5'…) or storage; null for an unknown one */
export function autoAnswerIntervalFromValue(value: unknown): number | null {
  const seconds = Number(value)
  return AUTO_ANSWER_INTERVALS.includes(seconds) ? seconds : null
}
