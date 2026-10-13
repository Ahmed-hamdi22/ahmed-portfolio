const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');
const root = path.resolve(__dirname, '..');
function load(relative) {
  const context = {exports: {}, URL};
  vm.runInNewContext(ts.transpileModule(fs.readFileSync(path.join(root,relative),'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS}}).outputText, context);
  return context.exports;
}
const data = load('lib/data.ts');
const i18n = load('lib/i18n.ts');
const {getProjectLinks} = load('lib/project-links.ts');

test('all project link combinations have a valid primary destination', () => {
  assert.equal(getProjectLinks({}).primary, undefined);
  assert.equal(getProjectLinks({demo:'javascript:alert(1)'}).primary, undefined);
  assert.equal(getProjectLinks({github:'https://github.com/example/repo'}).primary, 'https://github.com/example/repo');
  const both = getProjectLinks({demo:'https://example.com/live',github:'https://github.com/example/repo'});
  assert.equal(both.primary, both.live); assert.ok(both.github);
  assert.equal(getProjectLinks({demo:'https://example.com/live'}).github, undefined);
});
test('Arabic translations cover the UI and preserve technical names', () => {
  assert.deepEqual(Object.keys(i18n.english).sort(), Object.keys(i18n.arabic).sort());
  assert.equal(i18n.arabicProjectSummaries.length, data.projects.length);
  assert.equal(i18n.arabicExperienceSummaries.length, data.experience.length);
  assert.equal(i18n.arabicCertificationDescriptions.length, data.certifications.length);
  assert.ok(Object.values(i18n.arabic).every(value => typeof value === 'string' && value.trim()));
  assert.equal(i18n.isolateLatin('استخدم React وNext.js').replace(/[\u2066\u2069]/g,''), 'استخدم React وNext.js');
});
test('CV dates and Flower Shop scope match the approved content', () => {
  assert.equal(data.certifications[0].period,'Dec 2023 – Jun 2024');
  assert.equal(data.certifications[1].period,'Jan – Jun 2026');
  assert.equal(data.experience[0].period,'Jul – Aug 2026');
  assert.equal(data.experience[1].period,'Mar – Aug 2026');
  assert.equal(data.experience[2].period,'Nov 2024 – Jun 2025');
  const flower = data.projects.find(project => project.title.startsWith('Flower Shop'));
  assert.equal(flower.summary,'Frontend development of a multilingual storefront and admin dashboard with Stripe checkout and sales analytics.');
  assert.equal(flower.summary,flower.description); assert.equal(flower.type,'Frontend Project');
});
test('all project images, technology icons and the CV ship locally', () => {
  for(const project of data.projects) for(const image of project.images) assert.ok(fs.existsSync(path.join(root,'public',image)), image);
  const {technologies} = load('lib/technologies.ts');
  assert.equal(new Set(technologies.map(([name])=>name)).size, technologies.length);
  assert.equal(technologies.some(([name])=>name==='GraphQL'), false);
  for(const [name,slug] of technologies) assert.ok(fs.readFileSync(path.join(root,'public/icons',`tech-${slug}.svg`),'utf8').includes('<svg'),name);
  for(const name of ['Sass CSS','Bootstrap','jQuery','C++','HTML','CSS','Jira','Scrum','Figma']) assert.ok(technologies.some(([label])=>label===name),name);
  assert.ok(fs.existsSync(path.join(root,'public/cv.pdf')));
});
