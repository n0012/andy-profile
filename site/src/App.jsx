import {
  Accessibility,
  Award,
  BookOpen,
  Car,
  ChefHat,
  Compass,
  Dog,
  GraduationCap,
  Handshake,
  Mail,
  MapPin,
  User,
  Users,
} from 'lucide-react'

// Assembled at runtime so the address never appears as a literal in the HTML source.
const EMAIL_USER = 'alosier'
const EMAIL_HOST = 'gmail.com'
const email = `${EMAIL_USER}@${EMAIL_HOST}`

const STATS = [
  { value: '250+', label: 'Students supported in current caseload' },
  { value: '20 yrs', label: 'Across admissions, counseling & student affairs' },
  { value: '7', label: 'Institutions served, K-12 through university' },
  { value: '5th', label: 'Generation Coloradan' },
]

const APPROACH = [
  {
    icon: Accessibility,
    title: 'Access',
    body: 'Removing the barriers between a student and their education — whether that barrier is a disability accommodation, a financial aid package, or simply not knowing which question to ask.',
  },
  {
    icon: Handshake,
    title: 'Belonging',
    body: 'Advising affinity groups, co-leading student support teams, and building the everyday conditions where students recognize themselves as part of a community rather than visitors to it.',
  },
  {
    icon: Compass,
    title: 'Relational Outreach',
    body: 'Recruitment built on long-horizon trust with counselors, educators, and families — partnerships that outlast any single admission cycle, not transactions that end at deposit day.',
  },
]

