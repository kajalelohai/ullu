import { array, object, string } from 'yup';

export const validateVocabBank = async <T>(bank: T): Promise<T> => {
  const wordSchema = object({
    article: string().required(),
    word: string().required()
  });

  const countableWordSchema = object({
    singular: wordSchema.required(),
    plural: wordSchema.required()
  });

  let nounSchema = object({
    id: string().required(),
    meaning: string().required(),
    gender: string().oneOf(['masculine', 'feminine', 'neuter']).required(),
    accusative: countableWordSchema.required(),
    nominative: countableWordSchema.required(),
    dative: countableWordSchema.required(),
    genitive: countableWordSchema.required()
  });

  const vocabSchema = nounSchema;

  const vocabBankSchema = array().of(vocabSchema);

  try {
    await vocabBankSchema.validate(bank);
    return bank;
  } catch (err) {
    throw err;
  }
};
