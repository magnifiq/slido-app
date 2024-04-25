export default interface URLSearchParams {
  apphost?: string;
  appversion?: string;
  os?: string;

  get(key: string): string | null;
}
