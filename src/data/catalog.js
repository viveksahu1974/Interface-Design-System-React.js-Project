export const accents = {
  violet: { name: 'Iris Violet', base: '#6958df', light: '#edeafe', rgb: '105, 88, 223' },
  blue: { name: 'Ocean Blue', base: '#2563eb', light: '#e7efff', rgb: '37, 99, 235' },
  emerald: { name: 'Leaf Green', base: '#0e9a70', light: '#dbf8ec', rgb: '14, 154, 112' },
  rose: { name: 'Coral Rose', base: '#e34c82', light: '#ffe9f0', rgb: '227, 76, 130' },
  amber: { name: 'Sunset Gold', base: '#c17a0d', light: '#fff1d4', rgb: '193, 122, 13' },
};

export const catalog = [
  { id: 'button', name: 'Button', category: 'Actions', description: 'Interactive actions with size and variant controls.', status: 'Stable' },
  { id: 'input', name: 'Text Input', category: 'Forms', description: 'Accessible input with labels and validation.', status: 'Stable' },
  { id: 'checkbox', name: 'Checkbox', category: 'Forms', description: 'Selectable controls with clear checked states.', status: 'Stable' },
  { id: 'switch', name: 'Switch', category: 'Forms', description: 'On/off control with immediate visual feedback.', status: 'Stable' },
  { id: 'select', name: 'Select', category: 'Forms', description: 'Native keyboard-friendly selection control.', status: 'Stable' },
  { id: 'badge', name: 'Badge', category: 'Display', description: 'Compact labels for categorization and status.', status: 'Stable' },
  { id: 'alert', name: 'Alert', category: 'Feedback', description: 'Contextual messages with semantic roles.', status: 'Stable' },
  { id: 'toast', name: 'Toast', category: 'Feedback', description: 'Dismissible non-blocking notifications.', status: 'Stable' },
  { id: 'modal', name: 'Modal Dialog', category: 'Overlay', description: 'Focused overlay with keyboard close behavior.', status: 'Stable' },
  { id: 'tabs', name: 'Tabs', category: 'Navigation', description: 'Switch between related content panels.', status: 'Stable' },
  { id: 'accordion', name: 'Accordion', category: 'Display', description: 'Expandable sections using native disclosure.', status: 'Stable' },
  { id: 'progress', name: 'Progress', category: 'Feedback', description: 'A readable visual indicator of completion.', status: 'Stable' },
  { id: 'card', name: 'Card', category: 'Display', description: 'Structured content surface with clear actions.', status: 'Stable' },
  { id: 'avatar', name: 'Avatar', category: 'Display', description: 'Initials-based profile identifiers.', status: 'Stable' },
  { id: 'table', name: 'Data Table', category: 'Data', description: 'Sortable records with responsive overflow.', status: 'Stable' },
  { id: 'skeleton', name: 'Skeleton', category: 'Feedback', description: 'Loading-state placeholders with reduced motion support.', status: 'Stable' },
];

export const categories = ['All', 'Actions', 'Forms', 'Display', 'Feedback', 'Overlay', 'Navigation', 'Data'];

export const sampleRows = [
  { name: 'Landing page', owner: 'Product team', status: 'Complete', date: '03 Aug 2026' },
  { name: 'Component library', owner: 'Design team', status: 'In review', date: '30 Jul 2026' },
  { name: 'Theme tokens', owner: 'Development', status: 'Complete', date: '27 Jul 2026' },
];
