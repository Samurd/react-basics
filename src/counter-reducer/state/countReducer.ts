import { CountAction, CountState } from "../interfaces/interfaces"

export const countReducer = ({count}: CountState, action: CountAction) => {
    switch (action.type) {
      case "increaseBy":
        return {
          count: count + action.payload.value
        }
        case "reset":
          return {
            count: 0
          }
    }
  }