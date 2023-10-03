import { sql } from "../database/database.js";

const create = async (name) => {
  await sql`INSERT INTO tasks (name) VALUES (${ name })`;
};

const findAllNonCompletedTasks = async () => {
  return await sql`SELECT * FROM tasks WHERE completed = false`;
};

export { create, findAllNonCompletedTasks };