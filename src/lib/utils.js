/**
 * Several little utilities for this project.
 *
 * NOTE: These are NOT generic, and should not be copied
 * to other projects. They're quick imperfect implementations
 * for the known, fixed data we work with here.
 */
import dayjs from 'dayjs'

export const formatPrice = (price) => `$${price / 100}`

export const pluralize = (string, num) => (num === 1 ? `1 ${string}` : `${num} ${string}s`)

export const isNewShoe = (releaseDate) => dayjs().diff(dayjs(releaseDate), 'day') < 30
