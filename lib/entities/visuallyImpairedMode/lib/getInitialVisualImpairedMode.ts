import { LOCAL_STORAGE_VISUALLY_IMPAIRED_MODE_KEY } from '../config/config';

export const getInitialVisualImpairedMode = (): boolean =>
  Boolean(localStorage.getItem(LOCAL_STORAGE_VISUALLY_IMPAIRED_MODE_KEY));
