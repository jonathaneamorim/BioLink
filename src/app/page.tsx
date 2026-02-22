"use client";
import { useState } from 'react';
import Link from 'next/link';

import data from '@/data/user.json';

import { ArrowRight, Share2, Check, Globe } from 'lucide-react';
import { iconRepository } from './icons_repository';
import { Profile } from '@/components/Profile';

export default function HomePage() {
  const { links, theme, showCases } = data;
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Erro ao copiar", err);
    }
  };

  return (
    <main 
      className="min-h-screen flex flex-col items-center p-6 relative transition-colors duration-300"
      style={{ backgroundColor: theme.pageBackground, color: theme.pageText }}
    >
      <section className="w-full max-w-md mt-12">
        <Profile />

        {showCases && showCases.length > 0 && (
          <div className='w-full d-flex'>
            {showCases.map((showCase) => (
              showCase.showShowCase && (
                <Link key={showCase.id} href={`/showcase/${showCase.id}`}>
                  <div 
                    className="mb-6 p-4 rounded-2xl shadow-lg border border-white/5 transition-all w-full hover:scale-[1.02] active:scale-95 flex items-center justify-between gap-2" 
                    style={{ backgroundColor: theme.cardBackground, color: theme.cardText }}>
                     <div>
                        <h2 className="text-xl font-bold mb-2">{showCase.showCaseName}</h2>
                        <p className="text-sm opacity-80">{showCase.showCaseDescription}</p>
                     </div>
                     <div>
                        <ArrowRight size={18} className="opacity-50 group-hover:opacity-100 transition-all" />
                     </div>
                  </div>
                </Link>
              )
            ))}
          </div>
        )}

        <div 
          className="w-full rounded-[32px] p-6 shadow-xl border border-white/5 transition-all"
          style={{ backgroundColor: theme.cardBackground, color: theme.cardText }}
        >
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                className="flex items-center justify-between p-4 rounded-2xl transition-all group hover:scale-[1.02] active:scale-95 shadow-sm"
                style={{ backgroundColor: theme.buttonBackground, color: theme.buttonText }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-6 h-6">
                    {iconRepository[link.icon] || <Globe size={20} />}
                  </div>
                  <span className="font-bold">{link.label}</span>
                </div>
                <ArrowRight size={18} className="opacity-50 group-hover:opacity-100 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <button
        onClick={handleShare}
        className="fixed bottom-6 right-6 p-4 rounded-full shadow-2xl active:scale-90 transition-all flex items-center gap-2 z-50 font-bold"
        style={{ backgroundColor: theme.buttonBackground, color: theme.buttonText }}
      >
        {copied ? (
          <>
            <Check size={20} />
            <span className="text-xs pr-1">Copiado!</span>
          </>
        ) : (
          <Share2 size={20} />
        )}
      </button>
    </main>
  );
}