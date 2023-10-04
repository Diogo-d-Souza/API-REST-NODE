import Student from "../models/Student";

class StudentController {
  async index(req, res) {
    const students = await Student.findAll();
    res.json(students);
  }

  async create(req, res) {
    try {
      const student = await Student.create(req.body);
      return res.json(student);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ["ID is required"],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ["Student does not exist"],
        });
      }

      const updatedStudent = await student.update(req.body);

      return res.json(updatedStudent);
    } catch (error) {
      console.log(error);
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ["ID is required"],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ["Student does not exist"],
        });
      }
      return res.json(student);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({
          errors: ["ID is required"],
        });
      }

      const student = await Student.findByPk(id);

      if (!student) {
        return res.status(400).json({
          errors: ["Student does not exist"],
        });
      }

      await student.destroy();

      return res.json("User deleted");
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new StudentController();
