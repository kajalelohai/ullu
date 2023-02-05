/**
 * Generally useful types
 */

export interface Identifiable {
  id: string;
}

export interface Record<T> {
  [id: string]: T;
}
