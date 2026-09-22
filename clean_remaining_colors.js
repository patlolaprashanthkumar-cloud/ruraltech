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
  { regex: /bg-blue-900/g, replacement: 'bg-dark-teal' },
  { regex: /bg-blue-800/g, replacement: 'bg-dark-teal' },
  { regex: /text-blue-200/g, replacement: 'text-light-green' },
  { regex: /border-blue-700/g, replacement: 'border-deep-teal' },
  { regex: /hover:bg-blue-800/g, replacement: 'hover:bg-dark-teal' },
  { regex: /border-blue-200/g, replacement: 'border-border-color' },
  { regex: /border-blue-100/g, replacement: 'border-border-color' },
  { regex: /hover:border-blue-500/g, replacement: 'hover:border-primary-orange' },
  
  { regex: /bg-gray-200/g, replacement: 'bg-border-color' },
  { regex: /text-gray-400/g, replacement: 'text-secondary-text' },
  { regex: /text-gray-500/g, replacement: 'text-secondary-text' },
  { regex: /text-gray-800/g, replacement: 'text-secondary-text' },
  
  { regex: /bg-green-50/g, replacement: 'bg-light-green' },
  { regex: /bg-green-100/g, replacement: 'bg-light-green' },
  { regex: /border-green-200/g, replacement: 'border-border-color' },
  
  { regex: /bg-orange-50/g, replacement: 'bg-soft-cream' },
  { regex: /bg-orange-100/g, replacement: 'bg-soft-cream' },
  { regex: /border-orange-200/g, replacement: 'border-border-color' },
  
  { regex: /bg-teal-50/g, replacement: 'bg-tech-bg' },
  { regex: /text-teal-600/g, replacement: 'text-deep-teal' },
  { regex: /border-teal-200/g, replacement: 'border-border-color' },
  
  { regex: /bg-indigo-50/g, replacement: 'bg-light-green' },
  { regex: /text-indigo-600/g, replacement: 'text-deep-teal' },
  { regex: /border-indigo-200/g, replacement: 'border-border-color' },
  
  { regex: /bg-purple-50/g, replacement: 'bg-soft-cream' },
  { regex: /text-purple-600/g, replacement: 'text-primary-orange' },
  { regex: /border-purple-200/g, replacement: 'border-border-color' },
  
  { regex: /bg-yellow-50/g, replacement: 'bg-soft-cream' },
  { regex: /text-yellow-600/g, replacement: 'text-primary-orange' },
  { regex: /border-yellow-200/g, replacement: 'border-border-color' },
  
  { regex: /bg-red-50/g, replacement: 'bg-soft-cream' },
  { regex: /text-red-600/g, replacement: 'text-primary-orange' },
  { regex: /border-red-200/g, replacement: 'border-border-color' },
  
  { regex: /text-red-700/g, replacement: 'text-deep-teal' },
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
