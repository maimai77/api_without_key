export function setupResponse(element: HTMLButtonElement) {
  const setResponse = async () => {
    const response = await fetch("/projects.json", {
      headers: {
        "X-CSRF-Token":
          document
            .querySelector("meta[name='csrf-token']")
            ?.getAttribute("content") || "",
        "X-API-WITHOUT-KEY": "1",
      },
      credentials: "include",
    });
    const body = await response.json();
    element.innerHTML = JSON.stringify(body, null, 2);
  };
  setResponse();
}
