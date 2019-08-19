
# Angular Ngrx Course

This repository contains the code of the [Angular Ngrx Course](https://github.com/imvr-24/angular-ngrx-course.git).

This course repository is updated to Angular v8, and there is a  package-lock.json file available, for avoiding semantic versioning installation issues.


# Ngrx Handbook

```js
@ngrx/
1. store
2. effects
3. entity
4. store-devtools
5. schematics
6. store freeze
7. router-store

```

## What Concrete problem does it solve

```bash

1. Reduce the no of http requests that we do
2. Improve hte user exprerience.(reduce no of loaders)
3. Edit Data Scenarios.(Saving as draft)
4. Reflecting chnges in the UI.(UI must be in sync with Latest Data).
5.

```

## Store Architecture

```bash

Store - Single store of Truth.

Store works as an in-memory database.

1. Actions(| Event): CourseChanged

2. Command: IncrementCounter.

** Key Notions.

1. Data is immutable and belongs to store.
2. Components subscribe to store.

```

## Setting up ngrx store with NgRx Schematics

```bash

`Ngrx Schematics`.

1. ng config cli.defaultCollection @ngrx/schematics

2. ng g store AppState --root --module app.module.ts

Exploring Centralized Store Service.

# Defining our first NgRx Action
3. ng generate action auth/Auth

# Defining an Action - Implement the login Component "1-auth"

4. Setting Up the NgRx Dev tools.

# reducer(current state, action) => new App State.
5. Understanding &  Writing Reducers.
6. Define the Store Initial State.

7. Speed up Reducer Development using NgRx Schematics

`ng generate reducer Auth --flat=false --module auth/auth.module.ts`

```
