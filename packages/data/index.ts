import { globby } from "globby";

export const all = async () => await globby(["data", "*.json"]);

// export const all = () => {
//   console.log("here123");
//   return [];
// };
