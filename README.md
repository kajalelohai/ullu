# ullu - An applicationn to learn German

Ullu unlike other language learning applications, do not do any spoon feeding.
User builds their own learning path, Ullu only provides a medium for practicing
what user learns on their own.

Ullu provides:
1. A set of interactive UI widgets for practicing in different ways
2. An algorithm which keeps user on track and ensure optimal learning

Following widgets have been implemented so far:

1. **Vocabulary Card**

    **Behavior**
    1. Shows a word and ask user to guess it in their mind
    2. Accepts feedback from user on how hard it was to guess the word. This
       feedback is used to determine how often this word will be repeated for
       user
    3. Provides a way to see examples before revealing the meaning of shown word

## TODOs
- [ ] Decide
    - [ ] How to do state management
    - [ ] How to perform async actions12345
    - [ ] How to handle errors
- [ ] Update `VocabCard` component

## State management Libraries to be considered

- [ ] Zustand
    - [ ] Its small and lightweight
    - [ ] Makes the entire global state a hook and then just need to import it when needed
    - [ ] Less boilerplate and don’t need to wrap components in context provider
    - [ ] less learnning curve involved

- [ ] Redux Toolkit
    - [ ] As compared with Redux its requires lesser code
    - [ ] createAsyncThunk helps in handling async operations well 
    - [ ] Its popular tried and tested by many developers

- [ ] Recoil
    - [ ] less boilerplate
    - [ ] backed by facebook with community support
    - [ ] learning curve is involved

- [ ] Voltio
    - [ ] light weight proxy based state management
    - [ ] learning curve involved

