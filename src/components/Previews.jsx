import React, { useState } from 'react';
import { ArrowRight, Check, ChevronDown, CircleCheck, Info, Mail, Plus, Search, Sparkles, X } from 'lucide-react';
import { sampleRows } from '../data/catalog.js';

export function ComponentPreview({ id, notify, openModal }) {
  const [checked, setChecked] = useState(true);
  const [enabled, setEnabled] = useState(true);
  const [tab, setTab] = useState('Overview');
  const [progress, setProgress] = useState(68);
  const [sortAscending, setSortAscending] = useState(true);
  const [value, setValue] = useState('');
  const [inputTouched, setInputTouched] = useState(false);
  const [selected, setSelected] = useState('Default workspace');

  switch (id) {
    case 'button': return <div className="preview-buttons">
      <button className="btn btn-primary" onClick={() => notify('Primary button clicked')}><Plus size={15}/> Create new</button>
      <button className="btn btn-secondary" onClick={() => notify('Secondary action complete')}>Secondary</button>
      <button className="icon-button icon-button-bordered" aria-label="More details" onClick={() => notify('Icon button clicked')}><ArrowRight size={17}/></button>
    </div>;
    case 'input': return <div className="field-group preview-field"><label htmlFor="component-demo-email">Email address</label><div className={`input-with-icon ${inputTouched && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'has-error' : ''}`}><Mail size={16}/><input id="component-demo-email" value={value} onChange={e => setValue(e.target.value)} onBlur={() => setInputTouched(true)} placeholder="you@company.com" type="email"/></div><span className={`field-hint ${inputTouched && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'error-text' : ''}`}>{inputTouched && value && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? 'Valid email address' : inputTouched ? 'Please enter a valid email' : 'We will never share your email.'}</span></div>;
    case 'checkbox': return <div className="stacked-options"><label className="check-row"><input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)}/><span>Enable notifications</span></label><label className="check-row"><input type="checkbox" defaultChecked/><span>Weekly summaries</span></label><span className="field-hint">Selected: {checked ? 'Yes' : 'No'}</span></div>;
    case 'switch': return <div className="switch-preview"><div><strong>Auto-save</strong><span className="field-hint">Save your work automatically</span></div><button type="button" className={`switch ${enabled ? 'active' : ''}`} aria-checked={enabled} role="switch" aria-label="Auto-save" onClick={() => setEnabled(!enabled)}><span/></button></div>;
    case 'select': return <div className="field-group"><label htmlFor="workspace-select">Workspace</label><div className="select-wrap"><select id="workspace-select" value={selected} onChange={e => setSelected(e.target.value)}><option>Default workspace</option><option>Design team</option><option>Development team</option></select><ChevronDown size={16}/></div></div>;
    case 'badge': return <div className="preview-buttons"><span className="badge badge-success"><span className="badge-dot"/> Published</span><span className="badge badge-warning">In review</span><span className="badge badge-neutral">Draft</span></div>;
    case 'alert': return <div className="alert-demo"><span className="alert-icon"><Info size={18}/></span><div><strong>Heads up!</strong><p>Your interface updates are ready to preview.</p></div></div>;
    case 'toast': return <button className="btn btn-secondary" onClick={() => notify('Changes saved successfully!', 'success')}><CircleCheck size={16}/> Show toast notification</button>;
    case 'modal': return <button className="btn btn-primary" onClick={openModal}>Open dialog <ArrowRight size={15}/></button>;
    case 'tabs': return <div className="tab-demo"><div className="segmented mini-tabs" role="tablist" aria-label="Example tabs">{['Overview', 'Activity', 'Settings'].map(item => <button key={item} role="tab" aria-selected={tab === item} onClick={() => setTab(item)} className={tab === item ? 'selected' : ''}>{item}</button>)}</div><p className="tab-content">{tab === 'Overview' ? 'Everything looks good in your workspace.' : tab === 'Activity' ? 'Last update: a few moments ago.' : 'Configure how your workspace behaves.'}</p></div>;
    case 'accordion': return <div className="accordion-demo"><details open><summary>What is a design system?</summary><p>A collection of reusable design rules and UI components.</p></details><details><summary>Can I use these components?</summary><p>Yes. This educational project includes examples to adapt.</p></details></div>;
    case 'progress': return <div className="progress-demo"><div className="progress-info"><span>Project completion</span><strong>{progress}%</strong></div><div className="progress-track"><span style={{ width: `${progress}%` }}/></div><input aria-label="Change progress" className="range" type="range" min="0" max="100" value={progress} onChange={e => setProgress(Number(e.target.value))}/></div>;
    case 'card': return <div className="mini-card"><div className="mini-card-icon"><Sparkles size={19}/></div><strong>Start with components</strong><span>Build beautiful interfaces faster.</span><button onClick={() => notify('Card action selected')} className="text-action">Explore library <ArrowRight size={14}/></button></div>;
    case 'avatar': return <div className="avatars-demo"><span className="avatar avatar-purple">VS</span><span className="avatar avatar-pink">AJ</span><span className="avatar avatar-green">RK</span><span className="avatar avatar-more">+5</span><span className="field-hint">Your project team</span></div>;
    case 'table': return <div className="table-scroll"><table className="tiny-table"><thead><tr><th><button onClick={() => setSortAscending(!sortAscending)}>Task <ChevronDown size={12}/></button></th><th>Status</th></tr></thead><tbody>{[...sampleRows].sort((a,b) => sortAscending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)).map(row => <tr key={row.name}><td>{row.name}</td><td><span className={`table-status ${row.status === 'Complete' ? 'complete' : ''}`}>{row.status}</span></td></tr>)}</tbody></table></div>;
    case 'skeleton': return <div className="skeleton-demo"><div className="skeleton skeleton-avatar"/><div className="skeleton-lines"><div className="skeleton skeleton-line"/><div className="skeleton skeleton-line short"/></div></div>;
    default: return null;
  }
}

export function Modal({ onClose, onConfirm }) {
  const closeRef = React.useRef(null);
  React.useEffect(() => {
    const previousFocus = document.activeElement;
    function onKeyDown(e) {
      if (e.key === 'Escape') onClose();
      if (e.key === 'Tab') {
        const focusable = [...document.querySelectorAll('[data-modal] button')];
        const index = focusable.indexOf(document.activeElement);
        if (focusable.length && e.shiftKey && index === 0) { e.preventDefault(); focusable[focusable.length - 1].focus(); }
        else if (focusable.length && !e.shiftKey && index === focusable.length - 1) { e.preventDefault(); focusable[0].focus(); }
      }
    }
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = ''; previousFocus?.focus?.(); };
  }, [onClose]);
  return <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}><div className="modal-content" data-modal role="dialog" aria-modal="true" aria-labelledby="modal-title"><button ref={closeRef} aria-label="Close dialog" className="icon-button modal-close" onClick={onClose}><X size={18}/></button><div className="modal-symbol"><Check size={23}/></div><h3 id="modal-title">Confirm your changes</h3><p>You're about to apply the new settings to this preview. This is a local demonstration — no data is sent to a server.</p><div className="modal-actions"><button className="btn btn-secondary" onClick={onClose}>Cancel</button><button className="btn btn-primary" onClick={onConfirm}>Confirm changes</button></div></div></div>;
}
