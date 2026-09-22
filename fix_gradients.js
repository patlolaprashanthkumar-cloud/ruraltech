import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    const dirPath = path.join(dir, f);
    const isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir(path.join(process.cwd(), 'src'), (filePath) => {
  if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    
    content = content.replace(/bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20/g, 'bg-warm-white text-deep-teal py-20');
    content = content.replace(/py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white/g, 'py-20 bg-warm-white text-deep-teal');
    content = content.replace(/bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white/g, 'bg-warm-white border border-border-color rounded-2xl p-12 text-deep-teal');
    content = content.replace(/from-blue-600 to-blue-800/g, 'bg-warm-white');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated ${filePath}`);
    }
  }
});
