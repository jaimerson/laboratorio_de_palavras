import path from 'path'

export default class Settings {
  static readonly ROOT_PATH = path.join(__dirname, '..')
  static readonly ASSET_PATH = path.join(Settings.ROOT_PATH, 'assets')
}
