import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'
import blackLogo from '../../assets/black-rook.png'
import whiteLogo from '../../assets/white-rook.png'

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.ROOK
  }

  canMove(targer: Cell): boolean {
    if (!super.canMove(targer)) return false
    if (this.cell.isEmptyVertical(targer)) return true
    if (this.cell.isEmptyHorizontal(targer)) return true
    return false
  }
}
