import type {Config} from 'jest';

const config: Config = {
  testEnvironment: "node",
  verbose: true,
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};

export default config;