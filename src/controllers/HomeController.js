import Student from "../models/Student";

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: "Diogo",
      last_name: "Souza",
      email: "email@gmail.com",
      age: 21,
      weight: 75,
      height: 1.7,
    });
    res.json(newStudent);
  }
}

export default new HomeController();
