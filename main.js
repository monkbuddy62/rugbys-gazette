/* ======================================================
   Rugby's Roaming Gazette — Chronicle of the Material Plane
   ====================================================== */

// ── Event Data ─────────────────────────────────────────

const EVENTS = [
  {
    id: 'pre-war',
    date: 'Early 4885',
    headline: 'Three Dragons. One Agenda.',
    subhead: 'Gorthak Unites the Orc Clans — Storm Clouds Gather',
    tag: 'LORE', tagClass: '',
    teaser: 'Blue, red, and green dragons begin coordinating attacks on churches across the region. Meanwhile, orc warlord Gorthak unites every clan under one banner — unprecedented in living memory.',
    summary: `Three dragons are operating in concert — a blue from the Isle of Torta, a red that escaped from Stroth Castle, and a green. They are coordinating attacks on churches across the region. Dragons do not cooperate. Something is orchestrating them from behind the veil.

Simultaneously, orc warlord Gorthak accomplishes the impossible: uniting every orc clan under one banner. He seizes multiple Squiylian cities in rapid succession and issues a single demand — return his son Zakmed, who escaped from Binneth's prison. The orcs are no longer a scattered threat. They are an army with a general.

Trolls have begun descending from the mountains, possibly in alliance with the orc forces. Field correspondent Rex Sauvage is already on the road.`,
    pdfs: [{ file: 'Rugbys Gazzette 4_1_19.pdf', label: 'Issue I' }]
  },
  {
    id: 'binneth-fires',
    date: 'April 12, 4885',
    headline: 'Binneth Fires First',
    subhead: 'The War for the Howling Gulf Begins in Earnest',
    tag: 'WAR', tagClass: 'tag-war',
    teaser: 'Binneth launches a surprise attack on Squiyles. The Howling Gulf — once a thriving trade corridor — becomes a theatre of war overnight. King Stroth declares a state of war.',
    summary: `Binneth fires first. The naval war that diplomats warned of for months arrives without further warning. Binneth warships engage Squiylian vessels in the Howling Gulf in a coordinated strike that catches the kingdom badly off guard.

King Stroth declares a full state of war. The draft begins immediately — men of fighting age across Squiyles are conscripted into service. Agricultural production begins to stall as the workforce is pulled from the fields toward the front.

The Gazette, never one to understate the gravity of events, encourages its readers to "Watch the war!" from a suitably safe distance. Rex Sauvage is in the field and dispatches are expected shortly.`,
    pdfs: [{ file: 'Rugbys Gazzette 4_9_19.pdf', label: 'Issue II' }]
  },
  {
    id: 'fire-lance',
    date: 'April 15, 4885',
    headline: 'The Fire Lance',
    subhead: "Binneth's Secret Ships Burn Half the Squiylian Fleet",
    tag: 'WAR', tagClass: 'tag-war',
    teaser: "Binneth's secret gnomish warships breathe fire. In a single engagement, half of Squiyles' entire navy is reduced to burning wreckage in the Howling Gulf.",
    summary: `Binneth reveals its secret weapon. The Fire Lance ship — built through a collaboration of gnomish engineering and deep-navy architecture — is capable of projecting torrents of fire across open water at range.

In a single night engagement in the Howling Gulf, Binneth deploys its Fire Lance fleet and reduces half of the entire Squiylian navy to burning wreckage and charred timber. The scale of the loss is staggering.

Squiyles had counted on naval parity. That calculation is now obsolete. King Stroth is reportedly furious but unbowed. The kingdom's Wizard Special Forces are being mobilized. Rex Sauvage sends his most vivid dispatch yet.`,
    pdfs: [{ file: 'Rugbys Gazzette 4_15_19.pdf', label: 'Issue III' }]
  },
  {
    id: 'naval-standoff',
    date: 'April 24, 4885',
    headline: 'Naval Standoff in the Gulf',
    subhead: 'Doppelgangers Spotted in Ezaso City — Officials Unmoved',
    tag: 'WAR', tagClass: 'tag-war',
    teaser: 'The remaining Squiylian fleet challenges Binneth in the Gulf. Behind the headlines: doppelgangers are reported infiltrating Ezaso City. Captain Tartan calls it "the flu."',
    summary: `The surviving Squiylian fleet forms up in the Howling Gulf in a direct challenge to Binneth's naval dominance. Both sides hold position. Neither has fired — yet.

Behind the war headlines, a quieter threat surfaces. Doppelgangers have been reported infiltrating Ezaso City, assuming civilian identities and observing the daily movement of the population. Captain Tartan of the city guard publicly attributes the suspicious behaviour to a flu outbreak. It is not the flu.

Mysterious black-masked figures have additionally been spotted abducting persons from their homes in the town of Thorhofn. No authority has claimed responsibility. Rex Sauvage is following both threads.`,
    pdfs: [{ file: 'Rugbys Gazzette 6_10_19.pdf', label: 'Issue IV' }]
  },
  {
    id: 'shots-fired',
    date: 'April 28, 4885',
    headline: 'Shots Fired — War Commences',
    subhead: 'Full-Scale Conflict Erupts Across the Howling Gulf',
    tag: 'WAR', tagClass: 'tag-war',
    teaser: 'The standoff ends. Full-scale naval warfare erupts in the Howling Gulf. The Gazette reports from the front lines. Squiyles now fights on three fronts simultaneously.',
    summary: `The standoff is over. Full-scale naval warfare has erupted in the Howling Gulf. Ships are burning on both sides, men are dying by the score, and the political landscape of the known world is changing hour by hour.

Rex Sauvage sends dispatches from close — perhaps recklessly close — to the front. His writing is characteristically vivid. The Gazette publishes everything.

The orc occupation of Squiyles' eastern farmland continues unabated, and trolls are rampaging through the central agricultural heartland. Food supply disruption is becoming critical. The kingdom now fights on three fronts simultaneously: at sea, to the east, and against starvation from within.`,
    pdfs: [{ file: 'Rugbys Gazzette 6_17_19.pdf', label: 'Issue V' }]
  },
  {
    id: 'wizards-join',
    date: 'May 4, 4885',
    headline: 'Squiyles Wizards Join the Fight',
    subhead: 'Grandmaster Kirby Tears Himself Apart; Space Program Announced',
    tag: 'MAGIC', tagClass: '',
    teaser: "Squiyles' Wizard Special Forces take to the skies, raining fireballs on Binneth ships. Grandmaster Kirby attempts public immortality and catastrophically fails. Turgythe announces a space program.",
    summary: `Captain Hoolihan leads Squiyles' Wizard Special Forces into the air above the Howling Gulf. Fireball after fireball rains down on Binneth ships as the battle mages press their campaign. The night sky over the Gulf is lit orange from both shores.

Elsewhere, in a packed lecture hall in Novaexum City, Grandmaster Wizard Kirby was publicly demonstrating a theoretical spell-stacking technique that could render the caster immortal. The compound magical mishap that followed shattered through him without mercy — multiple versions of himself ripped through focusing mirrors and collided with explosive force. Beams of light shot in every direction. There has been no sign of him since.

The Kingdom of Turgythe has announced the world's first space program, led by Dr. Joanne Hingbrant. Using gnomish fire propulsion and oxygen recycling magic, they plan to travel to the space between the world and the heavens themselves. Food shortages within Squiyles are becoming severe. Revolt simmers.`,
    pdfs: [{ file: 'Rugbys Gazzette 6_24_19.pdf', label: 'Issue VI' }]
  },
  {
    id: 'whirlpools',
    date: 'May 8, 4885',
    headline: 'Magic Whirlpools in the Gulf',
    subhead: 'Cacoal Falls to Doppelgangers; Rex Sauvage Still Missing',
    tag: 'MAGIC', tagClass: '',
    teaser: 'Two magical waterspouts spiral 300 feet tall in the Howling Gulf. The entire nation of Cacoal is revealed to have been silently conquered by doppelgangers — who now demand recognition as a sovereign state.',
    summary: `Two massive magical waterspouts have appeared in the center of the Howling Gulf, spiralling about one another and growing rapidly. By the time of this report they stand at three hundred feet tall and fifty feet wide, visible from scouting ships that dare approach. No one knows who controls them or who conjured them.

In news that will shock the continent: the entire country of Cacoal has been covertly taken over by doppelgangers. The changeling leadership declares themselves the Changeling Nation and demands recognition as a sovereign state. Former resident Gerard Twombly: "You can't just steal an entire country! I say burn the whole damn thing to the ground!" King Stroth makes no statement.

Rex Sauvage remains missing. He wears an anti-scrying amulet and all magical attempts to locate him have failed. His wife and children are worried sick. The Gazette runs a missing persons notice for the third consecutive week.`,
    pdfs: [{ file: 'Rugbys Gazzette 7_15_19.pdf', label: 'Issue VII' }]
  },
  {
    id: 'squiyles-falls',
    date: 'June 1, 4885',
    headline: 'Squiyles Has Fallen',
    subhead: 'Post-War Land Grab; Something Growls from the Gulf',
    tag: 'WAR', tagClass: 'tag-war',
    teaser: 'The war is over. Squiyles is destroyed. Binneth expands north. Changelings seize the ruins. The magical waterspouts left behind a permanent, growling hole in the middle of the Howling Gulf.',
    summary: `The war is over. The Kingdom of Squiyles has fallen. In the aftermath, every wealthy family within the former territories is scrambling for land, declaring noble houses, and feuding over property rights. Conflicting militias impose conflicting laws. The Gazette advises that only those who wish to live a wild-west style of existence should venture into these territories.

Binneth, having lost virtually no military force during the conflict, expands north and lifts trade blockades on the Howling Gulf. The Gazette's economists predict a rising world power. Changelings have established rulership over most of what was once Squiyles.

The Gazette has relocated to Stogath Isle in the Western Territories. The magical waterspouts have gone — but they left something behind. In the center of the Gulf: a calm, circular hole in the water. Not a vortex. No spin. Water simply pours endlessly into it. Fisherman Paulie says he heard a deep growl from inside. The Gazette offers payment for any field reporter willing to investigate.`,
    pdfs: [{ file: 'Rugbys Gazzette 10_7_19.pdf', label: 'Issue VIII' }]
  },
  {
    id: 'peace-summit',
    date: 'June 7, 4885',
    headline: "The Peace Summit That Wasn't",
    subhead: 'Changelings Caught Impersonating World Leaders; Rex Sauvage Is Dead',
    tag: 'POLITICS', tagClass: '',
    teaser: 'The Changeling Nation hosts an international peace summit. It collapses into violence when the changelings are caught assuming the identities of attending rulers and diplomats. Rex Sauvage confirmed dead.',
    summary: `The Changeling Nation hosts an international peace summit in the former Squiylian capital. The gesture is widely read as an attempt at legitimacy.

It ends in violence. Multiple changeling representatives are caught mid-conference using their shapeshifting abilities to assume the identities of other rulers and diplomats — rigging the proceedings from within. As the deception is exposed the conference collapses into chaos. Every attending nation's leader departs embarrassed and disgraced.

New field journalist Timothy Mantooth files his first dispatch: he is heading to the Balnaskor Mountains to continue the legacy of Rex Sauvage — confirmed dead, killed in the Orc Lands on assignment. He has heard reports of a mysterious mountain town enveloped in perpetual fog from which no one who enters returns. A wealthy goblin noble named Narfuuuk has posted a ten thousand gold bounty for the return of his kidnapped nephew, last seen being manacled by adventurers heading into those same mountains.`,
    pdfs: [
      { file: 'Rugbys Gazzette 4_13_20.pdf',  label: 'Summit Announced' },
      { file: 'Rugbys Gazzette 12_18_22.pdf', label: 'Summit Collapses' }
    ]
  },
  {
    id: 'miasmic-cloud',
    date: 'July 4, 4885',
    headline: 'Flee. Now.',
    subhead: 'The Miasmic Death Cloud Spreads Without Mercy',
    tag: 'HORROR', tagClass: '',
    teaser: 'A green death cloud expanding from Sawyen and Suenth turns everything it touches to bones. It has already swallowed eastern Binneth, the Orc Lands, and Hawkthorne. The Gazette tells its readers to run.',
    summary: `A miasmic green cloud is spreading outward from the shores of Sawyen and Suenth. It converts everything it contacts to bones on contact. Fisherman Buckley watched his brother step through a flash of green light. Just bones were left.

The cloud is growing every day. By this issue it has already consumed eastern Binneth, the Orclands, and Hawkthorne. Governments are opening and closing borders by the hour. Underground bunkers are being built — the cloud appears to have difficulty penetrating soil.

During the evacuations, a small mountain village called Meschen was discovered — completely isolated, almost no knowledge of the outside world. Volunteers tried to warn them. The villagers fed the rescuers potatoes. They could not be made to understand. They were left to their fate.

The Gazette abandons its editorial voice entirely: "Get out. Go. Stop reading this. For the love of Desna, get to safety."`,
    pdfs: [{ file: 'Rugbys Gazzette 12_26_22.pdf', label: 'Issue X' }]
  },
  {
    id: 'troll-tincture',
    date: 'December 19, 4885',
    headline: 'Troll Tincture Saves the Territories',
    subhead: 'A Night Airship Haunts the Sky; Death Race Returns',
    tag: 'MAGIC', tagClass: '',
    teaser: 'Six months after the death cloud. Alchemists crack troll biology — a compound spreading through troll reproduction eliminates their regeneration. A mysterious airship flies only at night and has no registry.',
    summary: `Six months have passed. The Gazette is still publishing from Stogath Isle. Alchemists have achieved a genuine breakthrough: a compound that spreads through troll reproduction and permanently alters their DNA, making them killable without fire for the first time in recorded history. Troll populations are expected to collapse. The mountain territories may at last be habitable.

Field reporter Ray Parker submits a strange account: a medium-sized airship, unlike any known vessel, flies exclusively at night beneath storm clouds. It leaves no records of arrivals or departures. It vanishes by dawn. No registry. No flags. Parker has made it his personal investigation.

The Rugmandella death race has been announced — a no-rules, no-consequences magic carpet competition in Lauvog. Crimes against fellow participants are explicitly permitted by the event's charter. The grand prize: the most devastatingly tricked-out magic carpet ever crafted.`,
    pdfs: [{ file: 'Rugbys Gazzette 9_24_23.pdf', label: 'Issue XI' }]
  },
  {
    id: 'material-plane',
    date: 'April 17, 4900',
    headline: 'The Material Plane Is No More',
    subhead: 'The Agency Investigates Day Zero — Final Edition',
    tag: 'ENDTIMES', tagClass: 'tag-endtimes',
    isApocalypse: true,
    teaser: 'Fifteen years after the last issue. The stars have been going out for years. Today the last one does. Then the material plane ceases to exist. Survivors flee to the Feywild, the Shadowfell, the Ethereal Plane.',
    summary: `Fifteen years of silence. Then this. The stars have been disappearing one by one for years — astronomers across every surviving nation unable to explain it, Turgythe's space program never quite escaping the ground. Today the last star goes out.

Then the material plane ceases to exist.

Survivors who found shelter on adjacent planes — the Feywild, the Shadowfell, the Ethereal — are refugees without a world to return to. The material plane is gone.

An organisation calling itself The Agency, led by a Dr. E. Brown, is operating across multiple planes. They are investigating what they have termed "Day Zero" — a space-time paradox they believe to be the root cause of the unraveling. The evidence suggests deliberate interference with the timeline itself. The investigation continues.

This is the final edition of Rugby's Roaming Gazette. New publications whenever we feel like it.`,
    pdfs: [{ file: 'Rugbys Gazzette 5_12_19.pdf', label: 'Final Edition' }]
  }
];

