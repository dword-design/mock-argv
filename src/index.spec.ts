import { expect, test } from '@playwright/test';
import delay from 'delay';

import self from '.';

test('async', async () => {
  const argv = await new Promise<string[]>(resolve =>
    self(['foo', 'bar'], async () => {
      await delay(100);
      resolve(process.argv);
    }),
  );

  expect(argv).toEqual([...process.argv.slice(0, 2), 'foo', 'bar']);
});

test('empty args', async () => {
  const argv = await new Promise<string[]>(resolve =>
    self([], () => resolve(process.argv)),
  );

  expect(argv).toEqual(process.argv.slice(0, 2));
});

test('has args', async () => {
  const argv = await new Promise<string[]>(resolve =>
    self(['foo', 'bar'], () => resolve(process.argv)),
  );

  expect(argv).toEqual([...process.argv.slice(0, 2), 'foo', 'bar']);
});

test('missing args', async () => {
  const argv = await new Promise<string[]>(resolve =>
    self(() => resolve(process.argv)),
  );

  expect(argv).toEqual(process.argv.slice(0, 2));
});
