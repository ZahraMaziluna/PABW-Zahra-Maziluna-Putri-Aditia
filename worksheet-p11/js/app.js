import { fetchMakanan } from './api.js';
import { aturMakananList, state } from './state.js';
import { render } from './dom.js';
import { pasangPendengar } from './events.js';

async function init() {
  render(state);
  pasangPendengar();
  const makananList = await fetchMakanan();
  aturMakananList(makananList);
}

document.addEventListener('DOMContentLoaded', init, { once: true });