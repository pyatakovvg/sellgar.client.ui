
interface Window {
  env: any;
}

declare namespace NodeJS {
  export interface ProcessEnv {
    readonly GATEWAY_SERVICE_API: string;
  }
}
