import { describe, it, expect } from 'vitest'
import { formatDate } from '../src/utils/dateFormatter'

describe('formatDate', () => {
  it('formats an ISO date string', () => {
    expect(formatDate('2024-01-02')).toBe('January 2, 2024')
  })

  it('formats an ISO date-time string', () => {
    expect(formatDate('2024-06-15T00:00:00Z')).toBe('June 15, 2024')
  })
})
