enum Color {
  red,
  green,
  blue
}
let c: Color = Color.green
console.log(c)
// 反查
let colorName: string = Color[1]
console.log(colorName)
