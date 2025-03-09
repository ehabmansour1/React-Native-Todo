class TodoModel {
  constructor(id, title, detail = '', completed = false) {
    this.id = id;
    this.title = title;
    this.detail = detail;
    this.completed = completed;
  }
}

export default TodoModel;
