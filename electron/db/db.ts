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


/*
import * as fs from 'fs';

interface Card {
  id: string;
  name: string;
  questions: string[];
  answers: string[];
}

interface Board {
  id: string;
  name: string;
  cardIds: string[];
}

class Database {
  private filePath: string;
  private data: {
    boards: Board[];
    cards: Card[];
  };
  private boardIndex: Map<string, Board>;
  private cardIndex: Map<string, Card>;

  constructor(filePath: string) {
    this.filePath = filePath;
    this.data = this.loadDataFromFile();
    this.boardIndex = this.buildBoardIndex();
    this.cardIndex = this.buildCardIndex();
  }

  private loadDataFromFile(): { boards: Board[]; cards: Card[] } {
    try {
      const fileData = fs.readFileSync(this.filePath, 'utf-8');
      return JSON.parse(fileData);
    } catch (error) {
      // If the file doesn't exist or is invalid JSON, initialize with empty arrays
      return { boards: [], cards: [] };
    }
  }

  private buildBoardIndex(): Map<string, Board> {
    const index = new Map<string, Board>();
    this.data.boards.forEach(board => {
      index.set(board.id, board);
    });
    return index;
  }

  private buildCardIndex(): Map<string, Card> {
    const index = new Map<string, Card>();
    this.data.cards.forEach(card => {
      index.set(card.id, card);
    });
    return index;
  }

  private saveDataToFile(): void {
    fs.writeFileSync(this.filePath, JSON.stringify(this.data, null, 2), 'utf-8');
  }

  public getAllBoards(): Board[] {
    return this.data.boards;
  }

  public getBoardById(id: string): Board | null {
    return this.boardIndex.get(id) || null;
  }

  public addBoard(name: string): void {
    const newBoard: Board = { id: generateUniqueId(), name, cardIds: [] };
    this.data.boards.push(newBoard);
    this.boardIndex.set(newBoard.id, newBoard);
    this.saveDataToFile();
  }

  public updateBoard(id: string, name: string): void {
    const board = this.boardIndex.get(id);
    if (board) {
      board.name = name;
      this.saveDataToFile();
    }
  }

  public deleteBoard(id: string): void {
    const boardIndex = this.data.boards.findIndex(board => board.id === id);
    if (boardIndex !== -1) {
      this.data.boards.splice(boardIndex, 1);
      this.boardIndex.delete(id);
      // Remove associated card references
      this.data.cards = this.data.cards.filter(card => !card.boardIds.includes(id));
      this.saveDataToFile();
    }
  }

  public getCardsByBoardId(boardId: string): Card[] {
    const board = this.boardIndex.get(boardId);
    if (board) {
      return board.cardIds.map(cardId => this.cardIndex.get(cardId)).filter(Boolean) as Card[];
    }
    return [];
  }

  public getCardById(cardId: string): Card | null {
    return this.cardIndex.get(cardId) || null;
  }

  public addCard(name: string, questions: string[], answers: string[], boardIds: string[]): void {
    const newCard: Card = { id: generateUniqueId(), name, questions, answers };
    this.data.cards.push(newCard);
    this.cardIndex.set(newCard.id, newCard);
    boardIds.forEach(boardId => {
      const board = this.boardIndex.get(boardId);
      if (board) {
        board.cardIds.push(newCard.id);
      }
    });
    this.saveDataToFile();
  }

  public updateCard(cardId: string, name: string, questions: string[], answers: string[]): void {
    const card = this.cardIndex.get(cardId);
    if (card) {
      card.name = name;
      card.questions = questions;
      card.answers = answers;
      this.saveDataToFile();
    }
  }

  public deleteCard(cardId: string): void {
    const cardIndex = this.data.cards.findIndex(card => card.id === cardId);
    if (cardIndex !== -1) {
      this.data.cards.splice(cardIndex, 1);
      this.cardIndex.delete(cardId);
      // Remove card references from boards
      this.data.boards.forEach(board => {
        const cardIdIndex = board.cardIds.findIndex(id => id === cardId);
        if (cardIdIndex !== -1) {
          board.cardIds.splice(cardIdIndex, 1);
        }
      });
      this.saveDataToFile();
    }
  }
}

// Helper function to generate unique IDs
function generateUniqueId(): string {
  return Math.random().toString(36).substr(2, 9);
}


*/