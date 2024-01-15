# Contributing

This document will provide detailed instructions for setting up the project on your machine for development. If you only want to use dungeon-revealer, it is recommended to use the docker images or prebuilt binaries. [See the release section for more information](https://github.com/dungeon-revealer/dungeon-revealer/releases).

## Required Software

Make sure you have the following software installed:

- Node.js 18 (verify with `node --version`)
- npm 7 (verify with `npm --version`)

## Setting up the project

These are the most important commands for getting the dev server up and running.

### Install dependencies

```bash
npm run start
npm install
```

### Build backend and frontend

```bash
npm run build
```

### Run built application

```bash
npm run start
```

### Run application in dev mode

The server and frontend will be reloaded/restarted once the code has been modified.

Run the backend server:

```bash
npm run start:server:dev
```

Run the react development server:

```bash
npm run start:server:dev

Run the react development server:
```bash
npm run start:frontend:dev
npm run start:frontend:dev
```

visit `http://localhost:4000`

## Compile executables for distribution

We use caxa for bundling the built project as a binary. The built binaries can be found in the `bin` folder.

### Unix and darwin

```bash
npm run compile
```

### Windows

```bash
npm run compile:win
```

The executables are located in the bin folder.

## TypeScript Migration

We are currently in the process of migrating the code base to TypeScript.
All new files under `src` and `server` should be written in TypeScript using the `id` attribute instead of `templateId`. All new features should be built using TypeScript.

All new features should be built using TypeScript.
Existing features can be ported over to TypeScript by adding changing the file extension from `.js` to `.ts`/`.tsx`.

If you want to contribute to the TypeScript migration, feel free to open an issue or pull request.
