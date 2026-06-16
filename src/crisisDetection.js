// crisisDetection.js
//
// IDEOLOGY: "No tradition wants a verse-dump for someone in acute crisis."
//
// When a person writes about self-harm, suicidal thoughts, or acute despair,
// the compassionate response is NOT 12 scripture quotes — it is human warmth
// and real-world help. This module detects those signals so the app can lead
// with care and resources before (optionally) offering gentle reflection.
//
// This is intentionally a pure, dependency-free function so it is trivial to
// test and reason about. It errs toward caution: false positives (showing a
// gentle support message when not strictly needed) are far less harmful than
// false negatives.

// Phrases that strongly indicate acute risk. Matched as whole-ish phrases to
// reduce false positives (e.g. "killing time", "dead tired", "I could kill
// for a coffee" should NOT trigger).
const HIGH_RISK_PATTERNS = [
  /\bkill(ing)?\s+my\s?self\b/i,
  /\bkill\s+me\b/i,
  /\bend(ing)?\s+(my|it)\s+(life|all)\b/i,
  /\btake\s+my\s+(own\s+)?life\b/i,
  /\b(commit|committing)\s+suicide\b/i,
  /\bsuicidal\b/i,
  /\bwant\s+to\s+die\b/i,
  /\bdon'?t\s+want\s+to\s+(live|be\s+alive|exist)\b/i,
  /\bno\s+(reason|point)\s+(to|in)\s+(living|live|going\s+on)\b/i,
  /\bbetter\s+off\s+(dead|without\s+me)\b/i,
  /\bharm(ing)?\s+my\s?self\b/i,
  /\bhurt(ing)?\s+my\s?self\b/i,
  /\bcut(ting)?\s+my\s?self\b/i,
  /\bself[-\s]?harm\b/i,
  /\bend\s+the\s+pain\b/i,
  /\bcan'?t\s+go\s+on\b/i,
  /\bnothing\s+left\s+to\s+live\s+for\b/i
];

// Softer distress signals. On their own these do NOT trigger the crisis path,
// but they are surfaced so callers can choose a gentler tone if desired.
const DISTRESS_PATTERNS = [
  /\bhopeless\b/i,
  /\bworthless\b/i,
  /\bgive\s+up\b/i,
  /\bcan'?t\s+take\s+(it|this)\s+anymore\b/i,
  /\bso\s+(alone|lonely)\b/i,
  /\bempty\s+inside\b/i
];

/**
 * Analyze user input for crisis / acute-distress signals.
 *
 * @param {string} text - Raw user input.
 * @returns {{ isCrisis: boolean, isDistress: boolean, matched: string[] }}
 *   - isCrisis: true when high-risk language is detected.
 *   - isDistress: true when softer distress language is detected.
 *   - matched: the source pattern strings that matched (for debugging/tests).
 */
export function detectCrisis(text) {
  if (!text || typeof text !== 'string') {
    return { isCrisis: false, isDistress: false, matched: [] };
  }

  const matched = [];

  let isCrisis = false;
  for (const pattern of HIGH_RISK_PATTERNS) {
    if (pattern.test(text)) {
      isCrisis = true;
      matched.push(pattern.source);
    }
  }

  let isDistress = false;
  for (const pattern of DISTRESS_PATTERNS) {
    if (pattern.test(text)) {
      isDistress = true;
      matched.push(pattern.source);
    }
  }

  return { isCrisis, isDistress, matched };
}

/**
 * A compassionate, tradition-neutral message shown when crisis is detected.
 * Leads with human warmth and concrete help — not scripture.
 *
 * Resources are international-leaning; callers may localize later.
 */
export const CRISIS_MESSAGE = {
  title: 'You matter, and you are not alone',
  body:
    'It sounds like you are carrying something incredibly heavy right now. ' +
    'Before any words from a sacred text, what matters most is your safety and ' +
    'that you talk to someone who can truly be with you in this moment. ' +
    'Please consider reaching out to a person you trust or one of the free, ' +
    'confidential services below. You deserve support from real people who care.',
  resources: [
    {
      label: 'International Association for Suicide Prevention — find a crisis center',
      url: 'https://www.iasp.info/resources/Crisis_Centres/'
    },
    {
      label: 'Befrienders Worldwide — emotional support helplines',
      url: 'https://www.befrienders.org/'
    },
    {
      label: 'US & Canada: call or text 988 (Suicide & Crisis Lifeline)',
      url: 'https://988lifeline.org/'
    }
  ],
  closing:
    'If you are in immediate danger, please contact your local emergency number now. ' +
    'When you are ready — and only if it helps — we can gently sit with a single ' +
    'verse together. But there is no hurry. Your wellbeing comes first.'
};
