import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { useSettings } from '@/providers';
// KeenIcon using forwardRef to pass the ref and spread props
export const KeenIcon = forwardRef(({
  icon,
  style,
  className = '',
  ...props
}, ref) => {
  const {
    settings
  } = useSettings();
  if (!style) {
    style = settings.keeniconsStyle;
  }

  // Spread props and apply the ref to the <i> element
  return <i ref={ref} {...props} className={clsx(`ki-${style}`, `ki-${icon}`, className)} />;
});