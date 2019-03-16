export default class Utils {
  static truncate(text, num = 20) {
    if (text.length > num) {
      return text.substr(0, num) + '...'
    } else {
      return text
    }
  }
}
