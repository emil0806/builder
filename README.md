# Builder (Expo + React Native + TypeScript)

An Expo managed React Native project scaffolded manually.

## Scripts

- `npm start` – start Metro bundler / Expo dev tools
- `npm run ios` – build & run iOS (requires Xcode)
- `npm run android` – build & run Android (requires emulator/device)
- `npm run web` – run web target
- `npm test` – run Jest tests
- `npm run typecheck` – strict TypeScript check

## Getting Started

Install dependencies then start:

```sh
npm install
npm start
```

Press `i` or `a` in the Expo CLI to launch platforms or scan the QR code with the Expo Go app.

## Testing

```sh
npm test
```

Snapshot will be written on first run.

## Project Structure

- `App.tsx` root component
- `assets/` static assets
- `__tests__/` Jest tests

## Next Ideas

- Add navigation (react-navigation)
- Add ESLint + Prettier
- Setup CI workflow

Enjoy building! 🚀
