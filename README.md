# ullu - An application to learn German

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