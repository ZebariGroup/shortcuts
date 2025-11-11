const fs = require('fs');

const shortcuts = [];

// Windows OS (20 shortcuts)
const windowsShortcuts = [
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Cut', keys: ['Ctrl', 'X'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Y'] },
  { name: 'Select All', keys: ['Ctrl', 'A'] },
  { name: 'Find', keys: ['Ctrl', 'F'] },
  { name: 'Save', keys: ['Ctrl', 'S'] },
  { name: 'Open', keys: ['Ctrl', 'O'] },
  { name: 'New', keys: ['Ctrl', 'N'] },
  { name: 'Close Window', keys: ['Alt', 'F4'] },
  { name: 'Switch Apps', keys: ['Alt', 'Tab'] },
  { name: 'Task Manager', keys: ['Ctrl', 'Shift', 'Esc'] },
  { name: 'Lock Screen', keys: ['Windows', 'L'] },
  { name: 'Run Dialog', keys: ['Windows', 'R'] },
  { name: 'File Explorer', keys: ['Windows', 'E'] },
  { name: 'Settings', keys: ['Windows', 'I'] },
  { name: 'Search', keys: ['Windows', 'S'] },
  { name: 'Print Screen', keys: ['PrtScn'] },
  { name: 'Snipping Tool', keys: ['Windows', 'Shift', 'S'] }
];

windowsShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Windows`,
    keys: s.keys,
    category: 'windows',
    platform: 'Windows'
  });
});

// macOS (20 shortcuts)
const macosShortcuts = [
  { name: 'Copy', keys: ['⌘', 'C'] },
  { name: 'Paste', keys: ['⌘', 'V'] },
  { name: 'Cut', keys: ['⌘', 'X'] },
  { name: 'Undo', keys: ['⌘', 'Z'] },
  { name: 'Redo', keys: ['⌘', 'Shift', 'Z'] },
  { name: 'Select All', keys: ['⌘', 'A'] },
  { name: 'Find', keys: ['⌘', 'F'] },
  { name: 'Save', keys: ['⌘', 'S'] },
  { name: 'Screenshot', keys: ['⌘', 'Shift', '3'] },
  { name: 'Screenshot Selection', keys: ['⌘', 'Shift', '4'] },
  { name: 'Switch Apps', keys: ['⌘', 'Tab'] },
  { name: 'Force Quit', keys: ['⌘', 'Option', 'Esc'] },
  { name: 'Spotlight Search', keys: ['⌘', 'Space'] },
  { name: 'Mission Control', keys: ['⌘', '↑'] },
  { name: 'Launchpad', keys: ['⌘', 'Space'] },
  { name: 'Finder', keys: ['⌘', 'Space'] },
  { name: 'Hide App', keys: ['⌘', 'H'] },
  { name: 'Quit App', keys: ['⌘', 'Q'] },
  { name: 'Minimize', keys: ['⌘', 'M'] },
  { name: 'Full Screen', keys: ['⌘', 'Ctrl', 'F'] }
];

macosShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in macOS`,
    keys: s.keys,
    category: 'macos',
    platform: 'macOS'
  });
});

