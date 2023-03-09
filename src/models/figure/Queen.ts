import { Cell } from '../Cell'
import { Colors } from '../Colors'
import { Figure, FigureNames } from './Figure'
import blackLogo from '../../assets/black-queen.png'
import whiteLogo from '../../assets/white-queen.png'

export class Queen extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell)
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
    this.name = FigureNames.QUEEN
  }

  canMove(targer: Cell): boolean {
    if (!super.canMove(targer)) return false
    if (this.cell.isEmptyVertical(targer)) return true
    if (this.cell.isEmptyHorizontal(targer)) return true
    if (this.cell.isEmptyDiagonal(targer)) return true
    return false
  }
}
