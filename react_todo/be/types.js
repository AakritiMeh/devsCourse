const zod = require("zod");

const createToDo = zod.object({
  title: zod.string(),
  descriptiion: zod.string(),
});

const updateToDo = zod.object({
  id: zod.string(),
});

module.exports = {
  createToDo: createToDo,
  updateToDo: updateToDo,
};
