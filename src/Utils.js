export function getLocalData() {
  const questions = localStorage.getItem("queArr");
  if (questions) {
    try {
      return JSON.parse(questions);
    } catch {
      return [];
    }
  }
  return [];
}
