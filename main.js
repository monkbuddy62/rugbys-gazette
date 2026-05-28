/* ======================================================
   Rugby's Roaming Gazette — Campaign Chronicle
   main.js: data, rendering, modal, navigation
   ====================================================== */

// ── Event Data ─────────────────────────────────────────

const EVENTS = [
  {
    id: 'pre-war',
    navLabel: 'Early 4885',
    date: 'Early 4885',
    headline: 'Three Dragons. One Agenda.',
    subhead: 'Gorthak Unites the Orc Clans — Storm Clouds Gather',
    tag: 'LORE', tagClass: '',
    body: [
      `Three dragons are operating in concert — a blue from the Isle of Torta, a red that escaped from Stroth Castle, and a green. They have been coordinating attacks on churches across the region. Dragons do not cooperate. Something is orchestrating them from behind the veil.`,
      `Simultaneously, orc warlord Gorthak accomplishes the impossible: uniting every orc clan under one banner. He seizes multiple Squiylian cities in rapid succession and issues a single demand — return his son Zakmed, who escaped from Binneth's prison. The orcs are no longer a scattered threat. They are an army with a general.`,
      `Trolls have begun descending from the mountains, possibly in alliance with the orc forces. Field correspondent Rex Sauvage is already on the road.`,
    ],
    pdfs: [{ file: 'Rugbys Gazzette 4_1_19.pdf', label: 'Issue I' }]
  },
  {
    id: 'binneth-fires',
    navLabel: 'Apr 12, 4885',
    date: 'April 12, 4885',
    headline: 'Binneth Fires First',
    subhead: 'The War for the Howling Gulf Begins in Earnest',
    tag: 'WAR', tagClass: 'tag-war',
    body: [
      `Binneth fires first. The naval war that diplomats warned of for months arrives without further warning. Binneth warships engage Squiylian vessels in the Howling Gulf in a coordinated strike that catches the kingdom badly off guard.`,
      `King Stroth declares a full state of war. The draft begins immediately — men of fighting age across Squiyles are conscripted into service. Agricultural production begins to stall as the workforce is pulled from the fields toward the front.`,
      `The Gazette, never one to understate the gravity of events, encourages its readers to "Watch the war!" from a suitably safe distance. Rex Sauvage is in the field and dispatches are expected shortly.`,
    ],
    pdfs: [{ file: 'Rugbys Gazzette 4_9_19.pdf', label: 'Issue II' }]
  },
  {
    id: 'fire-lance',
    navLabel: 'Apr 15, 4885',
    date: 'April 15, 4885',
    headline: 'The Fire Lance',
    subhead: "Binneth's Secret Ships Burn Half the Squiylian Fleet",
    tag: 'WAR', tagClass: 'tag-war',
    body: [
      `Binneth reveals its secret weapon. The Fire Lance ship — built through a collaboration of gnomish engineering and deep-navy architecture — is capable of projecting torrents of fire across open water at range.`,
      `In a single night engagement in the Howling Gulf, Binneth deploys its Fire Lance fleet and reduces half of the entire Squiylian navy to burning wreckage and charred timber. The scale of the loss is staggering.`,
      `Squiyles had counted on naval parity. That calculation is now obsolete. King Stroth is reportedly furious but unbowed. The kingdom's Wizard Special Forces are being mobilized. Rex Sauvage sends his most vivid dispatch yet.`,
    ],
    pdfs: [{ file: 'Rugbys Gazzette 4_15_19.pdf', label: 'Issue III' }]
  },
  {
    id: 'naval-standoff',
    navLabel: 'Apr 24, 4885',
    date: 'April 24, 4885',
    headline: 'Naval Standoff in the Gulf',
    subhead: 'Doppelgangers Spotted in Ezaso City — Officials Unmoved',
    tag: 'WAR', tagClass: 'tag-war',
    body: [
      `The surviving Squiylian fleet forms up in the Howling Gulf in a direct challenge to Binneth's naval dominance. Both sides hold position. Neither has fired — yet. The standoff is described by observers as "tense beyond all description."`,
      `Behind the war headlines, a quieter threat surfaces. Doppelgangers have been reported infiltrating Ezaso City, assuming civilian identities and observing the daily movement of the population. Captain Tartan of the city guard publicly attributes the suspicious behaviour to a flu outbreak. It is not the flu.`,
      `Mysterious black-masked figures have additionally been spotted abducting persons from their homes in the town of Thorhofn. No authority has claimed responsibility. Rex Sauvage is following both threads.`,
    ],
    pdfs: [{ file: 'Rugbys Gazzette 6_10_19.pdf', label: 'Issue IV' }]
  },
  {
    id: 'shots-fired',
    navLabel: 'Apr 28, 4885',
    date: 'April 28, 4885',
    headline: 'Shots Fired — War Commences',
    subhead: 'Full-Scale Conflict Erupts Across the Howling Gulf',
    tag: 'WAR', tagClass: 'tag-war',
    body: [
      `The standoff is over. Full-scale naval warfare has erupted in the Howling Gulf. Ships are burning on both sides, men are dying by the score, and the political landscape of the known world is changing hour by hour.`,
      `Rex Sauvage sends dispatches from close — perhaps recklessly close — to the front. His writing is characteristically vivid. The Gazette publishes everything.`,
      `The orc occupation of Squiyles' eastern farmland continues unabated, and trolls are rampaging through the central agricultural heartland. Food supply disruption is becoming critical. The kingdom now fights on three fronts simultaneously: at sea, to the east, and against starvation from within.`,
    ],
    pdfs: [{ file: 'Rugbys Gazzette 6_17_19.pdf', label: 'Issue V' }]
  },
  {
    id: 'wizards-join',
    navLabel: 'May 4, 4885',
    date: 'May 4, 4885',
    headline: 'Squiyles Wizards Join the Fight',
    subhead: 'Grandmaster Kirby Tears Himself Apart at Public Lecture',
    tag: 'MAGIC', tagClass: '',
    body: [
      `Captain Hoolihan leads Squiyles' Wizard Special Forces into the air above the Howling Gulf. Fireball after fireball rains down on Binneth ships as the battle mages press their campaign. Ship after ship burns. The night sky over the Gulf is lit orange from both shores.`,
      `Elsewhere, in a packed lecture hall in Novaexum City, Grandmaster Wizard Kirby was publicly demonstrating a theoretical spell-stacking technique that could render the caster immortal. The compound magical mishap that followed shattered through him without mercy — multiple versions of himself ripped through focusing mirrors and collided with explosive force. Beams of light shot in every direction. There has been no sign of him since.`,
      `The Kingdom of Turgythe has also announced the world's first space program, led by Dr. Joanne Hingbrant. Using gnomish fire propulsion and oxygen recycling magic, they plan to travel to the space between the world and the heavens themselves. Food shortages within Squiyles are becoming severe. Revolt simmers.`,
    ],
    pdfs: [{ file: 'Rugbys Gazzette 6_24_19.pdf', label: 'Issue VI' }]
  },
  {
    id: 'whirlpools',
    navLabel: 'May 8, 4885',
    date: 'May 8, 4885',
    headline: 'Magic Whirlpools in the Gulf',
    subhead: 'Cacoal Falls to Doppelgangers; Rex Sauvage Still Missing',
    tag: 'MAGIC', tagClass: '',
    body: [
      `Two massive magical waterspouts have appeared in the center of the Howling Gulf, spiralling about one another and growing rapidly. By the time of this report they stand at three hundred feet tall and fifty feet wide, visible from scouting ships that dare approach. No one knows who controls them or who conjured them.`,
      `In news that will shock the continent: the entire country of Cacoal has been covertly taken over by doppelgangers. The changeling leadership declares themselves the Changeling Nation and demands recognition as a sovereign state on equal footing with any other kingdom. Former resident Gerard Twombly states his position plainly: "You can't just steal an entire country! I say burn the whole damn thing to the ground!" King Stroth makes no statement.`,
      `Rex Sauvage remains missing. He wears an anti-scrying amulet and all magical attempts to locate him have failed. His wife and children are worried sick. The Gazette runs a missing persons notice for the third consecutive week.`,
    ],
    pdfs: [{ file: 'Rugbys Gazzette 7_15_19.pdf', label: 'Issue VII' }]
  },
  {
    id: 'squiyles-falls',
    navLabel: 'Jun 1, 4885',
    date: 'June 1, 4885',
    headline: 'Squiyles Has Fallen',
    subhead: 'Post-War Land Grab Begins; Something Growls from the Gulf',
    tag: 'WAR', tagClass: 'tag-war',
    body: [
      `The war is over. The Kingdom of Squiyles has fallen. In the aftermath, every wealthy family within the former territories is scrambling for land, declaring noble houses, and feuding over property rights. Conflicting militias impose conflicting laws. The Gazette advises that only those who wish to live a wild-west style of existence should venture into these territories for the foreseeable future.`,
      `Binneth, having lost virtually no military force during the conflict, expands north into new territory and lifts trade blockades on the Howling Gulf. The paper's economists predict a rising world power. Changelings have established rulership over most of what was once Squiyles, ruling with an iron fist and an unreadable face.`,
      `The Gazette has packed up from the ruins of Conopimalis and relocated to Stogath Isle in the Western Territories. The magical waterspouts have gone — but they left something behind. In the center of the Gulf: a calm, circular hole in the water. Not a vortex. No spin. Water simply pours endlessly into it. Fisherman Paulie says he heard a deep growl from inside. The Gazette offers payment for any field reporter willing to go down and investigate.`,
    ],
    pdfs: [{ file: 'Rugbys Gazzette 10_7_19.pdf', label: 'Issue VIII' }]
  },
  {
    id: 'peace-summit',
    navLabel: 'Jun 7, 4885',
    date: 'June 7, 4885',
    headline: 'The Peace Summit That Wasn\'t',
    subhead: 'Changelings Caught Impersonating World Leaders; Rex Sauvage Is Dead',
    tag: 'POLITICS', tagClass: '',
    body: [
      `The Changeling Nation hosts an international peace summit in the former Squiylian capital, inviting representatives from Gaithyre, McCathlyre, Turgythe, and the goblin kingdom of Hawkthorne. The gesture is widely read as an attempt at legitimacy.`,
      `It ends in violence. Multiple changeling representatives are caught mid-conference using their shapeshifting abilities to assume the identities of other rulers and diplomats — rigging the proceedings from within. As the deception is exposed the conference collapses into chaos. Every attending nation's leader departs embarrassed and disgraced. Future diplomatic prospects for the Changeling Nation are, charitably, dim.`,
      `New field journalist Timothy Mantooth files his first dispatch: he is heading to the Balnaskor Mountains to continue the legacy of Rex Sauvage — confirmed dead, killed in the Orc Lands on assignment. He has heard reports of a mysterious mountain town enveloped in perpetual fog from which no one who enters returns. A wealthy goblin noble named Narfuuuk has simultaneously posted a ten thousand gold bounty for the return of his kidnapped nephew, last seen being manacled by adventurers heading into those same mountains.`,
    ],
    pdfs: [
      { file: 'Rugbys Gazzette 4_13_20.pdf', label: 'Summit Announced' },
      { file: 'Rugbys Gazzette 12_18_22.pdf', label: 'Summit Collapses' }
    ]
  },
  {
    id: 'miasmic-cloud',
    navLabel: 'Jul 4, 4885',
    date: 'July 4, 4885',
    headline: 'Flee. Now.',
    subhead: 'The Miasmic Death Cloud Spreads Without Mercy',
    tag: 'HORROR', tagClass: '',
    body: [
      `A miasmic green cloud is spreading outward from the shores of Sawyen and Suenth. It converts everything it contacts to bones. Fisherman Buckley watched his brother step through a flash of green light and became a skeleton before he could draw a second breath.`,
      `The cloud is growing every day. By this issue it has already consumed eastern Binneth, the Orclands, and Hawkthorne. Governments are opening and closing borders by the hour. Underground bunkers are being built — the cloud appears to have difficulty penetrating soil. During the evacuations, a small mountain village called Meschen was discovered, completely isolated, with almost no knowledge of the outside world. Volunteers tried to warn them. The villagers fed the rescuers potatoes. They could not be made to understand. They were left to their fate.`,
      `The Changeling Nation: total silence. Not a word through any of this. The Gazette abandons its editorial voice entirely and prints in plain text: "Get out. Go. Stop reading this. For the love of Desna, get to safety."`,
    ],
    pdfs: [{ file: 'Rugbys Gazzette 12_26_22.pdf', label: 'Issue X' }]
  },
  {
    id: 'troll-tincture',
    navLabel: 'Dec 19, 4885',
    date: 'December 19, 4885',
    headline: 'Troll Tincture Saves the Territories',
    subhead: 'A Night Airship Haunts the City; Death Race Returns',
    tag: 'MAGIC', tagClass: '',
    body: [
      `Six months have passed. The Gazette is still publishing from Stogath Isle. Alchemists have achieved a genuine breakthrough: a compound that spreads through troll reproduction and permanently alters their DNA, making them killable without fire for the first time in recorded history. Troll populations are expected to collapse. The mountain territories may at last be habitable.`,
      `Field reporter Ray Parker submits a strange account from a shadowy city: a medium-sized airship, unlike any known vessel, flies exclusively at night beneath storm clouds. It leaves no records of arrivals or departures. It vanishes by dawn. No registry. No flags. Parker has made it his personal investigation. He does not yet know what it is.`,
      `The Rugmandella death race has also been announced — a no-rules, no-consequences magic carpet competition held in Lauvog. Crimes against fellow participants are explicitly permitted by the event's charter. The grand prize: the Rugmandella itself, the most devastatingly tricked-out magic carpet ever crafted.`,
    ],
    pdfs: [{ file: 'Rugbys Gazzette 9_24_23.pdf', label: 'Issue XI' }]
  },
  {
    id: 'material-plane',
    navLabel: '4900 — The End',
    date: 'April 17, 4900',
    headline: 'The Material Plane Is No More',
    subhead: 'The Agency Investigates Day Zero — Final Edition',
    tag: 'ENDTIMES', tagClass: 'tag-endtimes',
    isApocalypse: true,
    body: [
      `Fifteen years of silence. Then this. The stars have been disappearing one by one for years — astronomers across every surviving nation unable to explain it, Turgythe's space program never quite escaping the ground. Today the last star goes out.`,
      `Then the material plane ceases to exist.`,
      `Survivors who found shelter on adjacent planes — the Feywild, the Shadowfell, the Ethereal — are refugees without a world to return to. The material plane is gone. An organisation calling itself The Agency, led by a Dr. E. Brown, is operating across multiple planes. They are investigating what they have termed "Day Zero" — a space-time paradox they believe to be the root cause of the unraveling. The evidence suggests deliberate interference with the timeline itself. The investigation continues.`,
      `This is the final edition of Rugby's Roaming Gazette. New publications whenever we feel like it.`,
    ],
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

// ── Helpers ─────────────────────────────────────────────

function enc(filename) {
  return encodeURIComponent(filename);
}

// ── Build Nav ────────────────────────────────────────────

function buildNav() {
  const inner = document.getElementById('issue-nav-inner');
  EVENTS.forEach(ev => {
    const btn = document.createElement('div');
    btn.className = 'nav-item';
    btn.textContent = ev.navLabel;
    btn.dataset.id = ev.id;
    btn.addEventListener('click', () => {
      const target = document.getElementById('article-' + ev.id);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    inner.appendChild(btn);
  });

  // Highlight active nav item via IntersectionObserver
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
        const active = document.querySelector(`.nav-item[data-id="${entry.target.dataset.id}"]`);
        if (active) {
          active.classList.add('active');
          active.scrollIntoView({ block: 'nearest', inline: 'center' });
        }
      }
    });
  }, { threshold: 0.3 });

  EVENTS.forEach(ev => {
    const el = document.getElementById('article-' + ev.id);
    if (el) observer.observe(el);
  });
}

