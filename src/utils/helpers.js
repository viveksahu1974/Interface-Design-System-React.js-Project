export function store(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage disabled */ }
}
export function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw === null ? fallback : JSON.parse(raw);
  } catch { return fallback; }
}
export async function copyText(value) {
  try {
    await navigator.clipboard.writeText(value);
    return true;
  } catch {
    const element = document.createElement('textarea');
    element.value = value;
    element.style.position = 'fixed';
    element.style.opacity = '0';
    document.body.appendChild(element);
    element.select();
    const ok = document.execCommand('copy');
    element.remove();
    return ok;
  }
}
export function downloadText(name, value, type = 'text/plain') {
  const file = new Blob([value], { type });
  const href = URL.createObjectURL(file);
  const link = document.createElement('a');
  link.href = href;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(href), 300);
}
export function initials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(part => part[0].toUpperCase()).join('');
}
