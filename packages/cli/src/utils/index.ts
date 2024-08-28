export function config() {
  // const baseUrl = "http://localhost:3000";

  const baseUrl =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://ruru-ui.vercel.app";

  return { baseUrl };
}
