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

// Linux (15 shortcuts)
const linuxShortcuts = [
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Cut', keys: ['Ctrl', 'X'] },
  { name: 'Terminal', keys: ['Ctrl', 'Alt', 'T'] },
  { name: 'Lock Screen', keys: ['Ctrl', 'Alt', 'L'] },
  { name: 'Switch Windows', keys: ['Alt', 'Tab'] },
  { name: 'Switch Workspaces', keys: ['Ctrl', 'Alt', '←'] },
  { name: 'Screenshot', keys: ['Print'] },
  { name: 'Screenshot Area', keys: ['Shift', 'Print'] },
  { name: 'File Manager', keys: ['Super', 'E'] },
  { name: 'Search', keys: ['Super'] },
  { name: 'Close Window', keys: ['Alt', 'F4'] },
  { name: 'Minimize', keys: ['Super', 'Down'] },
  { name: 'Maximize', keys: ['Super', 'Up'] },
  { name: 'Show Desktop', keys: ['Super', 'D'] }
];

linuxShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Linux`,
    keys: s.keys,
    category: 'linux',
    platform: 'Linux'
  });
});

// Microsoft Edge (15 shortcuts)
const edgeShortcuts = [
  { name: 'New Tab', keys: ['Ctrl', 'T'] },
  { name: 'Close Tab', keys: ['Ctrl', 'W'] },
  { name: 'Reload', keys: ['Ctrl', 'R'] },
  { name: 'Address Bar', keys: ['Ctrl', 'L'] },
  { name: 'Bookmarks', keys: ['Ctrl', 'Shift', 'O'] },
  { name: 'History', keys: ['Ctrl', 'H'] },
  { name: 'Downloads', keys: ['Ctrl', 'J'] },
  { name: 'Developer Tools', keys: ['F12'] },
  { name: 'Find in Page', keys: ['Ctrl', 'F'] },
  { name: 'InPrivate Window', keys: ['Ctrl', 'Shift', 'N'] },
  { name: 'Previous Page', keys: ['Alt', '←'] },
  { name: 'Next Page', keys: ['Alt', '→'] },
  { name: 'New Window', keys: ['Ctrl', 'N'] },
  { name: 'Close Window', keys: ['Ctrl', 'Shift', 'W'] },
  { name: 'Bookmark Page', keys: ['Ctrl', 'D'] }
];

edgeShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Microsoft Edge`,
    keys: s.keys,
    category: 'edge',
    platform: 'Microsoft Edge'
  });
});

// Safari (15 shortcuts)
const safariShortcuts = [
  { name: 'New Tab', keys: ['⌘', 'T'] },
  { name: 'Close Tab', keys: ['⌘', 'W'] },
  { name: 'Reload', keys: ['⌘', 'R'] },
  { name: 'Address Bar', keys: ['⌘', 'L'] },
  { name: 'Bookmarks', keys: ['⌘', 'Option', 'B'] },
  { name: 'History', keys: ['⌘', 'Y'] },
  { name: 'Downloads', keys: ['⌘', 'Option', 'L'] },
  { name: 'Developer Tools', keys: ['⌘', 'Option', 'I'] },
  { name: 'Find in Page', keys: ['⌘', 'F'] },
  { name: 'Private Window', keys: ['⌘', 'Shift', 'N'] },
  { name: 'Previous Page', keys: ['⌘', '['] },
  { name: 'Next Page', keys: ['⌘', ']'] },
  { name: 'New Window', keys: ['⌘', 'N'] },
  { name: 'Close Window', keys: ['⌘', 'Shift', 'W'] },
  { name: 'Bookmark Page', keys: ['⌘', 'D'] }
];

safariShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Safari`,
    keys: s.keys,
    category: 'safari',
    platform: 'Safari'
  });
});

// Sublime Text (20 shortcuts)
const sublimetextShortcuts = [
  { name: 'Quick Open', keys: ['Ctrl', 'P'] },
  { name: 'Command Palette', keys: ['Ctrl', 'Shift', 'P'] },
  { name: 'Go to Line', keys: ['Ctrl', 'G'] },
  { name: 'Find', keys: ['Ctrl', 'F'] },
  { name: 'Find in Files', keys: ['Ctrl', 'Shift', 'F'] },
  { name: 'Replace', keys: ['Ctrl', 'H'] },
  { name: 'Duplicate Line', keys: ['Ctrl', 'Shift', 'D'] },
  { name: 'Comment Line', keys: ['Ctrl', '/'] },
  { name: 'Multi-cursor', keys: ['Ctrl', 'D'] },
  { name: 'Split View', keys: ['Alt', 'Shift', '2'] },
  { name: 'New File', keys: ['Ctrl', 'N'] },
  { name: 'Save', keys: ['Ctrl', 'S'] },
  { name: 'Save All', keys: ['Ctrl', 'Alt', 'S'] },
  { name: 'Close File', keys: ['Ctrl', 'W'] },
  { name: 'Close All', keys: ['Ctrl', 'K', 'W'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Y'] },
  { name: 'Select All', keys: ['Ctrl', 'A'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] }
];

sublimetextShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Sublime Text`,
    keys: s.keys,
    category: 'sublimetext',
    platform: 'Sublime Text'
  });
});

// Adobe Illustrator (20 shortcuts)
const illustratorShortcuts = [
  { name: 'New Document', keys: ['Ctrl', 'N'] },
  { name: 'Open Document', keys: ['Ctrl', 'O'] },
  { name: 'Save', keys: ['Ctrl', 'S'] },
  { name: 'Save As', keys: ['Ctrl', 'Shift', 'S'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Cut', keys: ['Ctrl', 'X'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Shift', 'Z'] },
  { name: 'Select All', keys: ['Ctrl', 'A'] },
  { name: 'Group', keys: ['Ctrl', 'G'] },
  { name: 'Ungroup', keys: ['Ctrl', 'Shift', 'G'] },
  { name: 'Lock Object', keys: ['Ctrl', '2'] },
  { name: 'Unlock All', keys: ['Ctrl', 'Alt', '2'] },
  { name: 'Hide Selection', keys: ['Ctrl', '3'] },
  { name: 'Show All', keys: ['Ctrl', 'Alt', '3'] },
  { name: 'Zoom In', keys: ['Ctrl', '+'] },
  { name: 'Zoom Out', keys: ['Ctrl', '-'] },
  { name: 'Fit Artboard', keys: ['Ctrl', '0'] },
  { name: 'Actual Size', keys: ['Ctrl', '1'] }
];

illustratorShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Adobe Illustrator`,
    keys: s.keys,
    category: 'illustrator',
    platform: 'Adobe Illustrator'
  });
});

// Figma (20 shortcuts)
const figmaShortcuts = [
  { name: 'New File', keys: ['Ctrl', 'N'] },
  { name: 'Open File', keys: ['Ctrl', 'O'] },
  { name: 'Save', keys: ['Ctrl', 'S'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Cut', keys: ['Ctrl', 'X'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Shift', 'Z'] },
  { name: 'Duplicate', keys: ['Ctrl', 'D'] },
  { name: 'Group', keys: ['Ctrl', 'G'] },
  { name: 'Ungroup', keys: ['Ctrl', 'Shift', 'G'] },
  { name: 'Frame Tool', keys: ['F'] },
  { name: 'Rectangle Tool', keys: ['R'] },
  { name: 'Ellipse Tool', keys: ['O'] },
  { name: 'Text Tool', keys: ['T'] },
  { name: 'Pen Tool', keys: ['P'] },
  { name: 'Zoom In', keys: ['Ctrl', '+'] },
  { name: 'Zoom Out', keys: ['Ctrl', '-'] },
  { name: 'Fit to Screen', keys: ['Shift', '1'] },
  { name: 'Export', keys: ['Ctrl', 'Shift', 'E'] }
];

figmaShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Figma`,
    keys: s.keys,
    category: 'figma',
    platform: 'Figma'
  });
});

// Slack (20 shortcuts)
const slackShortcuts = [
  { name: 'Quick Switcher', keys: ['Ctrl', 'K'] },
  { name: 'New Message', keys: ['Ctrl', 'N'] },
  { name: 'Search', keys: ['Ctrl', 'F'] },
  { name: 'Mark as Read', keys: ['Esc'] },
  { name: 'Mark Channel Read', keys: ['Shift', 'Esc'] },
  { name: 'Next Channel', keys: ['Alt', '↓'] },
  { name: 'Previous Channel', keys: ['Alt', '↑'] },
  { name: 'Next Unread', keys: ['Alt', 'Shift', '↓'] },
  { name: 'Previous Unread', keys: ['Alt', 'Shift', '↑'] },
  { name: 'Open Thread', keys: ['T'] },
  { name: 'Reply in Thread', keys: ['R'] },
  { name: 'Star Message', keys: ['*'] },
  { name: 'Pin Message', keys: ['P'] },
  { name: 'Edit Last Message', keys: ['↑'] },
  { name: 'Send Message', keys: ['Enter'] },
  { name: 'New Line', keys: ['Shift', 'Enter'] },
  { name: 'Mentions', keys: ['Ctrl', 'Shift', 'M'] },
  { name: 'All Unread', keys: ['Ctrl', 'Shift', 'A'] },
  { name: 'Preferences', keys: ['Ctrl', ','] },
  { name: 'Quit', keys: ['Ctrl', 'Q'] }
];

slackShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Slack`,
    keys: s.keys,
    category: 'slack',
    platform: 'Slack'
  });
});

// Microsoft Teams (20 shortcuts)
const teamsShortcuts = [
  { name: 'Search', keys: ['Ctrl', 'E'] },
  { name: 'New Chat', keys: ['Ctrl', 'N'] },
  { name: 'Go to Chat', keys: ['Ctrl', '2'] },
  { name: 'Go to Teams', keys: ['Ctrl', '3'] },
  { name: 'Go to Calendar', keys: ['Ctrl', '4'] },
  { name: 'Go to Calls', keys: ['Ctrl', '5'] },
  { name: 'Go to Files', keys: ['Ctrl', '6'] },
  { name: 'Accept Call', keys: ['Ctrl', 'Shift', 'S'] },
  { name: 'Decline Call', keys: ['Ctrl', 'Shift', 'D'] },
  { name: 'Mute', keys: ['Ctrl', 'Shift', 'M'] },
  { name: 'Toggle Video', keys: ['Ctrl', 'Shift', 'O'] },
  { name: 'Share Screen', keys: ['Ctrl', 'Shift', 'E'] },
  { name: 'Start Meeting', keys: ['Ctrl', 'Shift', 'N'] },
  { name: 'Schedule Meeting', keys: ['Ctrl', 'Shift', 'N'] },
  { name: 'Send Message', keys: ['Enter'] },
  { name: 'New Line', keys: ['Shift', 'Enter'] },
  { name: 'Mark as Read', keys: ['Ctrl', 'Q'] },
  { name: 'Mark as Unread', keys: ['Ctrl', 'U'] },
  { name: 'Settings', keys: ['Ctrl', ','] },
  { name: 'Quit', keys: ['Ctrl', 'Q'] }
];

teamsShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Microsoft Teams`,
    keys: s.keys,
    category: 'teams',
    platform: 'Microsoft Teams'
  });
});

// Notion (20 shortcuts)
const notionShortcuts = [
  { name: 'Quick Find', keys: ['Ctrl', 'P'] },
  { name: 'New Page', keys: ['Ctrl', 'N'] },
  { name: 'Toggle Sidebar', keys: ['Ctrl', '\\'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Shift', 'Z'] },
  { name: 'Bold', keys: ['Ctrl', 'B'] },
  { name: 'Italic', keys: ['Ctrl', 'I'] },
  { name: 'Underline', keys: ['Ctrl', 'U'] },
  { name: 'Strikethrough', keys: ['Ctrl', 'Shift', 'S'] },
  { name: 'Code', keys: ['Ctrl', 'E'] },
  { name: 'Heading 1', keys: ['Ctrl', 'Alt', '1'] },
  { name: 'Heading 2', keys: ['Ctrl', 'Alt', '2'] },
  { name: 'Heading 3', keys: ['Ctrl', 'Alt', '3'] },
  { name: 'Bullet List', keys: ['Ctrl', 'Shift', '7'] },
  { name: 'Numbered List', keys: ['Ctrl', 'Shift', '8'] },
  { name: 'Toggle List', keys: ['Ctrl', 'Shift', '9'] },
  { name: 'Toggle Todo', keys: ['Ctrl', 'Shift', '6'] },
  { name: 'Comment', keys: ['Ctrl', 'Alt', 'M'] },
  { name: 'Copy Link', keys: ['Ctrl', 'L'] },
  { name: 'Duplicate', keys: ['Ctrl', 'D'] }
];

notionShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Notion`,
    keys: s.keys,
    category: 'notion',
    platform: 'Notion'
  });
});

// Gmail (20 shortcuts)
const gmailShortcuts = [
  { name: 'Compose', keys: ['C'] },
  { name: 'Search', keys: ['/'] },
  { name: 'Reply', keys: ['R'] },
  { name: 'Reply All', keys: ['A'] },
  { name: 'Forward', keys: ['F'] },
  { name: 'Send', keys: ['Ctrl', 'Enter'] },
  { name: 'Archive', keys: ['E'] },
  { name: 'Delete', keys: ['#'] },
  { name: 'Mark as Read', keys: ['Shift', 'I'] },
  { name: 'Mark as Unread', keys: ['Shift', 'U'] },
  { name: 'Star', keys: ['S'] },
  { name: 'Important', keys: ['+'] },
  { name: 'Next Message', keys: ['J'] },
  { name: 'Previous Message', keys: ['K'] },
  { name: 'Select All', keys: ['*', 'A'] },
  { name: 'Go to Inbox', keys: ['G', 'I'] },
  { name: 'Go to Sent', keys: ['G', 'T'] },
  { name: 'Go to Drafts', keys: ['G', 'D'] },
  { name: 'Go to All Mail', keys: ['G', 'A'] },
  { name: 'Settings', keys: ['G', 'S'] }
];

gmailShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Gmail`,
    keys: s.keys,
    category: 'gmail',
    platform: 'Gmail'
  });
});