// ── Build Chronicle ──────────────────────────────────────

function buildChronicle() {
  const chronicle = document.getElementById('chronicle');

  EVENTS.forEach((ev, idx) => {
    const art = document.createElement('article');
    art.className = 'c-article' + (ev.isApocalypse ? ' art-apocalypse' : '');
    art.id = 'article-' + ev.id;
    art.dataset.id = ev.id;

    // Build CTA button(s)
    let ctaHTML;
    if (ev.pdfs.length > 1) {
      const btns = ev.pdfs.map((p, i) =>
        `<button class="cta-btn" data-event-id="${ev.id}" data-pdf-idx="${i}">▶ ${p.label}</button>`
      ).join('');
      ctaHTML = `<div class="article-cta cta-multiple">${btns}</div>`;
    } else {
      ctaHTML = `<button class="article-cta" data-event-id="${ev.id}" data-pdf-idx="0">▶ Read the Gazette Issue</button>`;
    }

    // Build body paragraphs
    const bodyHTML = ev.body.map(p => `<p>${p}</p>`).join('');

    art.innerHTML = `
      <div class="article-meta">
        <span class="article-date">${ev.date}</span>
        <span class="article-tag ${ev.tagClass}">${ev.tag}</span>
      </div>
      <hr class="rule-thin">
      <h2 class="article-headline">${ev.headline}</h2>
      <p class="article-subhead">${ev.subhead}</p>
      <div class="article-divline"><span class="article-divline-orn">✦ &nbsp; ❧ &nbsp; ✦</span></div>
      <div class="article-columns">${bodyHTML}</div>
      <div class="article-footer">
        ${ctaHTML}
      </div>
      <div class="article-ornament">— ✦ —</div>
    `;

    chronicle.appendChild(art);
  });

  // Click handler for all CTAs
  chronicle.addEventListener('click', e => {
    const btn = e.target.closest('[data-event-id]');
    if (btn) openModal(btn.dataset.eventId, parseInt(btn.dataset.pdfIdx || '0'));
  });
}

