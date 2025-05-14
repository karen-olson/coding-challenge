export interface MatrixMixerPageUiState {
  zoomFactor: number;
}

export interface OnlineDevicesPageUiState {
  isRightPanelOpen: boolean;
  selectedDeviceId?: string;
}

export interface RoutingPageUiState {
  isLeftPanelOpen: boolean;
  isRightPanelOpen: boolean;
  selectedDeviceId?: string;
}

export type PageUiState = MatrixMixerPageUiState | OnlineDevicesPageUiState | RoutingPageUiState;

export enum Routes {
  MatrixMixerRoute = 'matrixMixerRoute',
  OnlineDevicesRoute = 'onlineDevicesRoute',
  RoutingRoute = 'routingRoute'
}