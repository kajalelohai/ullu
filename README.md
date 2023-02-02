# ullu - An application to learn German


> Note: At this stage, I am building Ullu with me as first and only user. So
> focus is on teaching me German most effectively. All other objectives are
> secondary to that.

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

Next stage for this app is to get useful for *me* asap. For that, I have chosen
these two tasks for immediate execution:

- [X] Adding Nouns

    We'll limit the app to guessing meaning of nouns for now. And implement
    singular/plural stuff after that, and thereafter more mature grammar. Adding
    nouns don't need a UI (since building good UIs is super time-consuming), we
    just need the nouns in our world somehow.

- [X] Tracking progress

    Once the nouns are in, I want the ability to start practicing remembering
    them. So a way of making and tracking progress should happen next. This will
    make the app useful for me, and we'll know how to evolve from there.
