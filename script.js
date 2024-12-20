document.getElementById("activate").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log('tab', tab)
  chrome.scripting.executeScript({
	target: {tabId: tab.id},
	files: ["scripts/activate.js"]
  })
});

document.getElementById("deactivate").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log('tab', tab)
  chrome.scripting.executeScript({
	target: {tabId: tab.id},
	files: ["scripts/deactivate.js"]
  })
});


document.getElementById("myTheme").addEventListener("click", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  console.log('tab', tab)
  chrome.scripting.executeScript({
	target: {tabId: tab.id},
	files: ["scripts/my_theme.js"]
  })
});
