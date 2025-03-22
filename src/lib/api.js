const API_BASE_URL = import.meta.env.VITE_API_URL;

// Helper function to ensure proper URL construction without double slashes
function buildUrl(baseUrl, endpoint) {
  // Remove trailing slash from base URL if it exists
  const base = baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
  // Ensure endpoint starts with a slash
  const path = endpoint.startsWith("/") ? endpoint : `/${endpoint}`;
  return `${base}${path}`;
}

export async function summarizeText(text) {
  try {
    const response = await fetch(buildUrl(API_BASE_URL, "summarize"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      throw new Error("Failed to summarize text");
    }

    const data = await response.json();
    return data.summarizedText;
  } catch (error) {
    console.error("Error in summarizeText:", error);
    throw error;
  }
}

export async function rewriteText(text, style) {
  try {
    const response = await fetch(buildUrl(API_BASE_URL, "rewrite"), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text, style }),
    });

    if (!response.ok) {
      throw new Error("Failed to rewrite text");
    }

    const data = await response.json();
    return data.rewrittenText;
  } catch (error) {
    console.error("Error in rewriteText:", error);
    throw error;
  }
}