// Microsoft Word (25 shortcuts)
const wordShortcuts = [
  { name: 'Bold', keys: ['Ctrl', 'B'] },
  { name: 'Italic', keys: ['Ctrl', 'I'] },
  { name: 'Underline', keys: ['Ctrl', 'U'] },
  { name: 'Copy Format', keys: ['Ctrl', 'Shift', 'C'] },
  { name: 'Paste Format', keys: ['Ctrl', 'Shift', 'V'] },
  { name: 'Find', keys: ['Ctrl', 'F'] },
  { name: 'Replace', keys: ['Ctrl', 'H'] },
  { name: 'Go To', keys: ['Ctrl', 'G'] },
  { name: 'Insert Page Break', keys: ['Ctrl', 'Enter'] },
  { name: 'Insert Table', keys: ['Alt', 'N', 'T'] },
  { name: 'Save', keys: ['Ctrl', 'S'] },
  { name: 'Print', keys: ['Ctrl', 'P'] },
  { name: 'New Document', keys: ['Ctrl', 'N'] },
  { name: 'Open Document', keys: ['Ctrl', 'O'] },
  { name: 'Close Document', keys: ['Ctrl', 'W'] },
  { name: 'Select All', keys: ['Ctrl', 'A'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Y'] },
  { name: 'Font Size Increase', keys: ['Ctrl', 'Shift', '>'] },
  { name: 'Font Size Decrease', keys: ['Ctrl', 'Shift', '<'] },
  { name: 'Align Left', keys: ['Ctrl', 'L'] },
  { name: 'Align Center', keys: ['Ctrl', 'E'] },
  { name: 'Align Right', keys: ['Ctrl', 'R'] },
  { name: 'Justify', keys: ['Ctrl', 'J'] },
  { name: 'Insert Hyperlink', keys: ['Ctrl', 'K'] }
];

wordShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Microsoft Word`,
    keys: s.keys,
    category: 'word',
    platform: 'Microsoft Word'
  });
});

// Microsoft Excel (30 shortcuts)
const excelShortcuts = [
  { name: 'Bold', keys: ['Ctrl', 'B'] },
  { name: 'Italic', keys: ['Ctrl', 'I'] },
  { name: 'Underline', keys: ['Ctrl', 'U'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Cut', keys: ['Ctrl', 'X'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Y'] },
  { name: 'Save', keys: ['Ctrl', 'S'] },
  { name: 'New Workbook', keys: ['Ctrl', 'N'] },
  { name: 'Insert Row', keys: ['Ctrl', 'Shift', '+'] },
  { name: 'Insert Column', keys: ['Ctrl', 'Shift', '+'] },
  { name: 'Delete Row', keys: ['Ctrl', '-'] },
  { name: 'Delete Column', keys: ['Ctrl', '-'] },
  { name: 'AutoSum', keys: ['Alt', '='] },
  { name: 'Format Cells', keys: ['Ctrl', '1'] },
  { name: 'Find', keys: ['Ctrl', 'F'] },
  { name: 'Replace', keys: ['Ctrl', 'H'] },
  { name: 'Go To', keys: ['Ctrl', 'G'] },
  { name: 'Insert Function', keys: ['Shift', 'F3'] },
  { name: 'Freeze Panes', keys: ['Alt', 'W', 'F'] },
  { name: 'Filter', keys: ['Ctrl', 'Shift', 'L'] },
  { name: 'Sort Ascending', keys: ['Alt', 'A', 'S', 'A'] },
  { name: 'Sort Descending', keys: ['Alt', 'A', 'S', 'D'] },
  { name: 'Create Chart', keys: ['Alt', 'F1'] },
  { name: 'Print', keys: ['Ctrl', 'P'] },
  { name: 'Select All', keys: ['Ctrl', 'A'] },
  { name: 'Fill Down', keys: ['Ctrl', 'D'] },
  { name: 'Fill Right', keys: ['Ctrl', 'R'] },
  { name: 'Insert Date', keys: ['Ctrl', ';'] }
];

excelShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Microsoft Excel`,
    keys: s.keys,
    category: 'excel',
    platform: 'Microsoft Excel'
  });
});

// Microsoft PowerPoint (20 shortcuts)
const powerpointShortcuts = [
  { name: 'New Slide', keys: ['Ctrl', 'M'] },
  { name: 'Duplicate Slide', keys: ['Ctrl', 'D'] },
  { name: 'Delete Slide', keys: ['Delete'] },
  { name: 'Bold', keys: ['Ctrl', 'B'] },
  { name: 'Italic', keys: ['Ctrl', 'I'] },
  { name: 'Underline', keys: ['Ctrl', 'U'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Cut', keys: ['Ctrl', 'X'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Y'] },
  { name: 'Save', keys: ['Ctrl', 'S'] },
  { name: 'Start Slideshow', keys: ['F5'] },
  { name: 'Start from Current', keys: ['Shift', 'F5'] },
  { name: 'End Slideshow', keys: ['Esc'] },
  { name: 'Next Slide', keys: ['→'] },
  { name: 'Previous Slide', keys: ['←'] },
  { name: 'New Presentation', keys: ['Ctrl', 'N'] },
  { name: 'Open Presentation', keys: ['Ctrl', 'O'] },
  { name: 'Print', keys: ['Ctrl', 'P'] }
];

powerpointShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Microsoft PowerPoint`,
    keys: s.keys,
    category: 'powerpoint',
    platform: 'Microsoft PowerPoint'
  });
});

// Microsoft Outlook (20 shortcuts)
const outlookShortcuts = [
  { name: 'New Email', keys: ['Ctrl', 'N'] },
  { name: 'Reply', keys: ['Ctrl', 'R'] },
  { name: 'Reply All', keys: ['Ctrl', 'Shift', 'R'] },
  { name: 'Forward', keys: ['Ctrl', 'F'] },
  { name: 'Send', keys: ['Ctrl', 'Enter'] },
  { name: 'Delete', keys: ['Delete'] },
  { name: 'Archive', keys: ['Backspace'] },
  { name: 'Mark as Read', keys: ['Ctrl', 'Q'] },
  { name: 'Mark as Unread', keys: ['Ctrl', 'U'] },
  { name: 'Flag', keys: ['Insert'] },
  { name: 'Unflag', keys: ['Ctrl', 'Shift', 'G'] },
  { name: 'Search', keys: ['Ctrl', 'E'] },
  { name: 'New Appointment', keys: ['Ctrl', 'Shift', 'A'] },
  { name: 'New Meeting', keys: ['Ctrl', 'Shift', 'Q'] },
  { name: 'New Task', keys: ['Ctrl', 'Shift', 'K'] },
  { name: 'New Note', keys: ['Ctrl', 'Shift', 'N'] },
  { name: 'Go to Calendar', keys: ['Ctrl', '2'] },
  { name: 'Go to Contacts', keys: ['Ctrl', '3'] },
  { name: 'Go to Tasks', keys: ['Ctrl', '4'] },
  { name: 'Go to Mail', keys: ['Ctrl', '1'] }
];

outlookShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Microsoft Outlook`,
    keys: s.keys,
    category: 'outlook',
    platform: 'Microsoft Outlook'
  });
});

// Google Chrome (20 shortcuts)
const chromeShortcuts = [
  { name: 'New Tab', keys: ['Ctrl', 'T'] },
  { name: 'Close Tab', keys: ['Ctrl', 'W'] },
  { name: 'Reload', keys: ['Ctrl', 'R'] },
  { name: 'Hard Reload', keys: ['Ctrl', 'Shift', 'R'] },
  { name: 'Address Bar', keys: ['Ctrl', 'L'] },
  { name: 'Bookmarks', keys: ['Ctrl', 'Shift', 'O'] },
  { name: 'History', keys: ['Ctrl', 'H'] },
  { name: 'Downloads', keys: ['Ctrl', 'J'] },
  { name: 'Developer Tools', keys: ['F12'] },
  { name: 'Find in Page', keys: ['Ctrl', 'F'] },
  { name: 'Incognito Window', keys: ['Ctrl', 'Shift', 'N'] },
  { name: 'Previous Page', keys: ['Alt', '←'] },
  { name: 'Next Page', keys: ['Alt', '→'] },
  { name: 'New Window', keys: ['Ctrl', 'N'] },
  { name: 'Close Window', keys: ['Ctrl', 'Shift', 'W'] },
  { name: 'Switch Tabs', keys: ['Ctrl', 'Tab'] },
  { name: 'Go to Tab', keys: ['Ctrl', '1-9'] },
  { name: 'Pin Tab', keys: ['Ctrl', 'Shift', 'P'] },
  { name: 'Duplicate Tab', keys: ['Ctrl', 'Shift', 'D'] },
  { name: 'Bookmark Page', keys: ['Ctrl', 'D'] }
];

chromeShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Google Chrome`,
    keys: s.keys,
    category: 'chrome',
    platform: 'Google Chrome'
  });
});

// Firefox (20 shortcuts)
const firefoxShortcuts = [
  { name: 'New Tab', keys: ['Ctrl', 'T'] },
  { name: 'Close Tab', keys: ['Ctrl', 'W'] },
  { name: 'Reload', keys: ['Ctrl', 'R'] },
  { name: 'Hard Reload', keys: ['Ctrl', 'Shift', 'R'] },
  { name: 'Address Bar', keys: ['Ctrl', 'L'] },
  { name: 'Bookmarks', keys: ['Ctrl', 'Shift', 'B'] },
  { name: 'History', keys: ['Ctrl', 'H'] },
  { name: 'Downloads', keys: ['Ctrl', 'Shift', 'Y'] },
  { name: 'Developer Tools', keys: ['F12'] },
  { name: 'Find in Page', keys: ['Ctrl', 'F'] },
  { name: 'Private Window', keys: ['Ctrl', 'Shift', 'P'] },
  { name: 'Previous Page', keys: ['Alt', '←'] },
  { name: 'Next Page', keys: ['Alt', '→'] },
  { name: 'New Window', keys: ['Ctrl', 'N'] },
  { name: 'Close Window', keys: ['Ctrl', 'Shift', 'W'] },
  { name: 'Switch Tabs', keys: ['Ctrl', 'Tab'] },
  { name: 'Go to Tab', keys: ['Ctrl', '1-9'] },
  { name: 'Pin Tab', keys: ['Ctrl', 'Shift', 'P'] },
  { name: 'Duplicate Tab', keys: ['Ctrl', 'Shift', 'D'] },
  { name: 'Bookmark Page', keys: ['Ctrl', 'D'] }
];

firefoxShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Firefox`,
    keys: s.keys,
    category: 'firefox',
    platform: 'Firefox'
  });
});

// VS Code (25 shortcuts)
const vscodeShortcuts = [
  { name: 'Quick Open', keys: ['Ctrl', 'P'] },
  { name: 'Command Palette', keys: ['Ctrl', 'Shift', 'P'] },
  { name: 'Toggle Terminal', keys: ['Ctrl', '`'] },
  { name: 'Find in Files', keys: ['Ctrl', 'Shift', 'F'] },
  { name: 'Go to Line', keys: ['Ctrl', 'G'] },
  { name: 'Duplicate Line', keys: ['Shift', 'Alt', '↓'] },
  { name: 'Comment Line', keys: ['Ctrl', '/'] },
  { name: 'Format Document', keys: ['Shift', 'Alt', 'F'] },
  { name: 'Multi-cursor', keys: ['Ctrl', 'D'] },
  { name: 'Split Editor', keys: ['Ctrl', '\\'] },
  { name: 'Toggle Sidebar', keys: ['Ctrl', 'B'] },
  { name: 'Toggle Activity Bar', keys: ['Ctrl', 'Shift', 'E'] },
  { name: 'New File', keys: ['Ctrl', 'N'] },
  { name: 'Save', keys: ['Ctrl', 'S'] },
  { name: 'Save All', keys: ['Ctrl', 'K', 'S'] },
  { name: 'Close Editor', keys: ['Ctrl', 'W'] },
  { name: 'Close All', keys: ['Ctrl', 'K', 'W'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Y'] },
  { name: 'Find', keys: ['Ctrl', 'F'] },
  { name: 'Replace', keys: ['Ctrl', 'H'] },
  { name: 'Go to Symbol', keys: ['Ctrl', 'Shift', 'O'] },
  { name: 'Go to Definition', keys: ['F12'] },
  { name: 'Rename Symbol', keys: ['F2'] },
  { name: 'Toggle Word Wrap', keys: ['Alt', 'Z'] }
];

vscodeShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in VS Code`,
    keys: s.keys,
    category: 'vscode',
    platform: 'VS Code'
  });
});

// Photoshop (25 shortcuts)
const photoshopShortcuts = [
  { name: 'New Layer', keys: ['Ctrl', 'Shift', 'N'] },
  { name: 'Duplicate Layer', keys: ['Ctrl', 'J'] },
  { name: 'Delete Layer', keys: ['Delete'] },
  { name: 'Merge Layers', keys: ['Ctrl', 'E'] },
  { name: 'Free Transform', keys: ['Ctrl', 'T'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Step Backward', keys: ['Ctrl', 'Alt', 'Z'] },
  { name: 'Step Forward', keys: ['Ctrl', 'Shift', 'Z'] },
  { name: 'Zoom In', keys: ['Ctrl', '+'] },
  { name: 'Zoom Out', keys: ['Ctrl', '-'] },
  { name: 'Fit on Screen', keys: ['Ctrl', '0'] },
  { name: 'Actual Size', keys: ['Ctrl', '1'] },
  { name: 'Brush Tool', keys: ['B'] },
  { name: 'Eraser Tool', keys: ['E'] },
  { name: 'Clone Stamp', keys: ['S'] },
  { name: 'Crop Tool', keys: ['C'] },
  { name: 'Save', keys: ['Ctrl', 'S'] },
  { name: 'Save As', keys: ['Ctrl', 'Shift', 'S'] },
  { name: 'New Document', keys: ['Ctrl', 'N'] },
  { name: 'Open Document', keys: ['Ctrl', 'O'] },
  { name: 'Close Document', keys: ['Ctrl', 'W'] },
  { name: 'Print', keys: ['Ctrl', 'P'] },
  { name: 'Preferences', keys: ['Ctrl', 'K'] }
];

photoshopShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Adobe Photoshop`,
    keys: s.keys,
    category: 'photoshop',
    platform: 'Adobe Photoshop'
  });
});

