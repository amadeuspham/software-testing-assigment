import isBuffer from '../../isBuffer'
import root from '../../.internal/root'

/** Detect free variable `exports`. */
const freeExports = typeof exports === 'object' && exports !== null && !exports.nodeType && exports

/** Detect free variable `module`. */
const freeModule = freeExports && typeof module === 'object' && module !== null && !module.nodeType && module

/** Detect the popular CommonJS extension `module.exports`. */
const moduleExports = freeModule && freeModule.exports === freeExports

/** Built-in value references. */
const Buffer = moduleExports ? root.Buffer : undefined

describe('isBuffer should determine whether a value is a buffer', () => {
  it('should return true for a buffer', () => {
    expect(isBuffer(new Buffer(2))).toBe(true)
  })
  it('should return false for an object that is not a buffer', () => {
    expect(isBuffer(new Uint8Array(2))).toBe(false)
  })
})