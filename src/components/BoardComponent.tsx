import { Board } from '../models/Board'
import React, { FC, useEffect, useState } from 'react'
import CellComponent from './CellComponent'
import { Cell } from '../models/Cell'
import { Player } from '../models/Player'

interface BoardProps {
  board: Board
  setBoard: (board: Board) => void
  currentPlayer: Player | null
  swapPlayer: () => void
}

const BoardComponent: FC<BoardProps> = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null)

  useEffect(() => {
    hightLightCell()
  }, [selectedCell])

  function click(cell: Cell) {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell)
      swapPlayer()
      setSelectedCell(null)
      updateBoard()
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell)
      }
    }
  }

  function hightLightCell() {
    board.hightLightCell(selectedCell)
    updateBoard()
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard()
    setBoard(newBoard)
  }

  return (
    <div className='container'>
      <h1>Текущий игрок: {currentPlayer?.color}</h1>
      <div className='board'>
        {board.cells.map((row, index) => {
          return (
            <React.Fragment key={index}>
              {row.map((cell) => {
                return (
                  <CellComponent
                    click={click}
                    key={cell.id}
                    cell={cell}
                    selected={
                      cell.x === selectedCell?.x && cell.y === selectedCell?.y
                    }
                  />
                )
              })}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export default BoardComponent
