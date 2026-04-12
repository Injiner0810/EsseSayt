import fs from 'fs';
import path from 'path';

const files = [
  './src/app/page.tsx',
  './src/app/upload/page.tsx',
  './src/app/gallery/page.tsx'
];

const replacements = [
  { from: /bg-white\/80/g, to: 'bg-slate-900/80' },
  { from: /bg-white/g, to: 'bg-slate-800/50' },
  { from: /text-slate-900/g, to: 'text-slate-50' },
  { from: /text-slate-800/g, to: 'text-slate-100' },
  { from: /text-slate-700/g, to: 'text-slate-200' },
  { from: /text-slate-600/g, to: 'text-slate-300' },
  { from: /text-slate-500/g, to: 'text-slate-400' },
  { from: /border-slate-200/g, to: 'border-slate-700/50' },
  { from: /border-slate-300/g, to: 'border-slate-600/50' },
  { from: /hover:bg-slate-50/g, to: 'hover:bg-slate-700/50' },
  { from: /hover:border-slate-300/g, to: 'hover:border-slate-600/50' },
  { from: /bg-slate-50/g, to: 'bg-slate-900/50' },
  { from: /text-slate-400/g, to: 'text-slate-500' }
];

for (const file of files) {
  const filePath = path.join(process.cwd(), file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    for (const rule of replacements) {
      content = content.replace(rule.from, rule.to);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Processed', file);
  }
}