const EXPERIENCE = [
  {
    org: 'Arapahoe Community College',
    location: 'Littleton, CO',
    roles: [
      {
        title: 'Disability Access Specialist',
        unit: 'Disability Access Services',
        dates: 'September 2025 – Present',
        bullets: [
          'Manage a caseload of 250+ students with weekly intake and accommodation support meetings',
          'Document accommodations and disability documentation across Maxient, Navigate, and related systems',
          'Work within ADA, IDEA, and Section 504 requirements',
          'Partner with assistive technologists on accommodations including books in alternative format and recording tools',
          'Created and delivered accessible workshops on study skills and note taking',
          'Volunteer across the ACC community — Career Services, Student Affairs events, and LGBTQ+ affinity groups',
        ],
      },
      {
        title: 'Student Success Advisor',
        unit: 'TRIO',
        dates: 'August – September 2025',
        note: 'Temporary',
        bullets: [
          'Served first-generation, low-income, and disabled students',
          'Advised on academic planning, financial aid packages, and tutoring',
          'Created the “Pastries and Planning” workshop supporting executive functioning ahead of fall semester',
          'Managed student workers and peer advisors',
        ],
      },
      {
        title: 'Student Administrative Support',
        unit: 'Registrar',
        dates: 'June – August 2025',
        note: 'Temporary',
        bullets: [
          'Evaluated student records and enrollment status in Banner',
          'Responded to the records inbox with accuracy and care',
          'Evaluated transcripts for legitimacy, transferability, and prerequisite credit',
        ],
      },
    ],
  },
  {
    org: 'COLLEDGE, LLC',
    location: 'Los Angeles, CA — remote',
    roles: [
      {
        title: 'Director of Admission Services',
        dates: 'June 2023 – January 2024',
        bullets: [
          'Independent educational consultant to ~12 senior students and families, plus four early-start families',
          'Led recruitment, hiring, and onboarding for contract and full-time staff',
          'Built business development partnerships, including a college night program with UCLA and USC',
        ],
      },
    ],
  },
  {
    org: 'Francis Parker School',
    location: 'San Diego, CA',
    roles: [
      {
        title: '10th Grade Dean',
        dates: 'June 2019 – June 2020 & July 2021 – June 2023',
        bullets: [
          'Upper School Leadership Team member; primary point of contact for 140 students and families annually',
          'Appointed leader of the Student Support Team, meeting weekly on students of concern',
          'Co-advisor to a mixed-gender advisory group followed from 9th through 12th grade',
          'Co-advisor to the GSA and LGBTQ+ student affinity groups; chaperone and attendee at PoCC and SDLC',
          'Served on the faculty Culture Committee identifying areas to strengthen Upper School culture',
          'Represented the school on site visits to California independent schools for reaccreditation',
        ],
      },
      {
        title: 'Interim Associate Head of Upper School',
        dates: 'July 2020 – June 2021',
        bullets: [
          'Appointed alongside the Interim Head of Upper School to support leadership teams, faculty, and students',
          'Member of the Department Chair Committee; managed the librarian and assistant librarian',
          'Observed and evaluated faculty on teaching and classroom management',
          'Built strategies supporting faculty through pandemic and hybrid teaching, and protecting morale',
        ],
      },
      {
        title: 'Director of College Counseling',
        dates: 'July 2017 – June 2019',
        bullets: [
          'Counseled a quarter of the junior and senior classes through the college admission process',
          'Wrote detailed, personal letters of recommendation in support of student applications',
          'Visited campuses independently and on organized tours to understand fit',
          'Coordinated the annual Coastline Case Studies program with neighboring independent schools',
        ],
      },
    ],
  },
  {
    org: 'UCLA Extension',
    location: 'Los Angeles, CA',
    roles: [
      {
        title: 'Instructor',
        dates: 'March 2015 – August 2018',
        bullets: [
          'Taught “Counseling the College Bound Student” quarterly',
          'Graded and advised 25–50 aspiring college counselors per term',
          'Delivered a fully online, asynchronous course through Canvas',
        ],
      },
    ],
  },
  {
    org: 'Sage Hill School',
    location: 'Newport Coast, CA',
    roles: [
      {
        title: 'Associate Director of College Counseling',
        dates: 'July 2013 – June 2017',
        bullets: [
          'College counselor for a third of the junior and senior classes',
          'Supported sophomore service-learning students on monthly visits to partner schools in Santa Ana',
          'Chaperoned 10-day cultural immersion and service trips in Guatemala, France, Central Europe, and Japan',
        ],
      },
    ],
  },
  {
    org: 'University of Denver',
    location: 'Denver, CO',
    roles: [
      {
        title: 'Associate Director of Admission',
        dates: 'July 2007 – June 2013',
        bullets: [
          'Advised prospective students and families through the college admission process',
          'Presented to audiences of up to 350 in information sessions',
          'Traveled 6–9 weeks annually for recruitment, diversity, and retention outreach',
          'Ran the biannual Ammi Hyde Interview program serving 3,000+ prospective undergraduates',
          'Coordinated 300 alumni and 200 faculty and staff volunteers across 30 cities nationwide',
          'Managed an annual budget of $350,000+ and supervised program and visit staff',
        ],
      },
    ],
  },
  {
    org: 'Marymount College',
    location: 'Rancho Palos Verdes, CA',
    roles: [
      {
        title: 'Admission Officer',
        dates: 'July 2005 – June 2007',
        bullets: [
          'Traveled 8–10 weeks annually across California, Arizona, and Hawaii',
          'Coordinated hiring and training of student tour guides and panelists',
        ],
      },
    ],
  },
]

const SERVICE = [
  { org: 'AHEAD', detail: 'Member; completed six-week training and 12-month mentorship circle' },
  { org: 'WACAC', detail: 'Board member, Membership Chair, Summer Counselor Tour co-chair, 2014–2019' },
  { org: 'RMACAC', detail: 'Executive board member, Membership Chair, Conference Committee, 2011–2013' },
  { org: 'ACCIS', detail: 'Member and volunteer, 2013–2019' },
  { org: 'NACAC', detail: 'Member and volunteer since 2005; Los Angeles College Fairs co-chair, 2007' },
]

const HONORS = [
  {
    title: 'Spirit of Service Award',
    year: '2021',
    detail: 'Francis Parker School — for faculty who go above and beyond in support of the community',
  },
  {
    title: 'Faculty of the Month',
    year: '2019',
    detail: 'Francis Parker School — voted by the student body',
  },
  {
    title: 'Steven Hankins Award',
    year: '2015',
    detail: 'In recognition of a consummate professional who encourages new counselors to treat admissions as a calling',
  },
  {
    title: 'Pioneer Award',
    year: '2005',
    detail: 'University of Denver — among the university’s most prestigious student honors',
  },
]

