/* ======================================================
   Rugby's Roaming Gazette — main.js
   Timeline rendering, modal, starfield
   ====================================================== */

// ── Timeline Data ─────────────────────────────────────

const EVENTS = [
  {
    id: 'pre-war',
    date: 'Early 4885',
    headline: 'Three Dragons. One Agenda.',
    subhead: 'Gorthak Unites the Orc Clans — War Approaches',
    tag: 'LORE', tagClass: 'tag-lore',
    teaser: 'Blue, red, and green dragons begin coordinating attacks on churches across the region. Meanwhile, orc warlord Gorthak unites every clan under one banner — unprecedented in living memory.',
    summary: `Three dragons are operating in concert — a blue from the Isle of Torta, a red that escaped from Stroth Castle, and a green. They are coordinating attacks on churches across the region. Dragons do not cooperate. Something is orchestrating them from the shadows.

Simultaneously, orc warlord Gorthak accomplishes the impossible: uniting every orc clan under one banner. He seizes multiple Squiylian cities in rapid succession and issues a single demand — return his son Zakmed, who escaped from Binneth's prison.

Trolls have begun descending from the mountains, possibly in alliance with the orc forces. The region is being squeezed from multiple directions at once, and the Gazette's war correspondent Rex Sauvage is already in the field.`,
    pdfs: [{ file: 'Rugbys Gazzette 4_1_19.pdf', label: 'Issue I' }]
  },
  {
    id: 'binneth-fires',
    date: 'April 12, 4885',
    headline: 'Binneth Fires First',
    subhead: 'The War for the Howling Gulf Begins',
    tag: 'WAR', tagClass: 'tag-war',
    teaser: 'Binneth launches a surprise attack on Squiyles. The Howling Gulf — once a thriving trade corridor — becomes a theatre of war overnight. King Stroth declares a state of war.',
    summary: `Binneth fires first. The naval war that diplomats warned of for months arrives without further warning. Binneth warships engage Squiylian vessels in the Howling Gulf in a coordinated strike that catches the kingdom off guard.

King Stroth declares a full state of war. The draft begins immediately — men of fighting age across Squiyles conscripted into service. Agricultural production begins to stall as the workforce is pulled from the fields.

The Gazette, never one to understate things, encourages readers to "Watch the war!" from a safe vantage.`,
    pdfs: [{ file: 'Rugbys Gazzette 4_9_19.pdf', label: 'Issue II' }]
  },
  {
    id: 'fire-lance',
    date: 'April 15, 4885',
    headline: 'The Fire Lance',
    subhead: "Binneth's Secret Weapon Burns Half the Fleet",
    tag: 'WAR', tagClass: 'tag-war',
    teaser: "Binneth's secret gnomish warships breathe fire. In a single engagement, half of Squiyles' entire naval fleet is reduced to burning wreckage in the Howling Gulf.",
    summary: `Binneth reveals its secret weapon: the Fire Lance ship. Built through a collaboration of gnomish engineering and naval architecture, these vessels are capable of projecting torrents of fire across open water. In a single night engagement, they reduce half of Squiyles' fleet to ash and splinter.

The scale of the loss is staggering. Squiyles had counted on naval parity. That calculation is now obsolete.

King Stroth is reportedly furious but unbowed. The kingdom's Wizard Special Forces are being mobilized in response. Whatever comes next, the war has fundamentally changed character.`,
    pdfs: [{ file: 'Rugbys Gazzette 4_15_19.pdf', label: 'Issue III' }]
  },
  {
    id: 'naval-standoff',
    date: 'April 24, 4885',
    headline: 'Naval Standoff',
    subhead: 'Squiyles Challenges Binneth in the Gulf',
    tag: 'WAR', tagClass: 'tag-war',
    teaser: 'The remaining Squiylian fleet moves to challenge Binneth in the Howling Gulf. Doppelgangers are reported infiltrating Ezaso City — Captain Tartan dismisses it as "the flu."',
    summary: `The surviving Squiylian fleet forms up in the Howling Gulf in a direct challenge to Binneth's naval dominance. The standoff is tense. Neither side has fired yet.

Behind the war headlines, a quieter threat: doppelgangers have been reported in Ezaso City, infiltrating civilian life. Captain Tartan of the city guard publicly attributes the suspicious behavior to a flu outbreak. It is not the flu.

Mysterious black-masked figures have also been spotted abducting people in Thorhofn. No authority has claimed responsibility or offered an explanation.`,
    pdfs: [{ file: 'Rugbys Gazzette 6_10_19.pdf', label: 'Issue IV' }]
  },
  {
    id: 'shots-fired',
    date: 'April 28, 4885',
    headline: 'Shots Fired — War Commences',
    subhead: 'Full-Scale Conflict Erupts Across the Gulf',
    tag: 'WAR', tagClass: 'tag-war',
    teaser: 'The standoff ends. Full-scale naval warfare erupts in the Howling Gulf. The Gazette reports from the front lines as kingdoms burn their bridges with one another — literally.',
    summary: `The standoff is over. Full-scale warfare has erupted in the Howling Gulf. Ships are burning, men are dying, and the political landscape of the known world is changing hour by hour.

Field correspondent Rex Sauvage sends dispatches from close to the front. His reports are characteristically vivid — perhaps recklessly close to the action. The Gazette publishes everything.

The orc occupation of Squiyles' eastern farmland continues, and trolls are rampaging through the central agricultural heartland. Food supply disruption is becoming critical. The kingdom is fighting on three fronts: sea, east, and from within.`,
    pdfs: [{ file: 'Rugbys Gazzette 6_17_19.pdf', label: 'Issue V' }]
  },
  {
    id: 'wizards-join',
    date: 'May 4, 4885',
    headline: 'Squiyles Wizards Join Fight',
    subhead: 'Grandmaster Kirby Tears Himself Apart; Space Program Announced',
    tag: 'MAGIC', tagClass: 'tag-magic',
    teaser: "Squiyles' Wizard Special Forces take to the skies under Captain Hoolihan, lobbing fireballs at Binneth ships. Meanwhile, a grandmaster's public immortality demonstration ends catastrophically.",
    summary: `Captain Hoolihan leads Squiyles' Wizard Special Forces into the air above the Howling Gulf. Fireball after fireball rains down on Binneth ships as the battle mages begin their campaign. Ship after ship burns. The night sky is lit orange from the shore.

Elsewhere, Grandmaster Wizard Kirby was publicly demonstrating a theoretical spell stacking technique that could render the caster immortal. In front of a packed lecture hall, the compound magical mishap shattered through him — multiple versions of himself ripped through focusing mirrors and collided. Beams of light shot in every direction. There has been no sign of him since.

In lighter news, the Kingdom of Turgythe has announced the world's first space program. Using gnomish fire propulsion and oxygen recycling magic, they intend to travel to the space between the world and the heavens themselves. Lead researcher Dr. Joanne Hingbrant: "We plan to go where no humanoid has gone before."

Food shortages are worsening. Revolt is on the lips of the hungry.`,
    pdfs: [{ file: 'Rugbys Gazzette 6_24_19.pdf', label: 'Issue VI' }]
  },
  {
    id: 'whirlpools',
    date: 'May 8, 4885',
    headline: 'Magic Whirlpools in the Gulf',
    subhead: 'Cacoal Falls to Doppelgangers; Rex Sauvage Still Missing',
    tag: 'MAGIC', tagClass: 'tag-magic',
    teaser: 'Two magical waterspouts spiral in the Howling Gulf, growing to 300 feet. The entire nation of Cacoal is revealed to have been silently conquered by doppelgangers — who now demand recognition as a sovereign state.',
    summary: `Two massive magical waterspouts have appeared in the center of the Howling Gulf, spiraling around each other and growing rapidly. By the time the Gazette reports, they are 300 feet tall and 50 feet wide. No one knows who controls them or who conjured them.

In more shocking news: the entire country of Cacoal has been covertly overtaken by doppelgangers. The leadership declares themselves the Changeling Nation and demands recognition as a sovereign state alongside any other kingdom. Former resident Gerard Twombly responds: "You can't just steal an entire country! I say we burn the whole damn thing to the ground!" King Stroth makes no statement.

A fisherman near the Isle of Death — east of Sawyen — witnessed figures emerging from a green flash of light in the sky, trailing noxious smoke.

Rex Sauvage remains missing. He wears an anti-scrying amulet, and all magical attempts to locate him have failed. His wife and children are worried sick.`,
    pdfs: [{ file: 'Rugbys Gazzette 7_15_19.pdf', label: 'Issue VII' }]
  },
  {
    id: 'squiyles-falls',
    date: 'June 1, 4885',
    headline: "Squiyles Has Fallen",
    subhead: 'Post-War Land Grab; Something Growls from the Gulf',
    tag: 'WAR', tagClass: 'tag-war',
    teaser: "The war is over. Squiyles is destroyed. Binneth expands north. Changelings seize the ruins. And the magical waterspouts have left something behind — a permanent, growling hole in the middle of the Howling Gulf.",
    summary: `The war is over. The Kingdom of Squiyles has fallen.

In the aftermath, every wealthy family is scrambling for land, declaring noble houses and feuding over territory rights. Conflicting militias impose conflicting laws. The Gazette advises that only those who wish to live a "wild west" style of life should venture into the former territories.

Binneth, having lost virtually no military force, expands north into new territory and lifts trade blockades on the Howling Gulf. The paper's economists predict a rising world power.

Changelings have established rulership over most of what was once Squiyles, ruling with an iron fist.

The Gazette has packed up from the ruins of Conopimalis and relocated to Stogath Isle in the Western Territories.

The magical waterspouts have disappeared — but they left something behind. In the center of the Gulf: a calm, circular hole in the water. Not a vortex. No spin. Water simply pours endlessly into it. It gives off a magical aura. Fisherman Paulie says he heard a deep growl coming from inside. The Gazette is offering payment for any field reporter willing to go investigate.`,
    pdfs: [{ file: 'Rugbys Gazzette 10_7_19.pdf', label: 'Issue VIII' }]
  },
  {
    id: 'peace-summit',
    date: 'June 7, 4885',
    headline: 'The Peace Summit That Wasn\'t',
    subhead: 'Doppelgangers Caught Impersonating World Leaders; Rex Sauvage Is Dead',
    tag: 'POLITICS', tagClass: 'tag-politics',
    teaser: 'The Changeling Nation hosts an international peace summit. It collapses into violence when the changelings are caught assuming the identities of attending rulers and diplomats. Every leader present is humiliated.',
    summary: `The Changeling Nation hosts an international peace summit in the former Squiylian capital, inviting representatives from Gaithyre, McCathlyre, Turgythe, and Hawkthorne. The gesture is widely interpreted as an attempt at legitimacy.

It ends in chaos. Multiple changeling representatives are caught mid-conference using their shapeshifting to assume the identities of other rulers and diplomats — attempting to rig the proceedings. As the deception is exposed, the conference collapses into violence. Every attending nation's leader leaves embarrassed and disgraced. Relations between empires have been set back immeasurably.

New field journalist Timothy Mantooth files his first dispatch: he is heading to the Balnaskor Mountains to continue the legacy of Rex Sauvage — confirmed dead, killed in the Orc Lands on assignment. Mantooth reports hearing of a mysterious mountain town enveloped in fog that no one who enters can leave.

A wealthy goblin noble named Narfuuuk has posted a 10,000 gold bounty for the safe return of his kidnapped nephew, last seen being manacled by adventurers heading into those same mountains.`,
    pdfs: [
      { file: 'Rugbys Gazzette 4_13_20.pdf', label: 'Summit Announced' },
      { file: 'Rugbys Gazzette 12_18_22.pdf', label: 'Summit Collapses' }
    ]
  },
  {
    id: 'miasmic-cloud',
    date: 'July 4, 4885',
    headline: 'Flee. Now.',
    subhead: 'The Miasmic Death Cloud Is Spreading',
    tag: 'HORROR', tagClass: 'tag-horror',
    teaser: 'A green death cloud expanding from the shores of Sawyen and Suenth turns everything it touches to bones. It has already swallowed eastern Binneth, the Orc Lands, and Hawkthorne. The Gazette breaks format to scream at its readers to run.',
    summary: `A miasmic green cloud is spreading outward from the shores of Sawyen and Suenth. It converts everything it contacts to bones on contact. Fisherman Buckley watched his brother step through a flash of green light. "Just bones were thar after."

The cloud is growing every single day. By the time of this issue it has already consumed eastern Binneth, the Orclands, and Hawkthorne. Governments are opening and closing borders by the hour. Underground bunkers are being built — the cloud has difficulty penetrating soil. Makeshift ventilation systems are being assembled.

During the evacuation, a small mountain village called Meschen was discovered — completely isolated, almost no contact with the outside world. Volunteers tried to warn them. The villagers fed the rescuers potatoes. They could not comprehend the concept of what was approaching. The volunteers left them to their fate.

The Changeling Nation: total silence. Not a word through any of this.

The Gazette abandons its editorial voice entirely to print in plain text: "Get out! Go! Stop reading this! For the love of Desna get the hell to safety!"`,
    pdfs: [{ file: 'Rugbys Gazzette 12_26_22.pdf', label: 'Issue X' }]
  },
  {
    id: 'troll-tincture',
    date: 'December 19, 4885',
    headline: 'Troll Tincture Saves Territories',
    subhead: 'Alchemists Crack Troll Biology; A Night Airship Haunts the Sky',
    tag: 'MAGIC', tagClass: 'tag-magic',
    teaser: 'Six months after the death cloud. Alchemists have synthesized a compound that spreads through troll reproduction and permanently eliminates their regeneration. The troll age may be ending. A mysterious airship has been spotted flying only at night.',
    summary: `Six months have passed. The Gazette is still publishing from Stogath Isle.

Alchemists have achieved a breakthrough: a compound that spreads through troll copulation and permanently alters their DNA, making them killable without fire for the first time in history. Troll populations are expected to collapse. The mountainous regions may finally be habitable again.

The "Rugmandella" death race has been announced — a no-rules, no-consequences magic carpet competition in Lauvog. Crimes against fellow participants are explicitly permitted. The grand prize: the Rugmandella, the most tricked-out magic carpet ever constructed.

The city of Godoy is experiencing a guard shortage. Captain Darian Steele holds the city's bank largely alone.

Field reporter Ray Parker submits a strange account: a medium-sized airship, unlike any known vessel, flies only at night beneath storm clouds. It leaves no records of arrivals or departures. It vanishes by dawn. Parker has made it his personal investigation. He does not yet know what it is.`,
    pdfs: [{ file: 'Rugbys Gazzette 9_24_23.pdf', label: 'Issue XI' }]
  },
  {
    id: 'material-plane',
    date: 'April 17, 4900',
    headline: 'The Material Plane Is No More',
    subhead: 'The Agency Investigates Day Zero',
    tag: 'ENDTIMES', tagClass: 'tag-endtimes',
    teaser: 'Fifteen years after the last Gazette issue. The stars have been going out for years. Today the last one does. Then the material plane simply ceases to exist. Survivors flee to the Feywild, the Shadowfell, and the Ethereal Plane.',
    summary: `Fifteen years of silence. Then this.

The stars have been disappearing one by one for years — astronomers unable to explain it, despite Turgythe's space program never quite making it off the ground. Today the last star goes out.

Then the material plane ceases to exist.

Survivors who found shelter on adjacent planes — the Feywild, the Shadowfell, the Ethereal — are now refugees. There is no home to return to. The material plane is gone.

An organization calling itself The Agency, led by a Dr. E. Brown, is operating across multiple planes. They are investigating what they have termed "Day Zero" — a space-time paradox that they believe to be the root cause of the unraveling. The evidence suggests deliberate interference with the timeline itself.

This is the final issue of Rugby's Roaming Gazette. New publications whenever we feel like it.`,
    pdfs: [{ file: 'Rugbys Gazzette 5_12_19.pdf', label: 'Final Issue' }]
  }
];