// ── Build Archive ─────────────────────────────────────────

function buildArchive() {
  const grid = document.getElementById('archive-grid');
  ARCHIVE.forEach(item => {
    const card = document.createElement('div');
    card.className = 'a-card' + (item.dupe ? ' a-dupe' : '');
    card.setAttribute('role', 'button');
    card.setAttribute('tabindex', '0');
    card.innerHTML = `
      <span class="a-icon">📰</span>
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

const overlay     = document.getElementById('modal-overlay');
const modalClose  = document.getElementById('modal-close');
const modalBody   = document.getElementById('modal-body');

function openModal(eventId, pdfIdx) {
  const ev = EVENTS.find(e => e.id === eventId);
  if (!ev) return;

  const isApoc = ev.isApocalypse;
  const bodyText = ev.body.join('\n\n');
  const pdfIdx0 = pdfIdx || 0;

  // PDF tabs if multiple
  const tabsHTML = ev.pdfs.length > 1
    ? `<div class="modal-pdf-tabs" id="m-pdf-tabs">
        ${ev.pdfs.map((p, i) =>
          `<button class="pdf-tab${i === pdfIdx0 ? ' active' : ''}" data-idx="${i}">${p.label}</button>`
        ).join('')}
       </div>`
    : '';

  modalBody.innerHTML = `
    <div class="modal-info">
      <div class="modal-date">${ev.date}</div>
      <div class="modal-headline${isApoc ? ' hed-apocalypse' : ''}">${ev.headline}</div>
      <div class="modal-subhead">${ev.subhead}</div>
      <hr class="modal-divider">
      <div class="modal-summary">${bodyText}</div>
    </div>
    <div class="modal-pdf-pane">
      <div class="modal-pdf-label">Gazette Issue${ev.pdfs.length > 1 ? 's' : ''}</div>
      ${tabsHTML}
      <div class="pdf-frame" id="m-pdf-frame">
        <iframe id="m-pdf-iframe" src="${enc(ev.pdfs[pdfIdx0].file)}" title="${ev.pdfs[pdfIdx0].label}"></iframe>
      </div>
      <a class="modal-open-link" id="m-open-link" href="${enc(ev.pdfs[pdfIdx0].file)}" target="_blank" rel="noopener">
        Open Full Issue in New Tab ↗
      </a>
    </div>
  `;

  // Tab switching
  const tabs = document.getElementById('m-pdf-tabs');
  if (tabs) {
    tabs.addEventListener('click', e => {
      const tab = e.target.closest('.pdf-tab');
      if (!tab) return;
      const idx = parseInt(tab.dataset.idx);
      tabs.querySelectorAll('.pdf-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const iframe = document.getElementById('m-pdf-iframe');
      const link   = document.getElementById('m-open-link');
      const pdf    = ev.pdfs[idx];
      iframe.src   = enc(pdf.file);
      link.href    = enc(pdf.file);
    });
  }

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  modalClose.focus();
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
  const iframe = document.getElementById('m-pdf-iframe');
  if (iframe) iframe.src = '';
}

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

// ── Init ──────────────────────────────────────────────────

buildChronicle();
buildNav();
buildArchive();
