/*
Una pareja está poniendo el árbol de navidad. El chico es un motivado de los adornos navideños y quiere que quede perfectamente equilibrado. Tiene tres tipos de decoraciones:

    Bolas de colores : B
    Regalos pequeños : R
    Piñas de pino : P

El árbol de navidad es un triángulo que hay que generar. Ya tienen la base montada, que sería la primera fila, y a partir de ahí tienen que ir colocando las decoraciones hacía arriba siguiendo una fórmula.

Arriba coloca  :     P     R     B     P
Si abajo tiene :    P P   B P   R P   B R

Las combinaciones también son al revés. Por ejemplo, si abajo es B P, arriba es R. Pero también será R si abajo es P B. También si abajo tienes dos veces la misma letra, arriba será la misma letra. Por ejemplo, si abajo es B B, arriba es B.

Con estas reglas, podríamos ver el árbol que generaríamos con la base B P R P:

   R
  P B
 R B B
B P R P

Escribe un programa que reciba el string B P R P y devuelva un array con la representación del árbol.

decorateTree('B P R P')
// [
// 'R',
// 'P B',
// 'R B B',
// 'B P R P'
// ]

decorateTree('B B') // ['B', 'B B']

Ten en cuenta que:

    El programa recibe siempre la cadena de texto que representa la base del árbol.
    Hay que generar el árbol completo, es decir, la base y las filas que se generan a partir de ella, hasta arriba.
    Hay que seguir la fórmula para saber qué decoración colocar en cada posición.

*/

export default function decorateTree(base) {
  if (!base) return []

  const baseArray = base.split(" ")

  const result = []
  result[0] = [...baseArray]

  for (let i = baseArray.length - 1; i > 0; i--) {
    result[baseArray.length - i] = new Array(i)
  }

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result[i].length - 1; j++) {
      const firstElement = result[i][j]
      const secondElement = result[i][j + 1]

      const candidate =
        firstElement === secondElement
          ? firstElement
          : "BPR".replace(firstElement, "").replace(secondElement, "")
      console.log(candidate)
      result[i + 1][j] = candidate
    }
  }

  const resultToString = result.map((arr) => arr.join(" "))
  return resultToString.reverse()
}
