/// <reference lib="webworker" />

import { DiffMatchPatch } from 'diff-match-patch-ts';

addEventListener('message', ({ data }) => {
  try {
    if (typeof data.before !== 'string' || typeof data.after !== 'string') {
      throw new TypeError('Input data for diffing must be strings.');
    }

    const dmp = new DiffMatchPatch();
    console.time('dmp');
    const diffs = dmp.diff_lineMode(data.before, data.after);
    console.timeEnd('dmp');
    console.log(`${data.before.length} ${data.after.length} length`);

    postMessage({ id: data.id, status: 'success', diffs });
  } catch (error: any) {
    postMessage({
      id: data.id,
      status: 'error',
      error: { message: error.message, stack: error.stack },
    });
  }
});
