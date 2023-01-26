import { v4 as uuid } from 'uuid';

export interface Identifiable {
  id: string;
}

export interface Learned<T> {
  self: T;
  latestSession: SessionHistory;
  difficulty: Difficulty;
}

export interface Exercise<T> {
  self: T;
  difficulty: Difficulty;
}

export enum Difficulty {
  EASY = 'EASY',
  NORMAL = 'NORMAL',
  HARD = 'HARD'
}

export type SessionId = string;

// TODO: Session shouldn't accept a type argument
export interface Session<T> {
  id: SessionId;
  pending: { [id: string]: Exercise<T> };
  done: { [id: string]: Exercise<T> };
}

export interface SessionHistory {
  startedOn: Date;
  endedOn: Date;
  sessionId: SessionId;
}

const newExcercise = <T>(entity: T): Exercise<T> => {
  return {
    self: entity,
    difficulty: Difficulty.HARD
  };
};

export const exerciseXp = <T>(ex: Exercise<T>): Number => {
  return 42;
};

export const newSession = async <T extends Identifiable>(
  bank: { [id: string]: T },
  learned: { [id: string]: Learned<T> }
): Promise<Session<T>> => {
  const pending = Object.values(bank)
    .map(newExcercise)
    .reduce((a, v) => ({ ...a, [v.self.id]: v }), {});

  return {
    id: uuid(),
    pending,
    done: {}
  };
};