// Premiere Pro (20 shortcuts)
const premiereShortcuts = [
  { name: 'New Project', keys: ['Ctrl', 'N'] },
  { name: 'Open Project', keys: ['Ctrl', 'O'] },
  { name: 'Save', keys: ['Ctrl', 'S'] },
  { name: 'Import', keys: ['Ctrl', 'I'] },
  { name: 'Export', keys: ['Ctrl', 'M'] },
  { name: 'Play/Pause', keys: ['Space'] },
  { name: 'Stop', keys: ['S'] },
  { name: 'Cut', keys: ['C'] },
  { name: 'Razor Tool', keys: ['C'] },
  { name: 'Selection Tool', keys: ['V'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Shift', 'Z'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Delete', keys: ['Delete'] },
  { name: 'Zoom In', keys: ['='] },
  { name: 'Zoom Out', keys: ['-'] },
  { name: 'Fit to Screen', keys: ['\\'] },
  { name: 'New Sequence', keys: ['Ctrl', 'N'] },
  { name: 'Render', keys: ['Enter'] }
];

premiereShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Adobe Premiere Pro`,
    keys: s.keys,
    category: 'premiere',
    platform: 'Adobe Premiere Pro'
  });
});

// After Effects (20 shortcuts)
const aftereffectsShortcuts = [
  { name: 'New Composition', keys: ['Ctrl', 'N'] },
  { name: 'Open Project', keys: ['Ctrl', 'O'] },
  { name: 'Save', keys: ['Ctrl', 'S'] },
  { name: 'Import', keys: ['Ctrl', 'I'] },
  { name: 'Render', keys: ['Ctrl', 'M'] },
  { name: 'Play/Pause', keys: ['Space'] },
  { name: 'Stop', keys: ['Num 0'] },
  { name: 'New Layer', keys: ['Ctrl', 'Alt', 'Y'] },
  { name: 'Duplicate Layer', keys: ['Ctrl', 'D'] },
  { name: 'Split Layer', keys: ['Ctrl', 'Shift', 'D'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Shift', 'Z'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Delete', keys: ['Delete'] },
  { name: 'Zoom In', keys: ['='] },
  { name: 'Zoom Out', keys: ['-'] },
  { name: 'Fit to Screen', keys: ['\\'] },
  { name: 'Toggle Wireframe', keys: ['Ctrl', 'Alt', 'B'] },
  { name: 'Toggle Motion Blur', keys: ['Ctrl', 'Shift', 'F'] }
];

aftereffectsShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Adobe After Effects`,
    keys: s.keys,
    category: 'aftereffects',
    platform: 'Adobe After Effects'
  });
});

// Blender (20 shortcuts)
const blenderShortcuts = [
  { name: 'New File', keys: ['Ctrl', 'N'] },
  { name: 'Open', keys: ['Ctrl', 'O'] },
  { name: 'Save', keys: ['Ctrl', 'S'] },
  { name: 'Save As', keys: ['Ctrl', 'Shift', 'S'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Shift', 'Z'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Delete', keys: ['X'] },
  { name: 'Select All', keys: ['A'] },
  { name: 'Deselect All', keys: ['Alt', 'A'] },
  { name: 'Toggle Edit Mode', keys: ['Tab'] },
  { name: 'Toggle Wireframe', keys: ['Z'] },
  { name: 'Toggle Solid', keys: ['Alt', 'Z'] },
  { name: 'Render', keys: ['F12'] },
  { name: 'Play Animation', keys: ['Space'] },
  { name: 'Frame Selected', keys: ['Num .'] },
  { name: 'Camera View', keys: ['Num 0'] },
  { name: 'Front View', keys: ['Num 1'] },
  { name: 'Top View', keys: ['Num 7'] }
];

blenderShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Blender`,
    keys: s.keys,
    category: 'blender',
    platform: 'Blender'
  });
});

// AutoCAD (20 shortcuts)
const autocadShortcuts = [
  { name: 'New Drawing', keys: ['Ctrl', 'N'] },
  { name: 'Open', keys: ['Ctrl', 'O'] },
  { name: 'Save', keys: ['Ctrl', 'S'] },
  { name: 'Save As', keys: ['Ctrl', 'Shift', 'S'] },
  { name: 'Print', keys: ['Ctrl', 'P'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Y'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Cut', keys: ['Ctrl', 'X'] },
  { name: 'Select All', keys: ['Ctrl', 'A'] },
  { name: 'Line', keys: ['L'] },
  { name: 'Circle', keys: ['C'] },
  { name: 'Rectangle', keys: ['REC'] },
  { name: 'Arc', keys: ['A'] },
  { name: 'Move', keys: ['M'] },
  { name: 'Rotate', keys: ['RO'] },
  { name: 'Scale', keys: ['SC'] },
  { name: 'Zoom Extents', keys: ['Z', 'E'] },
  { name: 'Pan', keys: ['P'] }
];

autocadShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in AutoCAD`,
    keys: s.keys,
    category: 'autocad',
    platform: 'AutoCAD'
  });
});

// SolidWorks (20 shortcuts)
const solidworksShortcuts = [
  { name: 'New Part', keys: ['Ctrl', 'N'] },
  { name: 'Open', keys: ['Ctrl', 'O'] },
  { name: 'Save', keys: ['Ctrl', 'S'] },
  { name: 'Save As', keys: ['Ctrl', 'Shift', 'S'] },
  { name: 'Print', keys: ['Ctrl', 'P'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Y'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Cut', keys: ['Ctrl', 'X'] },
  { name: 'Select All', keys: ['Ctrl', 'A'] },
  { name: 'Rebuild', keys: ['Ctrl', 'B'] },
  { name: 'Force Rebuild', keys: ['Ctrl', 'Q'] },
  { name: 'Zoom to Fit', keys: ['F'] },
  { name: 'Zoom to Selection', keys: ['Shift', 'F'] },
  { name: 'Rotate View', keys: ['Middle Mouse'] },
  { name: 'Pan View', keys: ['Ctrl', 'Middle Mouse'] },
  { name: 'Zoom', keys: ['Shift', 'Middle Mouse'] },
  { name: 'Normal To', keys: ['Ctrl', '8'] },
  { name: 'Isometric View', keys: ['Ctrl', '7'] }
];

solidworksShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in SolidWorks`,
    keys: s.keys,
    category: 'solidworks',
    platform: 'SolidWorks'
  });
});

// Sketch (20 shortcuts)
const sketchShortcuts = [
  { name: 'New Document', keys: ['Ctrl', 'N'] },
  { name: 'Open', keys: ['Ctrl', 'O'] },
  { name: 'Save', keys: ['Ctrl', 'S'] },
  { name: 'Save As', keys: ['Ctrl', 'Shift', 'S'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Cut', keys: ['Ctrl', 'X'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Shift', 'Z'] },
  { name: 'Duplicate', keys: ['Ctrl', 'D'] },
  { name: 'Group', keys: ['Ctrl', 'G'] },
  { name: 'Ungroup', keys: ['Ctrl', 'Shift', 'G'] },
  { name: 'Lock', keys: ['Ctrl', 'Shift', 'L'] },
  { name: 'Unlock', keys: ['Ctrl', 'Shift', 'Alt', 'L'] },
  { name: 'Hide', keys: ['Ctrl', 'Shift', 'H'] },
  { name: 'Show', keys: ['Ctrl', 'Shift', 'Alt', 'H'] },
  { name: 'Zoom In', keys: ['Ctrl', '+'] },
  { name: 'Zoom Out', keys: ['Ctrl', '-'] },
  { name: 'Fit Canvas', keys: ['Ctrl', '0'] },
  { name: 'Export', keys: ['Ctrl', 'E'] }
];

sketchShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Sketch`,
    keys: s.keys,
    category: 'sketch',
    platform: 'Sketch'
  });
});

