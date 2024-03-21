import { CountAction } from "../interfaces/interfaces"


export const doIncreaseBy = (value: number): CountAction => ({
    type: "increaseBy",
    payload: {value}
})

export const doReset = (): CountAction => ({
    type: "reset"   
})