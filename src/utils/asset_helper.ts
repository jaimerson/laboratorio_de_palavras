import Settings from '../settings'
import path from 'path'

function assetPath(name : string, assetPath : string = Settings.ASSET_PATH) : string {
    return path.join(assetPath, name);
}

function relativeAssetPath(name : string, relativeTo: string, _assetPath : string = Settings.ASSET_PATH) : string {
    return path.relative(assetPath(name, _assetPath), relativeTo)
}

export {
    assetPath,
    relativeAssetPath
}