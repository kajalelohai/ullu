import isBefore from 'date-fns/isBefore';
import { SuperMemoGrade, SuperMemoItem } from 'supermemo';
import { v4 as uuid } from 'uuid';
import { Identifiable, Record } from '~src/types';
import { recordify } from '~src/utils';

export interface Exercisable {
  memo: SuperMemoItem;
  grade: SuperMemoGrade;
}

export interface Session {
  id: string;
  startedOn: Date;
  endedOn?: Date;
  exerciseIds: string[];
}

export interface Exercise extends Exercisable {
  itemId: string;
  due: Date;
}

const newExercise = <T extends Identifiable>(item: T): Exercise => {
  return {
    itemId: item.id,
    memo: {
      interval: 0,
      repetition: 0,
      efactor: 0
    },
    grade: 3,
    due: new Date()
  };
};

export const newSession = async <T extends Identifiable>(
  bank: Record<T>,
  learned: Record<Exercise>
): Promise<{ session: Session; newExercises: Record<Exercise> }> => {
  const allItems = Object.values(bank);
  const learnedEx = Object.values(learned);
  const dueNow = learnedEx.filter((ex) => isBefore(ex.due, new Date()));
  const newExercises = {};

  for (const item of allItems) {
    if (!learned[item.id]) {
      newExercises[item.id] = newExercise(item);
    }
  }

  const session = {
    id: uuid(),
    exerciseIds: [
      ...dueNow.map((ex) => ex.itemId),
      ...Object.keys(newExercises)
    ],
    startedOn: new Date()
  };

  if (session.exerciseIds.length === 0) {
    throw new Error('Insufficient exercises for creating a new session');
  }

  return {
    session,
    newExercises
  };
};
