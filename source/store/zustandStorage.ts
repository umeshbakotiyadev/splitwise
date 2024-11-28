import { MMKV } from 'react-native-mmkv'
import { initialState } from 'utils';
import { StateStorage } from 'zustand/middleware';

export const storage = new MMKV();

const zustandStorage: StateStorage/* : PersistStorage<IAppState> */ = {
    ...storage,
    getItem: (name: string) => JSON.parse(storage.getString(name) || JSON.stringify(initialState)),
    setItem: (name: string, value: string) => storage.set(name, JSON.stringify(value)),
    removeItem: (name: string) => storage.delete(name),
};

export default zustandStorage;