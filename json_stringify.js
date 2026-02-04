// JS Object ↔ JSON
// JS Object → JSON String (JSON.stringify)
// ממיר אובייקט JavaScript למחרוזת בפורמט JSON.
// שימושי כשמטרתך לשמור או לשלוח נתונים (למשל ל-API או לקובץ).

const obj = { name: "Alice", age: 30 };
const jsonStr = JSON.stringify(obj);
console.log(jsonStr); // '{"name":"Alice","age":30}'