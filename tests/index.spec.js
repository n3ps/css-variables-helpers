import { get, set, toggle } from '../index.js'

describe('Get/Set', () => {
  it('sets and retrieves CSS custom property', () => {
    const div = document.createElement('div')
    set('--test', '1px', div)
    
    const result = get('--test', div)
    
    expect(result).toEqual('1px')
  })

  it('sets and retrieves using shorthand', () => {
    const div = document.createElement('div')
    set('test', 'blue', div)
    
    const result = get('test', div)
    
    expect(result).toEqual('blue')
  })
})

describe('Toggle', () => {
  it('toggles between two values', () => {
    const div = document.createElement('div')
    const options = ['100%', '900px']

    set('container-width', options[0], div)
    toggle('container-width', options, div)

    const result = get('container-width', div)
    expect(result).toEqual(options[1])
  })

  it('cycles through multiple values', () => {
    const div = document.createElement('div')
    const options = ['red', 'orange', 'yellow', 'green', 'blue']

    set('--palette', options[0], div)
    toggle('--palette', options, div)
    toggle('--palette', options, div)
    toggle('--palette', options, div)

    const result = get('--palette', div)
    expect(result).toEqual('green')
  })
})