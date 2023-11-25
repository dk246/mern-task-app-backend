import Task from "../models/taskModel.js";

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.json(task);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

export const getTask = async (req, res) => {
  // get a single task

  try {
    const { id } = req.params;
    const task = await Task.findById(id);

    if (!task) {
      return res.json(`no task with id ${id}`);
    }
    res.json(task);
  } catch (error) {
    res.json({ msg: error.message });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);
    if (!task) {
      return res.json(`no task with id ${id}`);
    }

    res.send("task deleted");
  } catch (error) {
    res.json({ msg: error.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(
      {
        _id: id,
      },
      req.body,
      { new: true, runValidators: true }
    );
    res.json(task);
  } catch (error) {
    res.json({ msg: error.message });
  }
};
