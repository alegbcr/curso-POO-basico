class Student {
  constructor({
    id,
    fullName,
    email,
    username,
    score,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningLevel = [],
  }) {
    this.id = id;
    this.fullName = fullName;
    this.email = email;
    this.username = username;
    this.score = score;
    this.socialMedia = { twitter, instagram, facebook };
    this.approvedCourses = approvedCourses;
    this.learningLevel = learningLevel;
  }

  addNewCourse(newCourse) {
    this.learningLevel.push(newCourse);
  }
}
