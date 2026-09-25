import { subjects, locations } from '@/lib/growthPages'

const BASE = 'https://coremindstutor.org'

export default function sitemap() {
  const now = new Date()

  const core = ['', '/about', '/founders', '/ishan-shrivastava', '/abhyuday-yachareni', '/programs', '/pricing', '/teachers', '/reviews', '/coresports', '/coresports/basketball', '/coresports/volleyball', '/booking', '/referrals', '/submit-review', '/subjects', '/tutoring']
    .map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: path === '' ? 1 : 0.8,
    }))

  const subjectPages = subjects.map((s) => ({
    url: `${BASE}/subjects/${s.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const locationPages = locations.map((l) => ({
    url: `${BASE}/tutoring/${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...core, ...subjectPages, ...locationPages]
}
