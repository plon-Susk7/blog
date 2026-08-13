export const SITE_TITLE = 'Priyash Shah';
export const SITE_DESCRIPTION = 'Notes on AI, research, and side projects.';

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/blog/', label: 'Blog' },
  { href: '/tags/', label: 'Tags' },
  { href: '/about/', label: 'About' },
];

export const ALL_TAGS = ['Research', 'Project', 'Learning', 'Hobby'] as const;

export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