// Adobe InDesign (20 shortcuts)
const indesignShortcuts = [
  { name: 'New Document', keys: ['Ctrl', 'N'] },
  { name: 'Open', keys: ['Ctrl', 'O'] },
  { name: 'Save', keys: ['Ctrl', 'S'] },
  { name: 'Save As', keys: ['Ctrl', 'Shift', 'S'] },
  { name: 'Print', keys: ['Ctrl', 'P'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Cut', keys: ['Ctrl', 'X'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Shift', 'Z'] },
  { name: 'Select All', keys: ['Ctrl', 'A'] },
  { name: 'Place', keys: ['Ctrl', 'D'] },
  { name: 'Text Frame', keys: ['T'] },
  { name: 'Rectangle Frame', keys: ['F'] },
  { name: 'Ellipse Frame', keys: ['N'] },
  { name: 'Group', keys: ['Ctrl', 'G'] },
  { name: 'Ungroup', keys: ['Ctrl', 'Shift', 'G'] },
  { name: 'Zoom In', keys: ['Ctrl', '+'] },
  { name: 'Zoom Out', keys: ['Ctrl', '-'] },
  { name: 'Fit Page', keys: ['Ctrl', '0'] }
];

indesignShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Adobe InDesign`,
    keys: s.keys,
    category: 'indesign',
    platform: 'Adobe InDesign'
  });
});

// Adobe Lightroom (20 shortcuts)
const lightroomShortcuts = [
  { name: 'Import', keys: ['Ctrl', 'Shift', 'I'] },
  { name: 'Export', keys: ['Ctrl', 'Shift', 'E'] },
  { name: 'Library', keys: ['Ctrl', 'Alt', '1'] },
  { name: 'Develop', keys: ['Ctrl', 'Alt', '2'] },
  { name: 'Map', keys: ['Ctrl', 'Alt', '3'] },
  { name: 'Book', keys: ['Ctrl', 'Alt', '4'] },
  { name: 'Slideshow', keys: ['Ctrl', 'Alt', '5'] },
  { name: 'Print', keys: ['Ctrl', 'Alt', '6'] },
  { name: 'Web', keys: ['Ctrl', 'Alt', '7'] },
  { name: 'Copy Settings', keys: ['Ctrl', 'Shift', 'C'] },
  { name: 'Paste Settings', keys: ['Ctrl', 'Shift', 'V'] },
  { name: 'Reset', keys: ['Ctrl', 'Shift', 'R'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Shift', 'Z'] },
  { name: 'Flag as Pick', keys: ['P'] },
  { name: 'Flag as Reject', keys: ['X'] },
  { name: 'Remove Flag', keys: ['U'] },
  { name: 'Star Rating', keys: ['1-5'] },
  { name: 'Zoom In', keys: ['Ctrl', '+'] },
  { name: 'Zoom Out', keys: ['Ctrl', '-'] }
];

lightroomShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Adobe Lightroom`,
    keys: s.keys,
    category: 'lightroom',
    platform: 'Adobe Lightroom'
  });
});

// Audacity (20 shortcuts)
const audacityShortcuts = [
  { name: 'New Project', keys: ['Ctrl', 'N'] },
  { name: 'Open', keys: ['Ctrl', 'O'] },
  { name: 'Save Project', keys: ['Ctrl', 'S'] },
  { name: 'Export', keys: ['Ctrl', 'Shift', 'E'] },
  { name: 'Play', keys: ['Space'] },
  { name: 'Stop', keys: ['Space'] },
  { name: 'Record', keys: ['R'] },
  { name: 'Pause', keys: ['P'] },
  { name: 'Skip to Start', keys: ['Home'] },
  { name: 'Skip to End', keys: ['End'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Cut', keys: ['Ctrl', 'X'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Y'] },
  { name: 'Select All', keys: ['Ctrl', 'A'] },
  { name: 'Zoom In', keys: ['Ctrl', '1'] },
  { name: 'Zoom Out', keys: ['Ctrl', '3'] },
  { name: 'Zoom Normal', keys: ['Ctrl', '2'] },
  { name: 'Fit to Width', keys: ['Ctrl', 'F'] }
];

audacityShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Audacity`,
    keys: s.keys,
    category: 'audacity',
    platform: 'Audacity'
  });
});

// OBS Studio (20 shortcuts)
const obsShortcuts = [
  { name: 'Start Recording', keys: ['Ctrl', 'R'] },
  { name: 'Stop Recording', keys: ['Ctrl', 'R'] },
  { name: 'Start Streaming', keys: ['Ctrl', 'S'] },
  { name: 'Stop Streaming', keys: ['Ctrl', 'S'] },
  { name: 'Toggle Studio Mode', keys: ['Ctrl', 'T'] },
  { name: 'Transition', keys: ['Ctrl', 'T'] },
  { name: 'New Scene', keys: ['Ctrl', 'N'] },
  { name: 'Duplicate Scene', keys: ['Ctrl', 'D'] },
  { name: 'Delete Scene', keys: ['Delete'] },
  { name: 'New Source', keys: ['Ctrl', 'Shift', 'S'] },
  { name: 'Copy Source', keys: ['Ctrl', 'C'] },
  { name: 'Paste Source', keys: ['Ctrl', 'V'] },
  { name: 'Delete Source', keys: ['Delete'] },
  { name: 'Move Up', keys: ['Ctrl', '↑'] },
  { name: 'Move Down', keys: ['Ctrl', '↓'] },
  { name: 'Move Left', keys: ['Ctrl', '←'] },
  { name: 'Move Right', keys: ['Ctrl', '→'] },
  { name: 'Reset Transform', keys: ['Ctrl', 'R'] },
  { name: 'Fit to Screen', keys: ['Ctrl', 'F'] },
  { name: 'Settings', keys: ['Ctrl', ','] }
];

obsShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in OBS Studio`,
    keys: s.keys,
    category: 'obs',
    platform: 'OBS Studio'
  });
});

