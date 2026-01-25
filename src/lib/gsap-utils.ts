'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// ============================================
// GSAP Scroll Trigger Hook
// ============================================

interface UseScrollTriggerOptions {
  trigger?: string | Element;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  pin?: boolean;
  markers?: boolean;
  onEnter?: () => void;
  onLeave?: () => void;
  onEnterBack?: () => void;
  onLeaveBack?: () => void;
}

export function useScrollTrigger(options: UseScrollTriggerOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const trigger = ScrollTrigger.create({
      trigger: options.trigger || elementRef.current,
      start: options.start || 'top 80%',
      end: options.end || 'bottom 20%',
      scrub: options.scrub || false,
      pin: options.pin || false,
      markers: options.markers || false,
      onEnter: options.onEnter,
      onLeave: options.onLeave,
      onEnterBack: options.onEnterBack,
      onLeaveBack: options.onLeaveBack,
    });

    return () => {
      trigger.kill();
    };
  }, [options]);

  return elementRef;
}

// ============================================
// Parallax Effect Hook
// ============================================

interface UseParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
}

export function useParallax({ speed = 0.5, direction = 'up' }: UseParallaxOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const yOffset = direction === 'up' ? -100 * speed : 100 * speed;

    gsap.fromTo(
      element,
      { y: 0 },
      {
        y: yOffset,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [speed, direction]);

  return elementRef;
}

// ============================================
// Text Split Animation Hook
// ============================================

export function useSplitTextAnimation() {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;
    const text = element.textContent || '';
    const chars = text.split('');

    element.innerHTML = chars
      .map((char) => `<span class="inline-block">${char === ' ' ? '&nbsp;' : char}</span>`)
      .join('');

    const charElements = element.querySelectorAll('span');

    gsap.fromTo(
      charElements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.02,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, []);

  return elementRef;
}

// ============================================
// Smooth Reveal Animation
// ============================================

interface UseSmoothRevealOptions {
  duration?: number;
  delay?: number;
  y?: number;
  opacity?: number;
}

export function useSmoothReveal(options: UseSmoothRevealOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const { duration = 1, delay = 0, y = 50, opacity = 0 } = options;

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    gsap.fromTo(
      element,
      { opacity, y },
      {
        opacity: 1,
        y: 0,
        duration,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [duration, delay, y, opacity]);

  return elementRef;
}

// ============================================
// Horizontal Scroll Section
// ============================================

export function useHorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !contentRef.current) return;

    const container = containerRef.current;
    const content = contentRef.current;

    const scrollWidth = content.scrollWidth - container.offsetWidth;

    gsap.to(content, {
      x: -scrollWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: container,
        start: 'top top',
        end: () => `+=${scrollWidth}`,
        scrub: 1,
        pin: true,
        anticipatePin: 1,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  return { containerRef, contentRef };
}

// ============================================
// Cursor Follow Effect
// ============================================

export function useCursorFollow() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    const cursor = cursorRef.current;
    const pos = { x: 0, y: 0 };
    const mouse = { x: 0, y: 0 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    gsap.ticker.add(() => {
      const dt = 1 - Math.pow(0.9, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      gsap.set(cursor, { x: pos.x, y: pos.y });
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return cursorRef;
}

// ============================================
// Refresh ScrollTrigger utility
// ============================================

export function refreshScrollTrigger() {
  ScrollTrigger.refresh();
}
