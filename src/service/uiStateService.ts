import { PageUiState, Routes } from '../models/models.ts';
import { LocalStorageMock } from '../utilities/localStorageMock.ts';

export class UIStateService {
  localStorageMock: LocalStorageMock;

  constructor(localStorageMock: LocalStorageMock){
    this.localStorageMock = localStorageMock;
  }

  saveUiState(route: Routes, state:PageUiState) {
    this.localStorageMock.setItem(route, JSON.stringify(state))
  }

  getUiState(route: Routes): PageUiState {
    return (() => {
      switch (route) {
        case Routes.MatrixMixerRoute:
          return JSON.parse(this.localStorageMock.getItem(Routes.MatrixMixerRoute))
        case Routes.OnlineDevicesRoute:
          return JSON.parse(this.localStorageMock.getItem(Routes.OnlineDevicesRoute))
        case Routes.RoutingRoute:
          return JSON.parse(this.localStorageMock.getItem(Routes.RoutingRoute))
        default:
          throw new Error(`Unknown route: ${route}`);
      }
    })();
  }
}