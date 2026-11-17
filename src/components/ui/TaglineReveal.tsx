import { useEffect, useRef } from 'react';

interface TaglineRevealProps {
  text: string;
}

export default function TaglineReveal({ text }: TaglineRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const words = text.split(' ');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const spans = Array.from(container.querySelectorAll<HTMLSpanElement>('.tagline-word'));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      spans.forEach((span) => span.classList.add('is-active'));
      return;
    }

    const triggerLine = window.innerHeight * 0.7;
    const onScroll = () => {
      spans.forEach((span) => {
        if (span.classList.contains('is-active')) return;
        const top = span.getBoundingClientRect().top;
        if (top < triggerLine) span.classList.add('is-active');
      });
    };

    let frame = 0;
    const throttled = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        frame = 0;
        onScroll();
      });
    };

    onScroll();
    window.addEventListener('scroll', throttled, { passive: true });
    window.addEventListener('resize', throttled);
    return () => {
      window.removeEventListener('scroll', throttled);
      window.removeEventListener('resize', throttled);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [text]);

  return (
    <section className="section-padding" aria-label="Propósito">
      <div className="container-custom">
        <p
          ref={containerRef}
          className="text-3xl md:text-4xl lg:text-5xl font-semibold mx-auto"
          style={{ maxWidth: '680px' }}
        >
          {words.map((word, index) => (
            <span key={`${word}-${index}`}>
              <span className="tagline-word">{word}</span>
              {index < words.length - 1 ? ' ' : ''}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