// Discord (20 shortcuts)
const discordShortcuts = [
  { name: 'Quick Switcher', keys: ['Ctrl', 'K'] },
  { name: 'New DM', keys: ['Ctrl', 'Shift', 'I'] },
  { name: 'Search', keys: ['Ctrl', 'F'] },
  { name: 'Mark as Read', keys: ['Esc'] },
  { name: 'Mark Server Read', keys: ['Shift', 'Esc'] },
  { name: 'Next Channel', keys: ['Alt', '↓'] },
  { name: 'Previous Channel', keys: ['Alt', '↑'] },
  { name: 'Next Unread', keys: ['Alt', 'Shift', '↓'] },
  { name: 'Previous Unread', keys: ['Alt', 'Shift', '↑'] },
  { name: 'Reply', keys: ['Shift', 'Enter'] },
  { name: 'Edit Last Message', keys: ['↑'] },
  { name: 'Send Message', keys: ['Enter'] },
  { name: 'New Line', keys: ['Shift', 'Enter'] },
  { name: 'Mentions', keys: ['Ctrl', 'Shift', 'M'] },
  { name: 'Pinned Messages', keys: ['Ctrl', 'P'] },
  { name: 'Toggle Mute', keys: ['Ctrl', 'Shift', 'M'] },
  { name: 'Toggle Deafen', keys: ['Ctrl', 'Shift', 'D'] },
  { name: 'Toggle Overlay', keys: ['Shift', '`'] },
  { name: 'Settings', keys: ['Ctrl', ','] },
  { name: 'Quit', keys: ['Ctrl', 'Q'] }
];

discordShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Discord`,
    keys: s.keys,
    category: 'discord',
    platform: 'Discord'
  });
});

// Zoom (20 shortcuts)
const zoomShortcuts = [
  { name: 'New Meeting', keys: ['Ctrl', 'M'] },
  { name: 'Join Meeting', keys: ['Ctrl', 'J'] },
  { name: 'Schedule Meeting', keys: ['Ctrl', 'S'] },
  { name: 'Share Screen', keys: ['Alt', 'S'] },
  { name: 'Stop Share', keys: ['Alt', 'S'] },
  { name: 'Mute/Unmute', keys: ['Alt', 'A'] },
  { name: 'Start/Stop Video', keys: ['Alt', 'V'] },
  { name: 'Switch Camera', keys: ['Alt', 'N'] },
  { name: 'Start Recording', keys: ['Alt', 'R'] },
  { name: 'Stop Recording', keys: ['Alt', 'R'] },
  { name: 'Pause Recording', keys: ['Alt', 'P'] },
  { name: 'Chat', keys: ['Alt', 'H'] },
  { name: 'Participants', keys: ['Alt', 'U'] },
  { name: 'Leave Meeting', keys: ['Alt', 'Q'] },
  { name: 'End Meeting', keys: ['Alt', 'Q'] },
  { name: 'Gallery View', keys: ['Alt', 'W'] },
  { name: 'Speaker View', keys: ['Alt', 'F'] },
  { name: 'Minimize Meeting', keys: ['Alt', 'M'] },
  { name: 'Full Screen', keys: ['Alt', 'F'] },
  { name: 'Settings', keys: ['Ctrl', ','] }
];

zoomShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Zoom`,
    keys: s.keys,
    category: 'zoom',
    platform: 'Zoom'
  });
});

// Trello (20 shortcuts)
const trelloShortcuts = [
  { name: 'Quick Open', keys: ['Q'] },
  { name: 'Search', keys: ['/'] },
  { name: 'New Card', keys: ['N'] },
  { name: 'Archive Card', keys: ['C'] },
  { name: 'Move Card', keys: ['M'] },
  { name: 'Copy Card', keys: ['Ctrl', 'C'] },
  { name: 'Paste Card', keys: ['Ctrl', 'V'] },
  { name: 'Edit Card Title', keys: ['T'] },
  { name: 'Add Comment', keys: ['Ctrl', 'Enter'] },
  { name: 'Add Due Date', keys: ['D'] },
  { name: 'Add Member', keys: ['M'] },
  { name: 'Add Label', keys: ['L'] },
  { name: 'Add Checklist', keys: ['C'] },
  { name: 'Add Attachment', keys: ['A'] },
  { name: 'Archive List', keys: ['Ctrl', 'Backspace'] },
  { name: 'Move List', keys: ['Ctrl', 'Shift', 'M'] },
  { name: 'Copy List', keys: ['Ctrl', 'Shift', 'C'] },
  { name: 'Subscribe', keys: ['S'] },
  { name: 'Shortcuts', keys: ['?'] },
  { name: 'Board Menu', keys: ['B'] }
];

trelloShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Trello`,
    keys: s.keys,
    category: 'trello',
    platform: 'Trello'
  });
});

// Asana (20 shortcuts)
const asanaShortcuts = [
  { name: 'Quick Add', keys: ['Q'] },
  { name: 'Search', keys: ['/'] },
  { name: 'Create Task', keys: ['T'] },
  { name: 'Create Project', keys: ['P'] },
  { name: 'Create Message', keys: ['M'] },
  { name: 'My Tasks', keys: ['H'] },
  { name: 'Inbox', keys: ['I'] },
  { name: 'Today', keys: ['T'] },
  { name: 'Upcoming', keys: ['U'] },
  { name: 'Later', keys: ['L'] },
  { name: 'Complete Task', keys: ['Space'] },
  { name: 'Assign Task', keys: ['A'] },
  { name: 'Add Due Date', keys: ['D'] },
  { name: 'Add Comment', keys: ['C'] },
  { name: 'Add Attachment', keys: ['V'] },
  { name: 'Add Subtask', keys: ['S'] },
  { name: 'Move Task', keys: ['M'] },
  { name: 'Duplicate Task', keys: ['Ctrl', 'D'] },
  { name: 'Delete Task', keys: ['Delete'] },
  { name: 'Shortcuts', keys: ['?'] }
];

asanaShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Asana`,
    keys: s.keys,
    category: 'asana',
    platform: 'Asana'
  });
});

// Jira (20 shortcuts)
const jiraShortcuts = [
  { name: 'Quick Search', keys: ['/'] },
  { name: 'Create Issue', keys: ['C'] },
  { name: 'Search Issues', keys: ['Ctrl', 'K'] },
  { name: 'Go to Issue', keys: ['G', 'I'] },
  { name: 'Go to Board', keys: ['G', 'B'] },
  { name: 'Go to Project', keys: ['G', 'P'] },
  { name: 'Go to Dashboard', keys: ['G', 'D'] },
  { name: 'Assign', keys: ['A'] },
  { name: 'Comment', keys: ['M'] },
  { name: 'Edit', keys: ['E'] },
  { name: 'Watch', keys: ['W'] },
  { name: 'Vote', keys: ['V'] },
  { name: 'Link', keys: ['L'] },
  { name: 'Clone', keys: ['Ctrl', 'K'] },
  { name: 'Move', keys: ['O'] },
  { name: 'Delete', keys: ['Delete'] },
  { name: 'Transition', keys: ['T'] },
  { name: 'Log Work', keys: ['L'] },
  { name: 'Attach', keys: ['A'] },
  { name: 'Shortcuts', keys: ['?'] }
];

jiraShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Jira`,
    keys: s.keys,
    category: 'jira',
    platform: 'Jira'
  });
});

// Confluence (20 shortcuts)
const confluenceShortcuts = [
  { name: 'Create Page', keys: ['C'] },
  { name: 'Search', keys: ['/'] },
  { name: 'Quick Nav', keys: ['G'] },
  { name: 'Edit', keys: ['E'] },
  { name: 'View', keys: ['V'] },
  { name: 'Preview', keys: ['P'] },
  { name: 'Save', keys: ['Ctrl', 'S'] },
  { name: 'Publish', keys: ['Ctrl', 'Enter'] },
  { name: 'Cancel', keys: ['Esc'] },
  { name: 'Bold', keys: ['Ctrl', 'B'] },
  { name: 'Italic', keys: ['Ctrl', 'I'] },
  { name: 'Underline', keys: ['Ctrl', 'U'] },
  { name: 'Insert Link', keys: ['Ctrl', 'K'] },
  { name: 'Insert Image', keys: ['Ctrl', 'Shift', 'I'] },
  { name: 'Insert Table', keys: ['Ctrl', 'Shift', 'T'] },
  { name: 'Undo', keys: ['Ctrl', 'Z'] },
  { name: 'Redo', keys: ['Ctrl', 'Y'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Shortcuts', keys: ['?'] }
];

confluenceShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Confluence`,
    keys: s.keys,
    category: 'confluence',
    platform: 'Confluence'
  });
});

// GitHub Desktop (20 shortcuts)
const githubdesktopShortcuts = [
  { name: 'New Repository', keys: ['Ctrl', 'N'] },
  { name: 'Add Repository', keys: ['Ctrl', 'O'] },
  { name: 'Clone Repository', keys: ['Ctrl', 'Shift', 'O'] },
  { name: 'Show Repository', keys: ['Ctrl', 'Shift', 'F'] },
  { name: 'Preferences', keys: ['Ctrl', ','] },
  { name: 'Commit', keys: ['Ctrl', 'Enter'] },
  { name: 'Push', keys: ['Ctrl', 'P'] },
  { name: 'Pull', keys: ['Ctrl', 'Shift', 'P'] },
  { name: 'Fetch', keys: ['Ctrl', 'Shift', 'F'] },
  { name: 'Create Branch', keys: ['Ctrl', 'Shift', 'N'] },
  { name: 'Delete Branch', keys: ['Ctrl', 'Shift', 'D'] },
  { name: 'Merge Branch', keys: ['Ctrl', 'Shift', 'M'] },
  { name: 'Show History', keys: ['Ctrl', 'H'] },
  { name: 'Show Changes', keys: ['Ctrl', 'Shift', 'C'] },
  { name: 'Show Repository List', keys: ['Ctrl', 'T'] },
  { name: 'Open in External Editor', keys: ['Ctrl', 'Shift', 'A'] },
  { name: 'Open in Terminal', keys: ['Ctrl', '`'] },
  { name: 'Open on GitHub', keys: ['Ctrl', 'Shift', 'G'] },
  { name: 'Quit', keys: ['Ctrl', 'Q'] },
  { name: 'Help', keys: ['F1'] }
];

githubdesktopShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in GitHub Desktop`,
    keys: s.keys,
    category: 'githubdesktop',
    platform: 'GitHub Desktop'
  });
});

// IntelliJ IDEA (20 shortcuts)
const intellijShortcuts = [
  { name: 'Quick Open', keys: ['Ctrl', 'Shift', 'N'] },
  { name: 'Search Everywhere', keys: ['Double Shift'] },
  { name: 'Go to Class', keys: ['Ctrl', 'N'] },
  { name: 'Go to File', keys: ['Ctrl', 'Shift', 'N'] },
  { name: 'Go to Symbol', keys: ['Ctrl', 'Alt', 'Shift', 'N'] },
  { name: 'Go to Line', keys: ['Ctrl', 'G'] },
  { name: 'Find', keys: ['Ctrl', 'F'] },
  { name: 'Replace', keys: ['Ctrl', 'R'] },
  { name: 'Find in Files', keys: ['Ctrl', 'Shift', 'F'] },
  { name: 'Replace in Files', keys: ['Ctrl', 'Shift', 'R'] },
  { name: 'Build Project', keys: ['Ctrl', 'F9'] },
  { name: 'Run', keys: ['Shift', 'F10'] },
  { name: 'Debug', keys: ['Shift', 'F9'] },
  { name: 'Stop', keys: ['Ctrl', 'F2'] },
  { name: 'Refactor', keys: ['Ctrl', 'Alt', 'Shift', 'T'] },
  { name: 'Rename', keys: ['Shift', 'F6'] },
  { name: 'Extract Method', keys: ['Ctrl', 'Alt', 'M'] },
  { name: 'Extract Variable', keys: ['Ctrl', 'Alt', 'V'] },
  { name: 'Format Code', keys: ['Ctrl', 'Alt', 'L'] },
  { name: 'Optimize Imports', keys: ['Ctrl', 'Alt', 'O'] }
];

intellijShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in IntelliJ IDEA`,
    keys: s.keys,
    category: 'intellij',
    platform: 'IntelliJ IDEA'
  });
});

// Eclipse (20 shortcuts)
const eclipseShortcuts = [
  { name: 'Quick Access', keys: ['Ctrl', '3'] },
  { name: 'Open Type', keys: ['Ctrl', 'Shift', 'T'] },
  { name: 'Open Resource', keys: ['Ctrl', 'Shift', 'R'] },
  { name: 'Go to Line', keys: ['Ctrl', 'L'] },
  { name: 'Find', keys: ['Ctrl', 'F'] },
  { name: 'Replace', keys: ['Ctrl', 'H'] },
  { name: 'Find/Replace', keys: ['Ctrl', 'F'] },
  { name: 'Build Project', keys: ['Ctrl', 'B'] },
  { name: 'Run', keys: ['Ctrl', 'F11'] },
  { name: 'Debug', keys: ['F11'] },
  { name: 'Stop', keys: ['Ctrl', 'F2'] },
  { name: 'Step Over', keys: ['F6'] },
  { name: 'Step Into', keys: ['F5'] },
  { name: 'Step Return', keys: ['F7'] },
  { name: 'Resume', keys: ['F8'] },
  { name: 'Refactor', keys: ['Alt', 'Shift', 'T'] },
  { name: 'Rename', keys: ['Alt', 'Shift', 'R'] },
  { name: 'Extract Method', keys: ['Alt', 'Shift', 'M'] },
  { name: 'Format', keys: ['Ctrl', 'Shift', 'F'] },
  { name: 'Organize Imports', keys: ['Ctrl', 'Shift', 'O'] }
];

eclipseShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Eclipse`,
    keys: s.keys,
    category: 'eclipse',
    platform: 'Eclipse'
  });
});

// Android Studio (20 shortcuts)
const androidstudioShortcuts = [
  { name: 'Quick Open', keys: ['Ctrl', 'Shift', 'N'] },
  { name: 'Search Everywhere', keys: ['Double Shift'] },
  { name: 'Go to Class', keys: ['Ctrl', 'N'] },
  { name: 'Go to File', keys: ['Ctrl', 'Shift', 'N'] },
  { name: 'Go to Symbol', keys: ['Ctrl', 'Alt', 'Shift', 'N'] },
  { name: 'Go to Line', keys: ['Ctrl', 'G'] },
  { name: 'Find', keys: ['Ctrl', 'F'] },
  { name: 'Replace', keys: ['Ctrl', 'R'] },
  { name: 'Find in Files', keys: ['Ctrl', 'Shift', 'F'] },
  { name: 'Build Project', keys: ['Ctrl', 'F9'] },
  { name: 'Run', keys: ['Shift', 'F10'] },
  { name: 'Debug', keys: ['Shift', 'F9'] },
  { name: 'Stop', keys: ['Ctrl', 'F2'] },
  { name: 'Refactor', keys: ['Ctrl', 'Alt', 'Shift', 'T'] },
  { name: 'Rename', keys: ['Shift', 'F6'] },
  { name: 'Extract Method', keys: ['Ctrl', 'Alt', 'M'] },
  { name: 'Extract Variable', keys: ['Ctrl', 'Alt', 'V'] },
  { name: 'Format Code', keys: ['Ctrl', 'Alt', 'L'] },
  { name: 'Optimize Imports', keys: ['Ctrl', 'Alt', 'O'] },
  { name: 'Sync Project', keys: ['Ctrl', 'Shift', 'O'] }
];

androidstudioShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Android Studio`,
    keys: s.keys,
    category: 'androidstudio',
    platform: 'Android Studio'
  });
});

// Xcode (20 shortcuts)
const xcodeShortcuts = [
  { name: 'New File', keys: ['⌘', 'N'] },
  { name: 'New Project', keys: ['⌘', 'Shift', 'N'] },
  { name: 'Open', keys: ['⌘', 'O'] },
  { name: 'Save', keys: ['⌘', 'S'] },
  { name: 'Save As', keys: ['⌘', 'Shift', 'S'] },
  { name: 'Close', keys: ['⌘', 'W'] },
  { name: 'Build', keys: ['⌘', 'B'] },
  { name: 'Run', keys: ['⌘', 'R'] },
  { name: 'Stop', keys: ['⌘', '.'] },
  { name: 'Clean Build', keys: ['⌘', 'Shift', 'K'] },
  { name: 'Find', keys: ['⌘', 'F'] },
  { name: 'Find and Replace', keys: ['⌘', 'Alt', 'F'] },
  { name: 'Find in Project', keys: ['⌘', 'Shift', 'F'] },
  { name: 'Go to Line', keys: ['⌘', 'L'] },
  { name: 'Jump to Definition', keys: ['⌘', 'Click'] },
  { name: 'Show Quick Help', keys: ['⌘', 'Alt', '/'] },
  { name: 'Show Navigator', keys: ['⌘', '1'] },
  { name: 'Show Debug Area', keys: ['⌘', 'Shift', 'Y'] },
  { name: 'Toggle Breakpoint', keys: ['⌘', '\\'] },
  { name: 'Step Over', keys: ['F6'] }
];

xcodeShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Xcode`,
    keys: s.keys,
    category: 'xcode',
    platform: 'Xcode'
  });
});

// Terminal (15 shortcuts)
const terminalShortcuts = [
  { name: 'New Tab', keys: ['Ctrl', 'Shift', 'T'] },
  { name: 'Close Tab', keys: ['Ctrl', 'Shift', 'W'] },
  { name: 'Next Tab', keys: ['Ctrl', 'PageDown'] },
  { name: 'Previous Tab', keys: ['Ctrl', 'PageUp'] },
  { name: 'Copy', keys: ['Ctrl', 'Shift', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'Shift', 'V'] },
  { name: 'Clear', keys: ['Ctrl', 'L'] },
  { name: 'Search', keys: ['Ctrl', 'Shift', 'F'] },
  { name: 'Scroll Up', keys: ['Shift', 'PageUp'] },
  { name: 'Scroll Down', keys: ['Shift', 'PageDown'] },
  { name: 'Zoom In', keys: ['Ctrl', '+'] },
  { name: 'Zoom Out', keys: ['Ctrl', '-'] },
  { name: 'Reset Zoom', keys: ['Ctrl', '0'] },
  { name: 'Close Window', keys: ['Ctrl', 'Shift', 'Q'] },
  { name: 'Preferences', keys: ['Ctrl', ','] }
];

terminalShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Terminal`,
    keys: s.keys,
    category: 'terminal',
    platform: 'Terminal'
  });
});

// PowerShell (15 shortcuts)
const powershellShortcuts = [
  { name: 'New Tab', keys: ['Ctrl', 'Shift', 'T'] },
  { name: 'Close Tab', keys: ['Ctrl', 'Shift', 'W'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Select All', keys: ['Ctrl', 'A'] },
  { name: 'Clear', keys: ['Ctrl', 'L'] },
  { name: 'Search', keys: ['Ctrl', 'F'] },
  { name: 'Find Next', keys: ['F3'] },
  { name: 'Find Previous', keys: ['Shift', 'F3'] },
  { name: 'Zoom In', keys: ['Ctrl', '+'] },
  { name: 'Zoom Out', keys: ['Ctrl', '-'] },
  { name: 'Reset Zoom', keys: ['Ctrl', '0'] },
  { name: 'Close Window', keys: ['Alt', 'F4'] },
  { name: 'Properties', keys: ['Alt', 'Enter'] },
  { name: 'Preferences', keys: ['Ctrl', ','] }
];

powershellShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in PowerShell`,
    keys: s.keys,
    category: 'powershell',
    platform: 'PowerShell'
  });
});

// Command Prompt (15 shortcuts)
const cmdShortcuts = [
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Select All', keys: ['Ctrl', 'A'] },
  { name: 'Mark', keys: ['Ctrl', 'M'] },
  { name: 'Scroll', keys: ['Ctrl', 'S'] },
  { name: 'Find', keys: ['Ctrl', 'F'] },
  { name: 'Properties', keys: ['Alt', 'Enter'] },
  { name: 'Close', keys: ['Alt', 'F4'] },
  { name: 'Full Screen', keys: ['Alt', 'Enter'] },
  { name: 'Clear Screen', keys: ['Ctrl', 'L'] },
  { name: 'History Up', keys: ['F7'] },
  { name: 'History Down', keys: ['F8'] },
  { name: 'Command History', keys: ['F9'] },
  { name: 'Copy Command', keys: ['F3'] },
  { name: 'Paste Command', keys: ['F4'] }
];

cmdShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Command Prompt`,
    keys: s.keys,
    category: 'cmd',
    platform: 'Command Prompt'
  });
});

