import { expect } from "vitest"
import { it } from "vitest"
import { describe } from "vitest"

function canExit(labyrinth) {
  // Función auxiliar para validar los límites del laberinto
  function isValidMove(row, col) {
    return (
      row >= 0 &&
      row < labyrinth.length &&
      col >= 0 &&
      col < labyrinth[row].length
    )
  }

  // Función recursiva para explorar el laberinto
  function explore(row, col, visited) {
    // Si estamos fuera de los límites o en una pared, retornamos falso
    if (!isValidMove(row, col) || labyrinth[row][col] === "W") {
      return false
    }

    // Si encontramos la salida (E), retornamos verdadero
    if (labyrinth[row][col] === "E") {
      return true
    }

    // Si ya hemos visitado esta celda, retornamos falso para evitar ciclos
    if (visited[row][col]) {
      return false
    }

    // Marcamos la posición actual como visitada
    visited[row][col] = true

    // Exploramos en todas las direcciones posibles
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ]
    for (const [dx, dy] of directions) {
      if (explore(row + dx, col + dy, visited)) {
        return true
      }
    }

    // Si no encontramos una salida en ninguna dirección, retrocedemos
    return false
  }

  // Buscamos la posición de entrada (S) en el laberinto
  for (let i = 0; i < labyrinth.length; i++) {
    for (let j = 0; j < labyrinth[i].length; j++) {
      if (labyrinth[i][j] === "S") {
        // Inicializamos el array de visitados
        const visited = new Array(labyrinth.length)
          .fill(false)
          .map(() => new Array(labyrinth[0].length).fill(false))

        // Llamamos a la función explore desde la posición de entrada
        return explore(i, j, visited)
      }
    }
  }

  // Si no encontramos la entrada, retornamos falso
  return false
}

describe("canExit", () => {
  it("should be a function", () => {
    expect(typeof canExit).toBe("function")
  })

  it("should return true", () => {
    expect(
      canExit([
        [" ", " ", "W", " ", "S"],
        [" ", " ", " ", " ", " "],
        [" ", " ", " ", "W", " "],
        ["W", "W", " ", "W", "W"],
        [" ", " ", " ", " ", "E"],
      ])
    ).toBe(true)
  })
})
