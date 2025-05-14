import { describe, expect, it } from 'vitest';
import {
  MatrixMixerPageUiState,
  OnlineDevicesPageUiState,
  PageUiState,
  Routes,
  RoutingPageUiState,
} from '../models/models.ts';
import { UIStateService } from './uiStateService.ts';
import { LocalStorageMock } from '../utilities/localStorageMock.ts';

const MATRIX_MIXER_STATE: MatrixMixerPageUiState = {
  zoomFactor: 1.0,
};

const ONLINE_DEVICES_STATE: OnlineDevicesPageUiState = {
  isRightPanelOpen: true,
  selectedDeviceId: 'abc123',
};

const ROUTING_STATE: RoutingPageUiState = {
  isLeftPanelOpen: true,
  isRightPanelOpen: false,
  selectedDeviceId: 'abc123',
};

describe('It saves the correct UI state for each page', () => {
  it('saves the UI state for the Matrix Mixer page', () => {
    //   setup
    const uiStateService = new UIStateService(new LocalStorageMock());
    const route = Routes.MatrixMixerRoute;
    const state = MATRIX_MIXER_STATE;

    //   exercise
    uiStateService.saveUiState(route, state);

    //   verify
    const uiState = uiStateService.getUiState(route);
    expect(uiState).toEqual(state);
  });

  it('saves the UI state for the Online Devices page', () => {
    //   setup
    const uiStateService = new UIStateService(new LocalStorageMock());
    const route = Routes.OnlineDevicesRoute;
    const state: PageUiState = ONLINE_DEVICES_STATE;

    //   exercise
    uiStateService.saveUiState(route, state);

    //   verify
    const uiState = uiStateService.getUiState(route);
    expect(uiState).toEqual(state);
  });

  it('saves the UI state for the Online Devices page', () => {
    //   setup
    const uiStateService = new UIStateService(new LocalStorageMock());
    const route = Routes.RoutingRoute;
    const state: PageUiState = ROUTING_STATE;

    //   exercise
    uiStateService.saveUiState(route, state);

    //   verify
    const uiState = uiStateService.getUiState(route);
    expect(uiState).toEqual(state);
  });
});

describe('It gets the correct state given the page type', () => {
  it('Gets the correct state for the MatrixMixer page', () => {
    //   Setup
    const uiStateService = new UIStateService(new LocalStorageMock());
    const route = Routes.MatrixMixerRoute;
    uiStateService.saveUiState(route, MATRIX_MIXER_STATE);

    //   Exercise
    const uiState: PageUiState = uiStateService.getUiState(route);

    //   Verify
    expect(uiState).toEqual(MATRIX_MIXER_STATE);
  });

  it('Gets the correct state for the OnlineDevices page', () => {
    //   Setup
    const uiStateService = new UIStateService(new LocalStorageMock());
    const route = Routes.OnlineDevicesRoute;
    uiStateService.saveUiState(route, ONLINE_DEVICES_STATE);

    //   Exercise
    const uiState: PageUiState = uiStateService.getUiState(route);

    //   Verify
    expect(uiState).toEqual(ONLINE_DEVICES_STATE);
  });

  it('Gets the correct state for the Routing page', () => {
    //   Setup
    const uiStateService = new UIStateService(new LocalStorageMock());
    const route = Routes.RoutingRoute;
    uiStateService.saveUiState(route, ROUTING_STATE);

    //   Exercise
    const uiState: PageUiState = uiStateService.getUiState(route);

    //   Verify
    expect(uiState).toEqual(ROUTING_STATE);
  });
});