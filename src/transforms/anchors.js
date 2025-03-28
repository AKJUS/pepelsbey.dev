import slugify from '@sindresorhus/slugify';

export default function(window) {
	const content = window.document.getElementById('article-content');

	if (!content) return;

	const headings = content.querySelectorAll('h2, h3, h4, h5, h6');

	for (const heading of headings) {
		const text = heading.textContent.trim()
		const id = slugify(text, {
			decamelize: false
		}).toLowerCase();

		heading.setAttribute('id', id);
	}
}