const PERSONAL = [
  {
    icon: ChefHat,
    title: 'In the kitchen',
    detail: 'An enthusiastic cook — the household job nobody has to be talked into.',
  },
  {
    icon: Car,
    title: 'Classic cars',
    detail: 'A long-running soft spot for the ones built before the computers took over.',
  },
  {
    icon: Dog,
    title: 'Tater',
    detail: 'Three-year-old Lab/Pit mix, and a reliably poor influence on productivity.',
  },
]

// Role-specific pitch. Lives on its own page (cu.html) so the MSU Denver committee
// never lands on a page arguing why he wants to work somewhere else.
const CU_FIT = [
  {
    icon: MapPin,
    title: 'Colorado roots, not a relocation',
    body: 'Fifth-generation Colorado native, University of Denver graduate, and a board member of the Rocky Mountain Association of College Admission Counseling. The counselor relationships this role depends on are ones I have already spent years building.',
  },
  {
    icon: Users,
    title: 'Recruitment at scale',
    body: 'Six years in admission at the University of Denver — national travel, regional territory management, information sessions for audiences of up to 350, a 3,000-student interview program, and 500 alumni and staff volunteers coordinated across 30 cities.',
  },
  {
    icon: Handshake,
    title: 'Trust rather than transactions',
    body: 'Successful recruitment begins with authentic partnerships among school counselors, educators, families, and community leaders — relationships that outlast a single admission cycle rather than ending at deposit day.',
  },
  {
    icon: Accessibility,
    title: 'The students furthest from the door',
    body: 'Outreach designed for rural communities, transfer pathways, and historically underserved populations — informed by a current caseload of 250+ students navigating disability accommodations.',
  },
]

const SKILLS = [
  'Academic Advising',
  'Student Counseling',
  'Universal Design',
  'Disability Law',
  'Advisory Leadership',
  'DEI Advocacy',
  'Public Speaking',
  'Program Development',
  'Banner',
  'Maxient',
  'Navigate',
  'Canvas',
  'Scoir',
]

export default function App({ variant }) {
  return (
    <div className="min-h-screen bg-white font-sans text-ink antialiased">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-pine focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <Hero />

      <main id="main">
        {variant === 'cu' && <WhyCU />}
        <Stats />
        <Approach />
        <Experience />
        <TeachingAndService />
        <Honors />
        <Education />
        <Personal />
      </main>

      <Contact />
    </div>
  )
}

const Hero = () => (
  <header className="border-b border-sand-deep bg-sand">
    <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 px-6 py-14 text-center sm:flex-row sm:gap-8 sm:text-left md:py-20">
      <img
        src="images/andy.jpg"
        alt="Andy Losier"
        width="180"
        height="180"
        className="h-[140px] w-[140px] shrink-0 rounded-full object-cover shadow-md ring-4 ring-white md:h-[180px] md:w-[180px]"
      />
      <div>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-ink md:text-5xl">
          Andy Losier
        </h1>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-clay">
          Student Advocate
        </p>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
          Twenty years spent widening access to higher education — in admissions offices,
          counseling offices, and now disability access services.
        </p>
        <div className="mt-5 flex flex-wrap justify-center gap-2 sm:justify-start">
          <Pill icon={MapPin} label="Englewood, Colorado" />
          <Pill icon={Mail} label={email} href={`mailto:${email}`} />
        </div>
      </div>
    </div>
  </header>
)

const Stats = () => (
  <section aria-label="At a glance" className="border-b border-sand-deep bg-white">
    <dl className="mx-auto grid max-w-4xl grid-cols-2 gap-x-6 gap-y-8 px-6 py-12 md:grid-cols-4">
      {STATS.map((s) => (
        <div key={s.label}>
          <dt className="sr-only">{s.label}</dt>
          <dd>
            <span className="block font-display text-3xl font-semibold text-pine md:text-4xl">
              {s.value}
            </span>
            <span className="mt-1 block text-sm leading-snug text-ink-faint">{s.label}</span>
          </dd>
        </div>
      ))}
    </dl>
  </section>
)