// PuTTY (15 shortcuts)
const puttyShortcuts = [
  { name: 'New Session', keys: ['Ctrl', 'N'] },
  { name: 'Open Session', keys: ['Ctrl', 'O'] },
  { name: 'Save Session', keys: ['Ctrl', 'S'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Right Click'] },
  { name: 'Select All', keys: ['Ctrl', 'A'] },
  { name: 'Clear Scrollback', keys: ['Ctrl', 'Shift', 'Delete'] },
  { name: 'Reset Terminal', keys: ['Ctrl', 'R'] },
  { name: 'Full Screen', keys: ['Alt', 'Enter'] },
  { name: 'New Window', keys: ['Ctrl', 'N'] },
  { name: 'Duplicate Session', keys: ['Ctrl', 'D'] },
  { name: 'Close Window', keys: ['Alt', 'F4'] },
  { name: 'Settings', keys: ['Alt', 'Enter'] },
  { name: 'Event Log', keys: ['Ctrl', 'E'] },
  { name: 'About', keys: ['F1'] }
];

puttyShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in PuTTY`,
    keys: s.keys,
    category: 'putty',
    platform: 'PuTTY'
  });
});

// FileZilla (15 shortcuts)
const filezillaShortcuts = [
  { name: 'New Site', keys: ['Ctrl', 'N'] },
  { name: 'Connect', keys: ['Ctrl', 'S'] },
  { name: 'Disconnect', keys: ['Ctrl', 'D'] },
  { name: 'Quick Connect', keys: ['Ctrl', 'Q'] },
  { name: 'Upload', keys: ['Ctrl', 'U'] },
  { name: 'Download', keys: ['Ctrl', 'D'] },
  { name: 'Refresh', keys: ['F5'] },
  { name: 'Delete', keys: ['Delete'] },
  { name: 'Rename', keys: ['F2'] },
  { name: 'New Directory', keys: ['F7'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Cut', keys: ['Ctrl', 'X'] },
  { name: 'Select All', keys: ['Ctrl', 'A'] },
  { name: 'Settings', keys: ['Ctrl', ','] }
];

filezillaShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in FileZilla`,
    keys: s.keys,
    category: 'filezilla',
    platform: 'FileZilla'
  });
});

// WinRAR (15 shortcuts)
const winrarShortcuts = [
  { name: 'New Archive', keys: ['Ctrl', 'N'] },
  { name: 'Open Archive', keys: ['Ctrl', 'O'] },
  { name: 'Add Files', keys: ['Alt', 'A'] },
  { name: 'Extract', keys: ['Alt', 'E'] },
  { name: 'Test Archive', keys: ['Alt', 'T'] },
  { name: 'View File', keys: ['Alt', 'V'] },
  { name: 'Delete', keys: ['Delete'] },
  { name: 'Find', keys: ['Ctrl', 'F'] },
  { name: 'Select All', keys: ['Ctrl', 'A'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Cut', keys: ['Ctrl', 'X'] },
  { name: 'Rename', keys: ['F2'] },
  { name: 'Properties', keys: ['Alt', 'Enter'] },
  { name: 'Settings', keys: ['Ctrl', 'S'] }
];

winrarShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in WinRAR`,
    keys: s.keys,
    category: 'winrar',
    platform: 'WinRAR'
  });
});

// 7-Zip (15 shortcuts)
const sevenzipShortcuts = [
  { name: 'New Archive', keys: ['Ctrl', 'N'] },
  { name: 'Open Archive', keys: ['Ctrl', 'O'] },
  { name: 'Add Files', keys: ['Alt', 'A'] },
  { name: 'Extract', keys: ['Alt', 'E'] },
  { name: 'Test Archive', keys: ['Alt', 'T'] },
  { name: 'View File', keys: ['Alt', 'V'] },
  { name: 'Delete', keys: ['Delete'] },
  { name: 'Find', keys: ['Ctrl', 'F'] },
  { name: 'Select All', keys: ['Ctrl', 'A'] },
  { name: 'Copy', keys: ['Ctrl', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Cut', keys: ['Ctrl', 'X'] },
  { name: 'Rename', keys: ['F2'] },
  { name: 'Properties', keys: ['Alt', 'Enter'] },
  { name: 'Settings', keys: ['Ctrl', ','] }
];

sevenzipShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in 7-Zip`,
    keys: s.keys,
    category: '7zip',
    platform: '7-Zip'
  });
});

// VLC (20 shortcuts)
const vlcShortcuts = [
  { name: 'Open File', keys: ['Ctrl', 'O'] },
  { name: 'Open Network', keys: ['Ctrl', 'N'] },
  { name: 'Open Disc', keys: ['Ctrl', 'D'] },
  { name: 'Play/Pause', keys: ['Space'] },
  { name: 'Stop', keys: ['S'] },
  { name: 'Next', keys: ['N'] },
  { name: 'Previous', keys: ['P'] },
  { name: 'Faster', keys: ['+'] },
  { name: 'Slower', keys: ['-'] },
  { name: 'Volume Up', keys: ['Ctrl', '↑'] },
  { name: 'Volume Down', keys: ['Ctrl', '↓'] },
  { name: 'Mute', keys: ['M'] },
  { name: 'Full Screen', keys: ['F'] },
  { name: 'Snapshot', keys: ['S'] },
  { name: 'Record', keys: ['R'] },
  { name: 'Zoom In', keys: ['Ctrl', '+'] },
  { name: 'Zoom Out', keys: ['Ctrl', '-'] },
  { name: 'Reset Zoom', keys: ['Ctrl', '0'] },
  { name: 'Playlist', keys: ['Ctrl', 'L'] },
  { name: 'Preferences', keys: ['Ctrl', 'P'] }
];

vlcShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in VLC`,
    keys: s.keys,
    category: 'vlc',
    platform: 'VLC'
  });
});

// Spotify (20 shortcuts)
const spotifyShortcuts = [
  { name: 'Play/Pause', keys: ['Space'] },
  { name: 'Next Track', keys: ['Ctrl', '→'] },
  { name: 'Previous Track', keys: ['Ctrl', '←'] },
  { name: 'Volume Up', keys: ['Ctrl', '↑'] },
  { name: 'Volume Down', keys: ['Ctrl', '↓'] },
  { name: 'Mute', keys: ['Ctrl', 'Shift', '↓'] },
  { name: 'Shuffle', keys: ['Ctrl', 'S'] },
  { name: 'Repeat', keys: ['Ctrl', 'R'] },
  { name: 'Like', keys: ['Ctrl', 'L'] },
  { name: 'Search', keys: ['Ctrl', 'L'] },
  { name: 'New Playlist', keys: ['Ctrl', 'N'] },
  { name: 'Queue', keys: ['Ctrl', 'B'] },
  { name: 'Now Playing', keys: ['Ctrl', 'Alt', 'P'] },
  { name: 'Show Lyrics', keys: ['Ctrl', 'Shift', 'L'] },
  { name: 'Copy Link', keys: ['Ctrl', 'Shift', 'C'] },
  { name: 'Paste', keys: ['Ctrl', 'V'] },
  { name: 'Select All', keys: ['Ctrl', 'A'] },
  { name: 'Delete', keys: ['Delete'] },
  { name: 'Preferences', keys: ['Ctrl', ','] },
  { name: 'Quit', keys: ['Ctrl', 'Q'] }
];

spotifyShortcuts.forEach(s => {
  shortcuts.push({
    name: s.name,
    description: `${s.name} in Spotify`,
    keys: s.keys,
    category: 'spotify',
    platform: 'Spotify'
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

