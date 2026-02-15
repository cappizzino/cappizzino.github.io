import React, { CSSProperties } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

type ButtonProps = {
  size?: 'sm' | 'lg' | 'small' | 'medium' | 'large' | null;
  outline?: boolean;
  variant?: 'primary' | 'secondary' | 'danger' | 'warning' | 'success' | 'info' | 'link' | string;
  block?: boolean;
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  link: string;
  label: string;

  // Optional controls
  newTab?: boolean;     // default: true for files/external
  download?: boolean;   // adds download attribute for files
};

function isExternal(link: string) {
  return /^https?:\/\//i.test(link) || /^mailto:/i.test(link) || /^tel:/i.test(link);
}

function isFile(link: string) {
  return /\.(pdf|zip|png|jpg|jpeg|webp|svg)$/i.test(link);
}

export default function Button({
  size = null,
  outline = false,
  variant = 'primary',
  block = false,
  disabled = false,
  className,
  style,
  link,
  label,
  newTab,
  download,
}: ButtonProps) {
  const sizeMap: Record<string, 'sm' | 'lg' | null> = {
    sm: 'sm',
    small: 'sm',
    lg: 'lg',
    large: 'lg',
    medium: null,
  };

  const buttonSize = size ? sizeMap[size] : null;

  const classes = clsx(
    'button',
    buttonSize && `button--${buttonSize}`,
    outline && 'button--outline',
    variant && `button--${variant}`,
    block && 'button--block',
    disabled && 'disabled',
    className
  );

  if (disabled) {
    return (
      <span className={classes} style={style} aria-disabled="true">
        {label}
      </span>
    );
  }

  const external = isExternal(link);
  const file = isFile(link);

  // For local files like "/files/CV.pdf", ensure baseUrl is applied correctly.
  const resolvedHref = external ? link : useBaseUrl(link);

  // Use <a> for files and external links (bypass SPA router)
  if (external || file) {
    const openInNewTab = newTab ?? true;

    return (
      <a
        className={classes}
        style={style}
        href={resolvedHref}
        target={openInNewTab ? '_blank' : undefined}
        rel={openInNewTab ? 'noopener noreferrer' : undefined}
        download={download ? '' : undefined}
        role="button"
      >
        {label}
      </a>
    );
  }

  // Internal route -> use router Link
  return (
    <Link className={classes} style={style} to={link} role="button">
      {label}
    </Link>
  );
}
