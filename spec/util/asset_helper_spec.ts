import { assetPath } from '../../src/utils/asset_helper'

describe('assetPath', () => {
  it('returns the correct path to the asset', () => {
    expect(assetPath('potato', '/assets/path')).toEqual('/assets/path/potato')
  })
})