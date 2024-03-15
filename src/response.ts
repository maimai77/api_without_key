export function setupResponse(element: HTMLButtonElement) {
  const setResponse = async () => {
    const baseURL =
      document
        .querySelector("meta[name='api-base-url']")
        ?.getAttribute("content") || "";
    const url = new URL("projects.json", baseURL);
    const response = await fetch(url, {
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
