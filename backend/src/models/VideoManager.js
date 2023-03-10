const AbstractManager = require("./AbstractManager");

class VideoManager extends AbstractManager {
  constructor() {
    super({ table: "video" });
  }

  insert(video) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      video.title,
    ]);
  }

  update(video) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [video.title, video.id]
    );
  }

  findAllByCategory() {
    return this.database.query(
      `select ${this.table}.*, c.name AS category_name from ${this.table} JOIN category AS c ON ${this.table}.category_id = c.id`
    );
  }

  findById(id) {
    return this.database.query(
      `select ${this.table}.*, c.name AS category_name from ${this.table} JOIN category AS c ON ${this.table}.category_id = c.id where video.id = ?`,
      [id]
    );
  }
}

module.exports = VideoManager;
