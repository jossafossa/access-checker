/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_NAME: string;
    readonly VITE_MATCH_URL: string;
    readonly VITE_REMOTE_URL: string;
    readonly VITE_GITHUB_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