// ── Archive Data ────────────────────────────────────────

const ARCHIVE = [
  { file: 'Rugbys Gazzette 4_1_19.pdf',   inworld: 'Early 4885',        hed: 'Dragons, Orcs & the Storm to Come', issue: 'Issue I' },
  { file: 'Rugbys Gazzette 4_9_19.pdf',   inworld: 'April 12, 4885',    hed: 'Binneth Fires First',              issue: 'Issue II' },
  { file: 'Rugbys Gazzette 4_15_19.pdf',  inworld: 'April 15, 4885',    hed: 'The Fire Lance',                   issue: 'Issue III' },
  { file: 'Rugbys Gazzette 4_22_19.pdf',  inworld: 'April 12, 4885',    hed: 'Binneth Fires First (reprint)',    issue: 'Reprint', dupe: true },
  { file: 'Rugbys Gazzette 4_29_19.pdf',  inworld: 'April 15, 4885',    hed: 'The Fire Lance (reprint)',         issue: 'Reprint', dupe: true },
  { file: 'Rugbys Gazzette 6_10_19.pdf',  inworld: 'April 24, 4885',    hed: 'Naval Standoff',                   issue: 'Issue IV' },
  { file: 'Rugbys Gazzette 6_17_19.pdf',  inworld: 'April 28, 4885',    hed: 'Shots Fired — War Commences',      issue: 'Issue V' },
  { file: 'Rugbys Gazzette 6_24_19.pdf',  inworld: 'May 4, 4885',       hed: 'Squiyles Wizards Join Fight',      issue: 'Issue VI' },
  { file: 'Rugbys Gazzette 7_15_19.pdf',  inworld: 'May 8, 4885',       hed: 'Magic Whirlpools in the Gulf',     issue: 'Issue VII' },
  { file: 'Rugbys Gazzette 10_7_19.pdf',  inworld: 'June 1, 4885',      hed: 'Post-War Nations Dash for Land',   issue: 'Issue VIII' },
  { file: 'Rugbys Gazzette 4_13_20.pdf',  inworld: 'June 7, 4885',      hed: 'International Peace Meeting',      issue: 'Issue IX-A' },
  { file: 'Rugbys Gazzette 12_18_22.pdf', inworld: 'June 7, 4885',      hed: 'Peace Summit Results in Chaos',    issue: 'Issue IX-B' },
  { file: 'Rugbys Gazzette 12_26_22.pdf', inworld: 'July 4, 4885',      hed: 'Miasmic Cloud Spreading Fast',     issue: 'Issue X' },
  { file: 'Rugbys Gazzette 9_24_23.pdf',  inworld: 'December 19, 4885', hed: 'Troll Tincture Saves Territories', issue: 'Issue XI' },
  { file: 'Rugbys Gazzette 5_12_19.pdf',  inworld: 'April 17, 4900',    hed: 'The Material Plane Is No More',    issue: 'Final Edition' },
];

