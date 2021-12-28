export default async (text, color) => {
  await chrome.action.setBadgeText({ text: text })
  await chrome.action.setBadgeBackgroundColor({ color: color })
}
