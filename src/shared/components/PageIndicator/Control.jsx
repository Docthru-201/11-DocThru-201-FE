import clsx from 'clsx';
import { Button } from '@/shared/components/Button';
import { control } from './Control.css.js';

export const Control = ({ variant, selected, children, onClick }) => {
  return (
    <Button
      type="button"
      variant="transparent"
      className={clsx(control.page, selected && control.selected)}
      aria-pressed={selected}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
