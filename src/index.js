/**
 * highestPowerTwo
 * https://github.com/kapowaz/highest-power-two
 *
 * Copyright (c) 2017 Ben Darlow
 * Licensed under the MIT license.
 */

export default function highestPowerTwo(number) {
  switch (true) { // eslint-disable-line default-case
    case typeof number !== 'number':
    case number < 1:
      return 0;
  }

  let result = 1;

  for (let i = 0; i < (Number.MAX_SAFE_INTEGER - 1); i++) {
    const current = 1 << i;
    if (current > number) break;
    result = current;
  }

  return result;
}
