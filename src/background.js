chrome.runtime.onInstalled.addListener(() => {
  console.log("Amit's LeetCode Helper extension installed!");
});

// Example Fetch Request (Modify as Needed)
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fetchData") {
    fetch("http://localhost:5173/api", { mode: "no-cors" })
      .then((response) => response.json())
      .then((data) => sendResponse(data))
      .catch((error) => console.error("Fetch error:", error));
    return true; // Required to use sendResponse asynchronously
  }
});
