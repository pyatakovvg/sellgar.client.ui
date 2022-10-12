
export { default as Widget } from './Widget';
export { resetStateAction } from './store/slice';

export * from './context';

export { name, reducer } from './store/slice';
export { getBucketSuccessRequestAction } from './store/slice';
export { selectData, selectIsOpen, selectInProcess } from './store/slice';
export { getBucket, changeOpen, addToBucket, cleanBucket } from './store/commands';
