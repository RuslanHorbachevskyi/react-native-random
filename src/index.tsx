import { NativeModules } from 'react-native'

const { Random } = NativeModules

export function getRandomNumber(min: number, max: number): Promise<number> {
  return Random.getRandomNumber(min, max)
}