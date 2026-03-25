import Link from 'next/link';
import clsx from 'clsx';
import { ChevronRightIcon } from '@heroicons/react/20/solid';

type Breadcrumb = {
  label: string;
  href: string;
  active?: boolean;
};

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 block">
      <ol className="flex items-center text-sm md:text-base">
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.href}
            aria-current={breadcrumb.active ? 'page' : undefined}
            className="flex items-center"
          >
            <Link
              href={breadcrumb.href}
              className={clsx('hover:text-blue-600', {
                'text-gray-500': !breadcrumb.active,
                'text-gray-900 pointer-events-none': breadcrumb.active,
              })}
            >
              {breadcrumb.label}
            </Link>

            {index < breadcrumbs.length - 1 ? (
              <ChevronRightIcon className="mx-3 h-5 w-5 text-gray-400" />
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}