// ── Starfield ────────────────────────────────────────────

(function () {
  const canvas = document.getElementById('starfield');
  const ctx    = canvas.getContext('2d');
  let stars    = [];
  const COUNT  = 300;

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function spawn() {
    stars = Array.from({ length: COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.3 + 0.2,
      base: Math.random() * 0.6 + 0.2,
      speed: Math.random() * 0.022 + 0.004,
      phase: Math.random() * Math.PI * 2,
      alive: true,
      dying: -1,
    }));
  }

  function killOne() {
    const live = stars.filter(s => s.alive);
    if (live.length) {
      const s = live[Math.floor(Math.random() * live.length)];
      s.alive  = false;
      s.dying  = s.base;
    }
  }

  function draw(ts) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      if (!s.alive) {
        if (s.dying > 0) s.dying -= 0.0012;
        const op = Math.max(0, s.dying);
        if (op <= 0) continue;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,226,192,${op})`;
        ctx.fill();
      } else {
        const tw = Math.sin(ts * 0.001 * s.speed * 60 + s.phase) * 0.15 + 0.85;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(240,226,192,${s.base * tw})`;
        ctx.fill();
      }
    }
    requestAnimationFrame(draw);
  }

  resize();
  spawn();
  setInterval(killOne, 9000);
  requestAnimationFrame(draw);
  window.addEventListener('resize', () => { resize(); spawn(); });
})();

