function normalize (property) {
  return property.startsWith('--') ? property : `--${property}` 
}

function get (property, elem = document.documentElement) {
  return getComputedStyle(elem).getPropertyValue(normalize(property)).trim()
}

function set (property, value, elem = document.documentElement) {
  elem.style.setProperty(normalize(property), value)
}

function toggle (property, values = [], elem = document.documentElement) {
  const existing = get(property, elem)

  if (!existing || !values.includes(existing)) return

  const newIndex = values.indexOf(existing) + 1
  const newValue = values[newIndex > values.length - 1 ? 0 : newIndex]
  set(property, newValue, elem)
}

export {
  get,
  set,
  toggle
}
