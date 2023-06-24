import database from './db.json';

type Card = {
  id: string;
  question: string;
  answer: string;
  wasAnswered: boolean;
  timeAnswered: string;
  timeLastSeen: string;
}

type Board = {
  id: string;
  name: string;
  cards: Card[];
}

type Settings = {
  user: string | null;
  colorSchema: string | null;
}

type Db = {
  boards: Board[],
  settings: Settings
}

class Database {
  file: Db;
  boards: Board[];
  constructor(file: Db) {
    this.file = file;
    this.boards = this.file.boards;

  }

  getBoard(id: string, name: string) {
    let err;
    let board = null;
    if (id && id.length > 0) {
      for (let i = 0; i < this.boards.length; i++) {
        if (this.boards[i].id === id) {
          board = this.boards;
        }
      }
      err = new Error(`There is no board with the id: ${id}`);
    }

    if (name && name.length > 0) {
      for (let i = 0; i < this.boards.length; i++) {
        if (this.boards[i].name === name) {
          board = this.boards;
        }
      }
      err = new Error(`There is no board with the name: ${name}`);
    }

    return [board, err];
  }

  // get card


  // get settings

  // create board

  // create card


}

const db = new Database(database);