// ── Build Timeline ────────────────────────────────────────

function buildTimeline() {
  const tl = document.getElementById('timeline');

  EVENTS.forEach(ev => {
    const isApoc = !!ev.isApocalypse;
    const pdfLabel = ev.pdfs.length > 1
      ? `${ev.pdfs.length} Gazette Issues  ▶`
      : 'Read the Gazette Issue  ▶';

    const wrap = document.createElement('div');
    wrap.className = 't-event' + (isApoc ? ' t-apocalypse' : '');

    wrap.innerHTML = `
      <button class="e-card${isApoc ? ' card-apocalypse' : ''}"
              data-id="${ev.id}" aria-label="Open: ${ev.headline}">
        <span class="card-top-rule"></span>
        <div class="card-meta">
          <span class="card-date">${ev.date}</span>
          <span class="card-tag ${ev.tagClass}">${ev.tag}</span>
        </div>
        <div class="card-body">
          <div class="card-headline">${ev.headline}</div>
          <div class="card-subhead">${ev.subhead}</div>
          <p class="card-teaser">${ev.teaser}</p>
        </div>
        <div class="card-bottom">
          <span class="card-cta">${pdfLabel}</span>
        </div>
      </button>
    `;

    tl.appendChild(wrap);
  });

  // Scroll-in
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.1 });

  tl.querySelectorAll('.t-event').forEach(el => obs.observe(el));

  tl.addEventListener('click', e => {
    const btn = e.target.closest('[data-id]');
    if (btn) openModal(btn.dataset.id, 0);
  });
}

