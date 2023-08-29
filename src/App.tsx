import './App.css'
import { useState, useEffect } from 'react'
import { Board } from './models/Board'
import { Player } from './models/Player'
import { Colors } from './models/Colors'
import LostFigures from './components/LostFigures'
import BoardComponent from './components/BoardComponent'
import Timer from './components/Timer'

function App() {
  const [board, setBoard] = useState(new Board())
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE))
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK))
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null)

  useEffect(() => {
    restart()
    setCurrentPlayer(whitePlayer)
  }, [])

  function restart() {
    const newBoard = new Board()
    newBoard.initCells()
    newBoard.addFigures()
    setBoard(newBoard)
  }

  function swapPlayer() {
    setCurrentPlayer(
      currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer
    )
  }

  return (
    <div className='app'>
      <Timer currentPlayer={currentPlayer} restart={restart} />
      <BoardComponent
        board={board}
        setBoard={setBoard}
        swapPlayer={swapPlayer}
        currentPlayer={currentPlayer}
      />
      <div>
        <LostFigures figures={board.lostBlackFigures} title='Черные фигуры' />
        <LostFigures figures={board.lostWhiteFigures} title='Белые фигуры' />
      </div>
    </div>
  )
}

export default App
