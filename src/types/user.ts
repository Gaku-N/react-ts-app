export type User = {
  globalId: string;
  name: string;
  email: string;
  extentionNumber?: number;
  types: 'Engineer' | 'Assistant' | 'Admin';
}