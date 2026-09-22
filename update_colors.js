import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const replacements = [
  // Pricing logic first (important to do before class names)
  { regex: /₹25,000/g, replacement: '₹15,000' },
  { regex: /Super Distributor/gi, replacement: 'Super Agent' },
  { regex: /₹50,000/g, replacement: '₹25,000' },
  // Wait, I should be careful not to replace ₹15,000 to ₹15,000 again if I run it twice.
  // The above regexes are safe if run once.

  // Colors
  // bg-blue-600 -> bg-deep-teal
  { regex: /bg-blue-600/g, replacement: 'bg-deep-teal' },
  { regex: /text-blue-600/g, replacement: 'text-deep-teal' },
  { regex: /border-blue-600/g, replacement: 'border-deep-teal' },
  { regex: /text-blue-100/g, replacement: 'text-secondary-text' },
  { regex: /bg-blue-50/g, replacement: 'bg-tech-bg' },
  { regex: /bg-blue-100/g, replacement: 'bg-light-green' },
  { regex: /text-blue-700/g, replacement: 'text-dark-teal' },
  { regex: /bg-blue-700/g, replacement: 'bg-dark-teal' },
  { regex: /hover:bg-blue-700/g, replacement: 'hover:bg-dark-teal' },
  { regex: /hover:text-blue-600/g, replacement: 'hover:text-primary-orange' },
  { regex: /bg-blue-50/g, replacement: 'bg-warm-white' },
  { regex: /hover:bg-blue-50/g, replacement: 'hover:bg-soft-cream' },
  
  // gray colors
  { regex: /bg-gray-50/g, replacement: 'bg-light-green' },
  { regex: /bg-gray-100/g, replacement: 'bg-warm-white' },
  { regex: /bg-gray-900/g, replacement: 'bg-deep-teal' },
  { regex: /text-gray-900/g, replacement: 'text-deep-teal' },
  { regex: /text-gray-600/g, replacement: 'text-secondary-text' },
  { regex: /text-gray-700/g, replacement: 'text-secondary-text' },
  { regex: /border-gray-200/g, replacement: 'border-border-color' },
  { regex: /border-gray-100/g, replacement: 'border-border-color' },
  { regex: /border-gray-300/g, replacement: 'border-border-color' },
  { regex: /hover:bg-gray-50/g, replacement: 'hover:bg-light-green' },
  { regex: /hover:bg-gray-200/g, replacement: 'hover:bg-border-color' },
  
  // other generic colors
  { regex: /text-green-500/g, replacement: 'text-rural-green' },
  { regex: /text-green-600/g, replacement: 'text-rural-green' },
  { regex: /bg-green-500/g, replacement: 'bg-rural-green' },
  { regex: /bg-green-600/g, replacement: 'bg-rural-green' },
  { regex: /hover:bg-green-600/g, replacement: 'hover:opacity-90' },
  
  { regex: /text-orange-600/g, replacement: 'text-primary-orange' },
];

walkDir(path.join(process.cwd(), 'src'), (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    for (const { regex, replacement } of replacements) {
      content = content.replace(regex, replacement);
    }
    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
