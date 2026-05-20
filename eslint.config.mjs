import nextVitals from 'eslint-config-next/core-web-vitals';

const eslintConfig = [
  ...nextVitals,
  {
    rules: {
      '@next/next/no-img-element': 'off',
    },
    ignores: [
      '.next/**',
      'out/**',
      'next-env.d.ts',
    ],
  },
];

export default eslintConfig;