// ── Archive Data ───────────────────────────────────────

const ARCHIVE = [
  { file: 'Rugbys Gazzette 4_1_19.pdf',   inworld: 'Early 4885',        headline: 'Dragons, Orcs & the Storm to Come',       issue: 'Issue I' },
  { file: 'Rugbys Gazzette 4_9_19.pdf',   inworld: 'April 12, 4885',    headline: 'Binneth Fires First',                     issue: 'Issue II' },
  { file: 'Rugbys Gazzette 4_15_19.pdf',  inworld: 'April 15, 4885',    headline: 'The Fire Lance',                          issue: 'Issue III' },
  { file: 'Rugbys Gazzette 4_22_19.pdf',  inworld: 'April 12, 4885',    headline: 'Binneth Fires First (reprint)',           issue: 'Reprint', dupe: true },
  { file: 'Rugbys Gazzette 4_29_19.pdf',  inworld: 'April 15, 4885',    headline: 'The Fire Lance (reprint)',                issue: 'Reprint', dupe: true },
  { file: 'Rugbys Gazzette 6_10_19.pdf',  inworld: 'April 24, 4885',    headline: 'Naval Standoff',                          issue: 'Issue IV' },
  { file: 'Rugbys Gazzette 6_17_19.pdf',  inworld: 'April 28, 4885',    headline: 'Shots Fired — War Commences',             issue: 'Issue V' },
  { file: 'Rugbys Gazzette 6_24_19.pdf',  inworld: 'May 4, 4885',       headline: 'Squiyles Wizards Join Fight',             issue: 'Issue VI' },
  { file: 'Rugbys Gazzette 7_15_19.pdf',  inworld: 'May 8, 4885',       headline: 'Magic Whirlpools in the Gulf',            issue: 'Issue VII' },
  { file: 'Rugbys Gazzette 10_7_19.pdf',  inworld: 'June 1, 4885',      headline: 'Post-War Nations Dash for Land',          issue: 'Issue VIII' },
  { file: 'Rugbys Gazzette 4_13_20.pdf',  inworld: 'June 7, 4885',      headline: 'International Peace Meeting',             issue: 'Issue IX-A' },
  { file: 'Rugbys Gazzette 12_18_22.pdf', inworld: 'June 7, 4885',      headline: 'Peace Summit Results in Chaos',           issue: 'Issue IX-B' },
  { file: 'Rugbys Gazzette 12_26_22.pdf', inworld: 'July 4, 4885',      headline: 'Miasmic Cloud Spreading Fast',            issue: 'Issue X' },
  { file: 'Rugbys Gazzette 9_24_23.pdf',  inworld: 'December 19, 4885', headline: 'Troll Tincture Saves Territories',        issue: 'Issue XI' },
  { file: 'Rugbys Gazzette 5_12_19.pdf',  inworld: 'April 17, 4900',    headline: 'The Material Plane Is No More',           issue: 'Final Issue' },
];

