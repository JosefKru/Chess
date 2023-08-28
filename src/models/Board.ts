import { Figure } from './figure/Figure'
import { Cell } from './Cell'
import { Colors } from './Colors'
import { Knight } from './figure/Knight'
import { Queen } from './figure/Queen'
import { King } from './figure/King'
import { Pawn } from './figure/Pawn'
import { Rook } from './figure/Rook'
import { Bishop } from './figure/Bishop'

export class Board {
  cells: Cell[][] = []
  lostBlackFigures: Figure[] = []
  lostWhiteFigures: Figure[] = []

  public initCells() {
    for (let i = 0; i < 8; i++) {
      const row: Cell[] = []

      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 !== 0) {
          row.push(new Cell(this, j, i, Colors.BLACK, null))
        } else {
          row.push(new Cell(this, j, i, Colors.WHITE, null))
        }
      }

      this.cells.push(row)
    }
  }

  public getCell(x: number, y: number) {
    return this.cells[y][x]
  }

  public addFigures() {
    this.addKings()
    this.addQueens()
    this.addRooks()
    this.addBishops()
    this.addKnights()
    this.addPawns()
  }

  public hightLightCell(selectedCell: Cell | null) {
    for (let i = 0; i < this.cells.length; i++) {
      const row = this.cells[i]
      for (let j = 0; j < row.length; j++) {
        const target = row[j]
        target.available = !!selectedCell?.figure?.canMove(target)
      }
    }
  }

  public getCopyBoard(): Board {
    const newBoard = new Board()
    newBoard.cells = this.cells
    newBoard.lostWhiteFigures = this.lostWhiteFigures
    newBoard.lostBlackFigures = this.lostBlackFigures
    return newBoard
  }

  private addKings() {
    new King(Colors.WHITE, this.getCell(4, 7))
    new King(Colors.BLACK, this.getCell(4, 0))
  }
  private addQueens() {
    new Queen(Colors.WHITE, this.getCell(3, 7))
    new Queen(Colors.BLACK, this.getCell(3, 0))
  }
  private addRooks() {
    new Rook(Colors.WHITE, this.getCell(7, 7))
    new Rook(Colors.WHITE, this.getCell(0, 7))
    new Rook(Colors.BLACK, this.getCell(0, 0))
    new Rook(Colors.BLACK, this.getCell(7, 0))
  }
  private addBishops() {
    new Bishop(Colors.WHITE, this.getCell(2, 7))
    new Bishop(Colors.BLACK, this.getCell(2, 0))
    new Bishop(Colors.WHITE, this.getCell(5, 7))
    new Bishop(Colors.BLACK, this.getCell(5, 0))
  }
  private addKnights() {
    new Knight(Colors.BLACK, this.getCell(1, 0))
    new Knight(Colors.WHITE, this.getCell(1, 7))
    new Knight(Colors.BLACK, this.getCell(6, 0))
    new Knight(Colors.WHITE, this.getCell(6, 7))
  }
  private addPawns() {
    for (let i = 0; i < 8; i++) {
      new Pawn(Colors.WHITE, this.getCell(i, 6))
      new Pawn(Colors.BLACK, this.getCell(i, 1))
    }
  }
}
