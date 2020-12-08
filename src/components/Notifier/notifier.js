import { notification } from './store.js'

export function send(message, type = 'default', timeout) {
  notification.set({ type, message, timeout })
}

export function show(type, msg, timeout) {
  send(msg, type, timeout);
}