/**
 * @author Dmitriy Bizyaev
 */

'use strict';

export const noop = /* istanbul ignore next */ () => {};

export const returnNull = /* istanbul ignore next */ () => null;

export const getKey = /* istanbul ignore next */ (item, index) =>
  item && typeof item.id !== 'undefined' ? item.id : index;
