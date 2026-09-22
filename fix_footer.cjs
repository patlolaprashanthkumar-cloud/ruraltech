const fs = require('fs');

let content = fs.readFileSync('c:\\Users\\yadla\\ruraltech\\src\\components\\Footer.tsx', 'utf8');

content = content.replace(/bg-deep-teal/g, 'bg-dark-teal');
content = content.replace(/text-gray-400/g, 'text-light-green');
content = content.replace(/text-blue-400/g, 'text-white');
content = content.replace(/hover:text-blue-400/g, 'hover:text-primary-orange');
content = content.replace(/border-gray-800/g, 'border-deep-teal');

fs.writeFileSync('c:\\Users\\yadla\\ruraltech\\src\\components\\Footer.tsx', content, 'utf8');
console.log('Done!');
