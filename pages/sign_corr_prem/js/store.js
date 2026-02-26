/**
 * sign_corr_prem/js/store.js
 *
 * Centralized persistence layer for the Signature Premium page.
 *
 * Why this module exists:
 * 1) Keeps localStorage key management in one place.
 * 2) Avoids repeating get/save boilerplate in UI and report logic.
 * 3) Makes future schema changes safer because storage touchpoints are centralized.
 *
 * Important contract:
 * - These functions intentionally return clones/fallbacks so downstream UI code can
 *   safely mutate the returned objects and explicitly persist via save* helpers.
 * - DEFAULT_* constants and handwritingMistakeCatalog are defined in sign_premium.js.
 */

function getHandwritingCorrectionStore() {
  return JSON.parse(localStorage.getItem("handwritingCorrectionStore"))
    || structuredClone(DEFAULT_HANDWRITING_CORRECTIONS);
}

function saveHandwritingCorrectionStore(store) {
  localStorage.setItem(
    "handwritingCorrectionStore",
    JSON.stringify(store)
  );
}

function getHandMistakeStore() {
  return JSON.parse(localStorage.getItem("handMistakeStore")) || {};
}

function saveHandMistakeStore(store) {
  localStorage.setItem("handMistakeStore", JSON.stringify(store));
}

function getSignatureCorrectionStore() {
  return JSON.parse(localStorage.getItem("signatureCorrectionStore"))
    || structuredClone(DEFAULT_SIGNATURE_CORRECTIONS);
}

function saveSignatureCorrectionStore(store) {
  localStorage.setItem(
    "signatureCorrectionStore",
    JSON.stringify(store)
  );
}

function getHandwritingCatalog() {
  return JSON.parse(localStorage.getItem("handwritingMistakeCatalog"))
    || structuredClone(handwritingMistakeCatalog);
}

function saveHandwritingCatalog(catalog) {
  localStorage.setItem(
    "handwritingMistakeCatalog",
    JSON.stringify(catalog)
  );
}

function getSignatureMistakeStore() {
  return JSON.parse(localStorage.getItem("signatureMistakeMap"))
    || structuredClone(DEFAULT_SIGNATURE_MISTAKES);
}

function saveSignatureMistakeStore(store) {
  localStorage.setItem("signatureMistakeMap", JSON.stringify(store));
}