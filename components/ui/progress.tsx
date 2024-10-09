// components/ui/progress.tsx
"use client";

import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

type ProgressProps = {
  value: number; // Percentage (0-100)
};

export const Progress: React.FC<ProgressProps> = ({ value }) => {
  return (
    <LinearProgress variant="determinate" value={value} />
  );
};
