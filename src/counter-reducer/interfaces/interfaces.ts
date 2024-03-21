export interface CountState {
    count: number
}

export type CountAction = | { type: "increaseBy", payload: { value: number } }
  | { type: "reset"}
  