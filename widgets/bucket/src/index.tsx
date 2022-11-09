
export { default as Widget } from './Widget';
export { resetStateAction } from './store/slice';

export * from './context';

export { name, reducer } from './store/slice';
export { getBucket, changeOpen, addToBucket, cleanBucket } from './store/commands';
export { selectData, selectIsOpen, selectInProcess, selectInUpdateProcess, selectInDeleteProcess } from './store/slice';
