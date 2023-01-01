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

- Zustand
    - https://github.com/pmndrs/zustand
    - Its small and lightweight
    - Makes the entire global state a hook and then just need to import it when
      needed
    - Less boilerplate and don’t need to wrap components in context provider
    - less learnning curve involved

- Redux Toolkit
    - https://redux-toolkit.js.org/introduction/getting-started
    - As compared with Redux it requires lesser code
    - createAsyncThunk helps in handling async operations well 
    - It's popular tried and tested by many developers

- Recoil
    - https://recoiljs.org/docs/introduction/getting-started
    - less boilerplate
    - backed by facebook with community support
    - learning curve is involved

- Valtio
   - https://www.npmjs.com/package/valtio
   - light weight proxy based state management
    - learning curve involved

Reference Links:
- https://docs.pmnd.rs/zustand/getting-started/comparison
- https://frontendmastery.com/posts/the-new-wave-of-react-state-management/
- https://reactjs.org/docs/context.html


IMO its better to use Reacct in built hooks for the beginning and as the app progress and state management is required the 
out of the above mentioned libraries I feel Zustand is a good option to consider. 
- It's easy to implement and understand.
- It provides a global store that can be accessed via the hook.
We could use the context api for the global state management but due to its default behavior to re-render all the
related components to the props change.