// ── Starfield ──────────────────────────────────────────

(function initStarfield() {
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let stars = [];
  const COUNT = 320;
  const DEATH_INTERVAL = 9000;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function makeStars() {
    stars = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.2,
      baseOpacity: Math.random() * 0.65 + 0.25,
      twinkleSpeed: Math.random() * 0.025 + 0.004,
      twinklePhase: Math.random() * Math.PI * 2,
      alive: true,
      dyingOpacity: -1,
    }));
  }

  function killOne() {
    const alive = stars.filter(s => s.alive);
    if (alive.length) {
      const s = alive[Math.floor(Math.random() * alive.length)];
      s.alive = false;
      s.dyingOpacity = s.baseOpacity;
    }
  }

  function draw(ts) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      if (!s.alive) {
        if (s.dyingOpacity > 0) s.dyingOpacity -= 0.0015;
        const op = Math.max(0, s.dyingOpacity);
        if (op <= 0) continue;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,220,${op})`;
        ctx.fill();
      } else {
        const twinkle = Math.sin(ts * 0.001 * s.twinkleSpeed * 60 + s.twinklePhase) * 0.18 + 0.82;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,215,${s.baseOpacity * twinkle})`;
        ctx.fill();
      }
    }
    requestAnimationFrame(draw);
  }

  resize();
  makeStars();
  setInterval(killOne, DEATH_INTERVAL);
  requestAnimationFrame(draw);
  window.addEventListener('resize', () => { resize(); makeStars(); });
})();

