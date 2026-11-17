import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { ProjectImage } from '../../types';

interface LightboxProps {
  images: ProjectImage[];
  index: number;
  onClose: () => void;
  onChange: (index: number) => void;
}

export default function Lightbox({ images, index, onClose, onChange }: LightboxProps) {
  const total = images.length;

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onChange((index + 1) % total);
      if (event.key === 'ArrowLeft') onChange((index - 1 + total) % total);
    };

    document.addEventListener('keydown', handleKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [index, total, onClose, onChange]);

  const current = images[index];
  if (!current) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.92)' }}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Cerrar"
        className="absolute top-4 right-4 p-2 rounded-full text-white transition-colors hover:bg-white/15"
      >
        <X className="w-6 h-6" />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onChange((index - 1 + total) % total);
        }}
        aria-label="Captura anterior"
        className="absolute left-2 sm:left-6 p-2 rounded-full text-white transition-colors hover:bg-white/15"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          onChange((index + 1) % total);
        }}
        aria-label="Captura siguiente"
        className="absolute right-2 sm:right-6 p-2 rounded-full text-white transition-colors hover:bg-white/15"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <figure className="flex flex-col items-center gap-3" onClick={(event) => event.stopPropagation()}>
        <img
          src={current.src}
          alt={current.alt}
          className="max-h-[80vh] max-w-full rounded-lg shadow-2xl"
        />
        <figcaption className="text-sm text-white/80 text-center">
          {current.alt} — {index + 1} de {total}
        </figcaption>
      </figure>
    </div>,
    document.body
  );
}
