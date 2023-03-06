import logo from '../../assets/black-king.png'
import { Cell } from '../Cell'
import { Colors } from '../Colors'

export enum FigureNames {
  FIGURE = 'Фигура',
  KING = 'Король',
  QUEEN = 'Ферзь',
  ROOK = 'Ладья',
  KNIGHT = 'Конь',
  BISHOP = 'Слон',
  PAWN = 'Пешка',
}

export class Figure {
  constructor(color: Colors, cell: Cell) {
    this.color = color
    this.cell = cell
    this.cell.figure = this
    this.logo = null
    this.name = FigureNames.FIGURE
    this.id = Math.random()
  }

  color: Colors
  logo: typeof logo | null
  cell: Cell
  name: FigureNames
  id: number

  canMove(target: Cell): boolean {
    if (target.figure?.color === this.color) return false
    if (target.figure?.name === FigureNames.KING) return false
    return true
  }

  moveFigure(tagret: Cell) {}
}
