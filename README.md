# NextJS App Template

Use for medium and large web app development.

## Overview

- Framework: [NextJS v13+ (App Router)](https://nextjs.org/docs)
- Component library: [Material UI](https://mui.com/material-ui/getting-started/overview/)
- Multi-languages: [next-intl](https://next-intl-docs.vercel.app/)
- Documentation: [Storybook](https://storybook.js.org)
- Data Fetching: [SWR + fetch](https://swr.vercel.app/)
- Data Mockup: [@gr2m/fetch-mock](https://www.npmjs.com/package/@gr2m/fetch-mock) + [faker-js](https://fakerjs.dev/)
- Authentication: [NextAuth](https://next-auth.js.org/)
- Package manager: [pnpm](https://pnpm.io)
- Editor: [vscode](https://code.visualstudio.com/download)
- CI/CD: [GitLab CI/CD](https://docs.gitlab.com/ee/ci/)
- Deployment: [Docker v24+](https://www.docker.com/)
- Commit Lints
  - [husky](https://typicode.github.io/husky/)
  - [eslint](https://nextjs.org/docs/pages/building-your-application/configuring/eslint)
  - [prettier](https://nextjs.org/docs/pages/building-your-application/configuring/eslint#prettier)
  - [lint-staged](https://nextjs.org/docs/pages/building-your-application/configuring/eslint#lint-staged)
  - [commitlint-jira](https://www.npmjs.com/package/commitlint-config-jira)
- Recommended Chrome extension:
  - [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  - [SWR DevTools](https://chrome.google.com/webstore/detail/swr-devtools/liidbicegefhheghhjbomajjaehnjned)

## Getting Started

```bash
# Install dependencies
pnpm install

# Start in development mode
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

```bash
# Start storybook
pnpm storybook

# Scan translation keys (t-scan)
pnpm tscan
```

## Project Structure

- `public` -- Public assets like images, media files,...
- `src` -- Source code
  - `app` -- **NextJS App Directory**
    - `[locale]` -- [Pages root](https://nextjs.org/docs/app/building-your-application/routing)
    - `api` -- [APIs root](https://nextjs.org/docs/app/building-your-application/routing/router-handlers)
    - `locales` -- [Translation strings](https://next-intl-docs.vercel.app/docs/usage/messages)
  - `components` -- **React Components**
    - `<page-name>` -- Contains components used in the page
      - `<component-name>.tsx` -- UI components
      - `<component-name>.stories.tsx` - [Storybook declaration](https://storybook.js.org/docs/react/writing-stories/introduction)
    - `layout` -- Large components which are wrap around page components
    - `shared` -- Smaller components which are shared among pages
  - `config` -- App configuration variables
  - `hooks` -- [React custom hooks](https://react.dev/learn/reusing-logic-with-custom-hooks) for fetching or processing data or states
    - `<resource-name>` -- Hooks to fetch or process a particular resource
    - `shared` -- Hooks to share logic among components
  - `mocks` -- [Fetch mocks](https://www.wheresrhys.co.uk/fetch-mock/), used for mocking APIs responses
    - `index.ts` -- Starting point of the mocks, mocked files must be imported and triggered here.
    - `<resource-name>.mock.ts` -- Mocks definition of particular resource
  - `providers` -- App features providers
    - `index.tsx` -- Root provider, declared providers should be used here
    - `<provider-name>.tsx` - Feature provider definition
  - `types` -- Typescript types
    - `<resource-name>.ts` -- Types declaration of a particular resource
    - `shared.ts` -- Types shared among resources
  - `utils` -- Helpers functions to process data

**See more at [CONVENTIONS.md](./CONVENTIONS.md)**

## Code Snippets

### TRANSLATE_STRING

- **Snippet**: `trString`
- **Description**: Translate a string (already have quotes)
- **Output**:

```jsx
t()
```

### **TRANSLATE_TEXT** *frequently used*

- **Snippet**: `trText`
- **Description**: Translate a text (not have quotes yet)
- **Output**:

```jsx
t('')
```

### **TRANSLATED_TEXT_NODE** *frequently used*

- **Snippet**: `trTextNode`
- **Description**: Translate text inside ReactNode
- **Output**:

```jsx
{t('')}
```

### TRANSLATED_PROPERTY_VALUE

- **Snippet**: `trTextProperty`
- **Description**: Translate text inside component property
- **Output**:

```jsx
{t()}
```

### USE_TRANSLATION

- **Snippet**: `trHook`
- **Description**: Use translation hook
- **Output**:

```jsx
const t = useTranslations('ComponentName');
```

### USE_QUERY_PARAMS

- **Snippet**: `useQueryParams`
- **Description**: useQueryParams hook
- **Output**:

```jsx
const [value, setValue] = useQueryParams<Type>(initialValue);
```

### TRANSLATED_COMPONENT

- **Snippet**: `trComponent`
- **Description**: Create a React functional component with translation
- **Output**:

```jsx
'use client';

import React from 'react';
import { useTranslations } from 'next-intl';

export type ComponentNameProps = object

function ComponentName({}: ComponentNameProps) {
  const t = useTranslations('ComponentName');

  return <></>;
}

export default ComponentName;
```

### STORYBOOK_COMPONENT

- **Snippet**: `sbc`
- **Description**: Create a story of component
- **Output**:

```jsx
import type { Meta, StoryObj } from '@storybook/react';
import ComponentName from './ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Errors/ComponentName',
  component: ComponentName,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ComponentName>;

export const Playground: Story = {
  args: {
    
  },
};
```

## Maintainers

- Raymond <tvngoan@drimaes.com>
