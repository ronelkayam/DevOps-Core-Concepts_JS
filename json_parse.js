// JSON String → JS Object (JSON.parse)
// ממיר מחרוזת JSON בחזרה לאובייקט JavaScript.
// שימושי כשאתה מקבל נתונים משרת או מקובץ JSON ורוצה לעבוד איתם בקוד.

const jsonStr = '{"name":"Alice","age":30}';
const obj = JSON.parse(jsonStr);
console.log(obj.name); // Alice