export type TAction<P = any> = {
  type: string;
  payload?: P;
  callback?: (data?: any) => void;
  [key: string]: any;
};

export enum Role {
  Member = 'member',
  Host = 'host',
  Treasurer = 'treasurer',
}