const Approach = () => (
  <section aria-labelledby="approach-heading" className="bg-pine-soft">
    <div className="mx-auto max-w-4xl px-6 py-14 md:py-20">
      <SectionLabel icon={Compass} text="Approach" />
      <h2 id="approach-heading" className="mt-3 font-display text-3xl font-semibold text-ink">
        How I work with students
      </h2>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {APPROACH.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-xl border border-pine/15 bg-white p-6 shadow-sm">
            <Icon className="h-6 w-6 text-pine" aria-hidden="true" />
            <h3 className="mt-4 font-display text-xl font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{body}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Experience = () => (
  <section aria-labelledby="experience-heading" className="bg-white">
    <div className="mx-auto max-w-4xl px-6 py-14 md:py-20">
      <SectionLabel icon={Users} text="Experience" />
      <h2 id="experience-heading" className="mt-3 font-display text-3xl font-semibold text-ink">
        Where I&apos;ve served
      </h2>
      <div className="mt-10 space-y-12">
        {EXPERIENCE.map((org) => (
          <article key={org.org}>
            <div className="border-l-4 border-clay pl-4">
              <h3 className="font-display text-2xl font-semibold text-ink">{org.org}</h3>
              <p className="text-sm text-ink-faint">{org.location}</p>
            </div>
            <div className="mt-6 space-y-8 pl-4 md:pl-8">
              {org.roles.map((role) => (
                <div key={role.title}>
                  <h4 className="font-semibold text-ink">
                    {role.title}
                    {role.unit && <span className="font-normal text-ink-faint"> · {role.unit}</span>}
                  </h4>
                  <p className="mt-0.5 text-sm text-ink-faint">
                    {role.dates}
                    {role.note && (
                      <span className="ml-2 rounded bg-sand-deep px-1.5 py-0.5 text-xs text-ink-soft">
                        {role.note}
                      </span>
                    )}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {role.bullets.map((b) => (
                      <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-ink-soft">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-clay" aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
)

const TeachingAndService = () => (
  <section aria-labelledby="service-heading" className="border-y border-sand-deep bg-sand">
    <div className="mx-auto max-w-4xl px-6 py-14 md:py-20">
      <SectionLabel icon={BookOpen} text="Professional Service" />
      <h2 id="service-heading" className="mt-3 font-display text-3xl font-semibold text-ink">
        Beyond the day job
      </h2>
      <dl className="mt-8 divide-y divide-sand-deep border-y border-sand-deep">
        {SERVICE.map((s) => (
          <div key={s.org} className="grid gap-1 py-4 md:grid-cols-[8rem_1fr] md:gap-6">
            <dt className="font-semibold text-pine">{s.org}</dt>
            <dd className="text-sm leading-relaxed text-ink-soft">{s.detail}</dd>
          </div>
        ))}
      </dl>
      <h3 className="mt-10 font-display text-xl font-semibold text-ink">Skills &amp; systems</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {SKILLS.map((s) => (
          <li
            key={s}
            className="rounded-full border border-pine/20 bg-white px-3 py-1 text-sm text-ink-soft"
          >
            {s}
          </li>
        ))}
      </ul>
    </div>
  </section>
)

const Honors = () => (
  <section aria-labelledby="honors-heading" className="bg-white">
    <div className="mx-auto max-w-4xl px-6 py-14 md:py-20">
      <SectionLabel icon={Award} text="Honors" />
      <h2 id="honors-heading" className="mt-3 font-display text-3xl font-semibold text-ink">
        Recognition
      </h2>
      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {HONORS.map((h) => (
          <div key={h.title} className="rounded-xl border border-sand-deep bg-sand/50 p-5">
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="font-semibold text-ink">{h.title}</h3>
              <span className="shrink-0 text-sm text-clay">{h.year}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{h.detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Education = () => (
  <section aria-labelledby="education-heading" className="border-t border-sand-deep bg-white">
    <div className="mx-auto max-w-4xl px-6 py-14 md:py-20">
      <SectionLabel icon={GraduationCap} text="Education" />
      <h2 id="education-heading" className="mt-3 font-display text-3xl font-semibold text-ink">
        University of Denver
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-pine/15 bg-pine-soft p-6">
          <p className="font-display text-lg font-semibold text-ink">
            MA, Higher Education, Leadership &amp; Organizational Change
          </p>
          <p className="mt-1 text-sm text-ink-faint">University of Denver · 2012</p>
        </div>
        <div className="rounded-xl border border-pine/15 bg-pine-soft p-6">
          <p className="font-display text-lg font-semibold text-ink">BA, Journalism Studies</p>
          <p className="mt-1 text-sm text-ink-faint">University of Denver · 2005</p>
        </div>
      </div>
    </div>
  </section>
)

const WhyCU = () => (
  <section aria-labelledby="cu-heading" className="border-b border-sand-deep bg-pine-deep text-white">
    <div className="mx-auto max-w-4xl px-6 py-14 md:py-20">
      <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-pine-soft">
        <Compass className="h-4 w-4" aria-hidden="true" />
        University of Colorado Boulder
      </p>
      <h2 id="cu-heading" className="mt-3 font-display text-3xl font-semibold md:text-4xl">
        Associate Director for Outreach and Engagement
      </h2>
      <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pine-soft">
        Nearly twenty years in higher education, guided by a simple belief: every student
        deserves someone who will help them see college as a place where they belong.
      </p>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {CU_FIT.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-xl bg-white/10 p-6 ring-1 ring-white/15">
            <Icon className="h-6 w-6 text-pine-soft" aria-hidden="true" />
            <h3 className="mt-4 font-display text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-pine-soft">{body}</p>
          </div>
        ))}
      </div>
      <p className="mt-10 max-w-2xl leading-relaxed text-pine-soft">
        I enjoy thinking strategically while never losing sight of the individual student
        whose future may be changed by the decisions we make.
      </p>
    </div>
  </section>
)

const Personal = () => (
  <section aria-labelledby="personal-heading" className="border-t border-sand-deep bg-clay-soft">
    <div className="mx-auto max-w-4xl px-6 py-14 md:py-20">
      <SectionLabel icon={User} text="Off the clock" />
      <h2 id="personal-heading" className="mt-3 font-display text-3xl font-semibold text-ink">
        The person, not just the resume
      </h2>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">
        A fifth-generation Coloradan, back home in Englewood after two decades on the
        California coast.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {PERSONAL.map(({ icon: Icon, title, detail }) => (
          <div key={title} className="rounded-xl border border-clay/20 bg-white p-6 shadow-sm">
            <Icon className="h-6 w-6 text-clay" aria-hidden="true" />
            <h3 className="mt-4 font-display text-xl font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-soft">{detail}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
)

const Contact = () => (
  <footer className="bg-pine-deep text-white">
    <div className="mx-auto max-w-4xl px-6 py-14 text-center md:py-20">
      <h2 className="font-display text-3xl font-semibold">Let&apos;s talk</h2>
      <p className="mx-auto mt-3 max-w-lg leading-relaxed text-pine-soft">
        I&apos;m open to conversations about student affairs, access, and enrollment roles
        across Colorado.
      </p>
      <a
        href={`mailto:${email}`}
        className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-pine-deep transition hover:bg-sand"
      >
        <Mail className="h-4 w-4" aria-hidden="true" />
        {email}
      </a>
      <p className="mt-8 text-sm text-pine-soft/90">References available on request.</p>
    </div>
  </footer>
)

const SectionLabel = ({ icon: Icon, text }) => (
  <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-clay">
    <Icon className="h-4 w-4" aria-hidden="true" />
    {text}
  </p>
)

const Pill = ({ icon: Icon, label, href }) => {
  const className =
    'inline-flex items-center gap-1.5 rounded-full border border-pine/20 bg-white px-3 py-1.5 text-sm text-ink-soft'
  const content = (
    <>
      <Icon className="h-3.5 w-3.5 text-pine" aria-hidden="true" />
      {label}
    </>
  )
  return href ? (
    <a href={href} className={`${className} transition hover:border-pine hover:text-pine`}>
      {content}
    </a>
  ) : (
    <span className={className}>{content}</span>
  )
}
