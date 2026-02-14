/// <reference types="vite/client" />

type ImportMetaEnv = {
  readonly VITE_API_BASE_URL: string
  readonly VITE_ERROR_EVENT_LOADING: string
  readonly VITE_ERROR_EVENT_EMPTY: string
  readonly VITE_ERROR_EVENT_FAILURE: string
}

type ImportMeta = {
  readonly env: ImportMetaEnv;
}
