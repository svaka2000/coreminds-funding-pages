import { subjects, locations } from '@/lib/growthPages'
import { livePrograms } from '@/lib/fundingPrograms'

const BASE = 'https://coremindstutor.org'

export default function sitemap() {
  const now = new Date()

  const core = ['', '/about', '/founders', '/ishan-shrivastava', '/abhyuday-yachareni', '/programs', '/pricing', '/teachers', '/reviews', '/coresports', '/coresports/basketball', '/coresports/volleyball', '/booking', '/referrals', '/submit-review', '/subjects', '/tutoring', '/funding']
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

  // Only programs CoreMinds is genuinely enrolled and active in — see the
  // status gate in src/lib/fundingPrograms.js.
  const fundingPages = livePrograms.map((p) => ({
    url: `${BASE}/funding/${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...core, ...subjectPages, ...locationPages, ...fundingPages]
}
