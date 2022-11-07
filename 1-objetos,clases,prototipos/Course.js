const videoPlay = (id) => {
  const url = "https://alegcbr_code.tech/" + id;
  console.log("Sé está reproduciendo desde la url" + url);
};

const videoPause = (id) => {
  const url = "https://alegcbr_code.tech/" + id;
  console.log("Sé ha pausado desde la url" + url);
};

class Course {
  constructor({
    id,
    nameLevel,
    teacher,
    videoId,
    lessonsNumber,
    lessons = [],
  }) {
    this.id = id;
    this._nameLevel = nameLevel;
    this.videoId = videoId;
    this.teacher = teacher;
    this.lessonsNumber = lessonsNumber;
    this.lessons = lessons;
  }

  addLesson(newLesson) {
    this.lessons.push(newLesson);
  }

  get name() {
    return this._nameLevel;
  }

  set name(newName) {
    if (newName === "Iniciantes B1") {
      console.error("Web... no");
    } else {
      this._nameLevel = newName;
    }
  }

  play() {
    videoPlay(this.videoId);
  }

  pause() {
    videoPlay(this.videoId);
  }
}
