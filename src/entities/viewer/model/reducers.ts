import { ViewerInitState } from './types'

export const reducers = {
  viewsPasswordToggle(state: ViewerInitState) {
    state.viewsPassworld = !state.viewsPassworld
  },
}