export function getLocalData() {
  const tasks = localStorage.getItem("kanban");
  if (tasks) {
    try {
      return JSON.parse(tasks);
    } catch {
      return [];
    }
  }
  return [];
}

export function setLocalData(data) {
  localStorage.setItem("kanban", JSON.stringify(data));
}