// ── Build Timeline ─────────────────────────────────────

function buildTimeline() {
  const container = document.getElementById('timeline');

  EVENTS.forEach((ev) => {
    const isApocalypse = ev.id === 'material-plane';
    const eventEl = document.createElement('div');
    eventEl.className = 't-event' + (isApocalypse ? ' t-apocalypse' : '');

    const pdfCount = ev.pdfs.length;
    const pdfLabel = pdfCount > 1
      ? `${pdfCount} GAZETTE ISSUES  ▶`
      : 'READ THE GAZETTE  ▶';

    eventEl.innerHTML = `
      <button class="e-card${isApocalypse ? ' card-apocalypse' : ''}" data-event-id="${ev.id}" aria-label="Open ${ev.headline}">
        <div class="card-head">
          <span class="card-date">${ev.date}</span>
          <span class="card-tag ${ev.tagClass}">${ev.tag}</span>
        </div>
        <div class="card-body">
          <div class="card-headline">${ev.headline}</div>
          <div class="card-subhead">${ev.subhead}</div>
          <p class="card-teaser">${ev.teaser}</p>
          <span class="card-cta">${pdfLabel}</span>
        </div>
      </button>
    `;

    container.appendChild(eventEl);
  });

  // Scroll-in observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  container.querySelectorAll('.t-event').forEach(el => observer.observe(el));

  container.addEventListener('click', e => {
    const btn = e.target.closest('[data-event-id]');
    if (btn) openModal(btn.dataset.eventId);
  });
}

