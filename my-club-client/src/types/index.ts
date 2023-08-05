export type TAction<P = any> = {
  type: string
  payload?: P
  callback?: (data?: any) => void
  [key: string]: any
}
