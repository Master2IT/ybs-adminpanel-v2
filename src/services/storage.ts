'use client'

const token_key = 'ybs.token'

const get = (key?: string) => {
  if (typeof window !== 'undefined') {
    let value: any = localStorage.getItem(key || token_key || '')
    return value ?? JSON.parse(value)
  }
}

const set = (value: string | object, key?: string) => {
  if (typeof window !== 'undefined') {
    if (typeof value === 'object') value = JSON.stringify(value)

    localStorage.setItem(key || token_key, value)
  }
}

const clear = (key?: string) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(key || token_key)
  }
}

export default {
  get,
  set,
  clear
}