// ── Build Archive ──────────────────────────────────────

function buildArchive() {
  const grid = document.getElementById('archive-grid');

  ARCHIVE.forEach(item => {
    const card = document.createElement('div');
    card.className = 'a-card' + (item.dupe ? ' a-dupe' : '');
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.setAttribute('aria-label', `Open ${item.headline}`);
    card.innerHTML = `
      <span class="a-icon">📜</span>
      <span class="a-issue">${item.issue}</span>
      <span class="a-headline">${item.headline}</span>
      <span class="a-date">${item.inworld}</span>
      <span class="a-open">Open Issue ↗</span>
    `;
    const open = () => window.open(encodeFilePath(item.file), '_blank');
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
    grid.appendChild(card);
  });
}

// ── Modal ──────────────────────────────────────────────

const overlay = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalInner = document.getElementById('modal-inner');
let currentPdfIndex = 0;
let currentPdfs = [];

function encodeFilePath(filename) {
  return encodeURIComponent(filename).replace(/%20/g, '%20');
}

function openModal(eventId) {
  const ev = EVENTS.find(e => e.id === eventId);
  if (!ev) return;

  currentPdfs = ev.pdfs;
  currentPdfIndex = 0;

  const isApocalypse = eventId === 'material-plane';
  const tagClass = ev.tagClass;

  const tabsHTML = ev.pdfs.length > 1
    ? `<div class="m-pdf-tabs" id="pdf-tabs">
        ${ev.pdfs.map((p, i) =>
          `<button class="pdf-tab${i === 0 ? ' active' : ''}" data-idx="${i}">${p.label}</button>`
        ).join('')}
       </div>`
    : '';

  modalInner.innerHTML = `
    <div class="m-info">
      <span class="m-tag ${tagClass}">${ev.tag}</span>
      <div class="m-date">${ev.date}</div>
      <div class="m-headline">${ev.headline}</div>
      <div class="m-subhead">${ev.subhead}</div>
      <div class="m-divider"></div>
      <div class="m-summary">${ev.summary}</div>
    </div>
    <div class="m-pdf">
      <div class="m-pdf-label">Gazette Issue${ev.pdfs.length > 1 ? 's' : ''}</div>
      ${tabsHTML}
      <div class="pdf-frame-wrap" id="pdf-frame-wrap">
        <iframe id="pdf-iframe" src="${encodeFilePath(ev.pdfs[0].file)}" title="Gazette PDF"></iframe>
        <div class="pdf-fallback" id="pdf-fallback">
          <p>PDF preview unavailable.</p>
        </div>
      </div>
      <a class="m-open-btn" id="m-open-btn" href="${encodeFilePath(ev.pdfs[0].file)}" target="_blank" rel="noopener">
        Open Full Issue ↗
      </a>
    </div>
  `;

  // Tab switching
  const tabsEl = document.getElementById('pdf-tabs');
  if (tabsEl) {
    tabsEl.addEventListener('click', e => {
      const tab = e.target.closest('.pdf-tab');
      if (!tab) return;
      const idx = parseInt(tab.dataset.idx);
      tabsEl.querySelectorAll('.pdf-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      switchPdf(idx);
    });
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function switchPdf(idx) {
  const iframe = document.getElementById('pdf-iframe');
  const openBtn = document.getElementById('m-open-btn');
  const pdf = currentPdfs[idx];
  if (!pdf) return;
  const encoded = encodeFilePath(pdf.file);
  iframe.src = encoded;
  openBtn.href = encoded;
  currentPdfIndex = idx;
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  // Clear iframe src to stop loading
  const iframe = document.getElementById('pdf-iframe');
  if (iframe) iframe.src = '';
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── Init ───────────────────────────────────────────────

buildTimeline();
buildArchive();
