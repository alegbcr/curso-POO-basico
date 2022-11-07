class LearningLevel {
  constructor({ id, levelName, courses = [] }) {
    this.id = id;
    this._levelName = levelName;
    this.courses = courses;
  }

  addNewCourse(newCourse) {
    this.courses.push(newCourse);
  }

  get levelName() {
    return this._levelName;
  }

  set levelName(newName) {
    this._levelName = newName;
  }
}
