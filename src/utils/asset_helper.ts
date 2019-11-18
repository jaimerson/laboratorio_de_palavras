import Settings from '../settings'
import path from 'path'

function assetPath(name: string, assetPath: string = Settings.ASSET_PATH): string {
  return path.join(assetPath, name);
}

function relativeAssetPath(name: string, _assetPath: string = Settings.ASSET_PATH): string {
  return path.relative(Settings.ROOT_PATH, assetPath(name, _assetPath))
}

export {
  assetPath,
  relativeAssetPath
}