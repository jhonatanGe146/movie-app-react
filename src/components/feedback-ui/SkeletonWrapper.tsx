import { Skeleton } from '@mui/material';
import type { SkeletonProps } from '@mui/material';
import type { ReactElement } from 'react';

interface Props extends Omit<SkeletonProps, 'variant'> {
  children: ReactElement;
  variant?: SkeletonProps['variant'];
  fullWidth?: boolean;
  flexGrow?: boolean;
  loading: boolean;
}

const SkeletonWrapper = ({ children, variant = 'rounded', fullWidth = false, flexGrow = false, loading, width, height = 32, sx, ...rest }: Props) => {
  if (loading) {
    const resolvedWidth = fullWidth ? '100%' : width;
    const resolvedSx = flexGrow ? { flexGrow: 1, ...sx } : sx;
    const resolvedHeight = variant === 'text' ? undefined : height;
    return <Skeleton variant={variant} width={resolvedWidth} height={resolvedHeight} sx={resolvedSx} {...rest} />;
  }
  return children;
};

export default SkeletonWrapper;