// ── Build Archive ──────────────────────────────────────────

function buildArchive() {
  const grid = document.getElementById('archive-grid');
  ARCHIVE.forEach(item => {
    const card = document.createElement('div');
    card.className = 'a-card' + (item.dupe ? ' a-dupe' : '');
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <span class="a-icon">📜</span>
      <span class="a-issue">${item.issue}</span>
      <span class="a-hed">${item.hed}</span>
      <span class="a-date">${item.inworld}</span>
      <span class="a-open">Open Issue ↗</span>
    `;
    const open = () => window.open(enc(item.file), '_blank');
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
    grid.appendChild(card);
  });
}

// ── Modal ─────────────────────────────────────────────────

const overlay    = document.getElementById('modal-overlay');
const modalClose = document.getElementById('modal-close');
const modalBody  = document.getElementById('modal-body');

function enc(f) { return encodeURIComponent(f); }

function openModal(id, pdfIdx) {
  const ev = EVENTS.find(e => e.id === id);
  if (!ev) return;

  const i = pdfIdx || 0;
  const isApoc = !!ev.isApocalypse;

  const tabsHTML = ev.pdfs.length > 1
    ? `<div class="m-pdf-tabs" id="m-tabs">
        ${ev.pdfs.map((p, n) =>
          `<button class="pdf-tab${n === i ? ' active' : ''}" data-idx="${n}">${p.label}</button>`
        ).join('')}
       </div>`
    : '';

  modalBody.innerHTML = `
    <div class="m-info">
      <div class="m-date">${ev.date}</div>
      <div class="m-headline${isApoc ? ' m-apocalypse' : ''}">${ev.headline}</div>
      <div class="m-subhead">${ev.subhead}</div>
      <hr class="m-rule">
      <div class="m-summary">${ev.summary}</div>
    </div>
    <div class="m-pdf">
      <div class="m-pdf-label">Gazette Issue${ev.pdfs.length > 1 ? 's' : ''}</div>
      ${tabsHTML}
      <div class="pdf-frame" id="m-frame">
        <iframe id="m-iframe" src="${enc(ev.pdfs[i].file)}" title="${ev.pdfs[i].label}"></iframe>
      </div>
      <a class="m-open-link" id="m-link" href="${enc(ev.pdfs[i].file)}" target="_blank" rel="noopener">
        Open Full Issue in New Tab ↗
      </a>
    </div>
  `;

  const tabs = document.getElementById('m-tabs');
  if (tabs) {
    tabs.addEventListener('click', e => {
      const tab = e.target.closest('.pdf-tab');
      if (!tab) return;
      const n   = parseInt(tab.dataset.idx);
      const pdf = ev.pdfs[n];
      tabs.querySelectorAll('.pdf-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      document.getElementById('m-iframe').src = enc(pdf.file);
      document.getElementById('m-link').href  = enc(pdf.file);
    });
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  const ifr = document.getElementById('m-iframe');
  if (ifr) ifr.src = '';
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── Init ──────────────────────────────────────────────────

buildTimeline();
buildArchive();
