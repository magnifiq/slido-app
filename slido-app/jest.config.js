export default {
    preset: 'ts-jest',
    testEnvironment: 'jest-environment-jsdom',
    moduleNameMapper: {
        '^@mui/(.*)$': '<rootDir>/node_modules/@mui/$1',
    },
    testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'],
};
