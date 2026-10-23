import { useEffect } from 'react';
import { attachHeroDepth, attachShowcaseDepth } from '../lib/scroll3d.js';

export function useHeroDepth(ref) {
  useEffect(() => attachHeroDepth(ref.current), [ref]);
}

export function useShowcaseDepth(ref) {
  useEffect(() => attachShowcaseDepth(ref.current), [ref]);
}
