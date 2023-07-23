import * as md5 from 'md5';

export function encodeMD5(value) {
  return md5(value);
}