// QuickBooks (25 shortcuts)
const quickbooksShortcuts = [
  { name: 'New Invoice', keys: ['Ctrl', 'I'] },
  { name: 'New Bill', keys: ['Ctrl', 'B'] },
  { name: 'New Check', keys: ['Ctrl', 'W'] },
  { name: 'New Customer', keys: ['Ctrl', 'J'] },
  { name: 'New Vendor', keys: ['Ctrl', 'V'] },
  { name: 'New Item', keys: ['Ctrl', 'N'] },
  { name: 'Find', keys: ['Ctrl', 'F'] },
  { name: 'Reports', keys: ['Ctrl', 'R'] },
  { name: 'Chart of Accounts', keys: ['Ctrl', 'A'] },
  { name: 'Journal Entry', keys: ['Ctrl', 'Y'] },
  { name: 'Reconcile', keys: ['Ctrl', 'R'] },
  { name: 'Backup', keys: ['Ctrl', 'B'] },
  { name: 'Print', keys: ['Ctrl', 'P'] },
  { name: 'Save', keys: ['Ctrl', 'S'] },
  { name: 'Close', keys: ['Esc'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Y'] },
  { name: 'Help', keys: ['F1'] },
  { name: 'Preferences', keys: ['Ctrl', ','] },
  { name: 'Company Info', keys: ['Ctrl', 'I'] },
  { name: 'Write Checks', keys: ['Ctrl', 'W'] },
  { name: 'Receive Payments', keys: ['Ctrl', 'R'] },
  { name: 'Make Deposits', keys: ['Ctrl', 'D'] },
  { name: 'Enter Bills', keys: ['Ctrl', 'E'] },
  { name: 'Pay Bills', keys: ['Ctrl', 'P'] }
];

quickbooksShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in QuickBooks`,
    keys: s.keys,
    category: 'quickbooks',
    platform: 'QuickBooks'
  });
});

// Generate the file
let content = 'export const shortcuts = [\n';
shortcuts.forEach((s, i) => {
  content += `  {\n`;
  content += `    name: '${s.name}',\n`;
  content += `    description: '${s.description}',\n`;
  content += `    keys: ${JSON.stringify(s.keys)},\n`;
  content += `    category: '${s.category}',\n`;
  content += `    platform: '${s.platform}'\n`;
  content += `  }${i < shortcuts.length - 1 ? ',' : ''}\n`;
});
content += ']\n';

fs.writeFileSync('src/data/shortcuts.js', content);
console.log(`Created ${shortcuts.length} shortcuts for ${new Set(shortcuts.map(s => s.platform)).size} products`);

