"use client";
import data from '@/data/user.json';
import Image from 'next/image';
import { Mail, Phone, Github, Linkedin, Send, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function ProfilePage() {
  const { profile, theme, contacts } = data;
  const userImage = profile.profileImage || "/default-image.jpg";

  const contactList = [
    { type: 'email', value: contacts.email, icon: <Mail size={20} />, label: "E-mail" },
    { type: 'phone', value: contacts.phone, icon: <Phone size={20} />, label: "Telefone" },
    { type: 'telegram', value: contacts.telegram, icon: <Send size={20} />, label: "Telegram" },
  ].filter(item => item.value && item.value.trim() !== "");

  return (
    <main 
      className="min-h-screen w-full flex flex-col items-center p-6 relative"
      style={{ backgroundColor: theme.pageBackground, color: theme.pageText }}
    >
      <Link 
        href="/" 
        className="absolute top-6 left-6 p-2 rounded-full backdrop-blur-md border hover:opacity-80 transition-all z-10"
        style={{ 
          backgroundColor: theme.buttonBackground, 
          color: theme.buttonText,
          borderColor: theme.cardBackground 
        }}
      >
        <ArrowLeft size={20} />
      </Link>

      <section className="flex flex-col items-center mt-16 mb-12 text-center">
        <div className="relative w-28 h-28 mb-4">
          <Image 
            src={userImage} 
            alt="Profile"
            fill
            className="rounded-full object-cover border-4"
            style={{ borderColor: theme.cardBackground }}
            sizes="112px"
          />
        </div>
        <h1 className="text-xl font-bold">Informações de Contato</h1>
        <p className="opacity-60 text-sm">Fale diretamente com {profile.nickname}</p>
      </section>

      <div 
        className="w-full max-w-md rounded-3xl p-6 border shadow-lg space-y-6"
        style={{ 
          backgroundColor: theme.cardBackground, 
          color: theme.cardText,
          borderColor: 'rgba(255,255,255,0.05)'
        }}
      >
        {contactList.map((c, i) => (
          <div key={i} className="flex items-center gap-4 border-b border-white/10 pb-4 last:border-0 last:pb-0">
            <span className="opacity-70">{c.icon}</span>
            <div className="overflow-hidden">
              <p className="text-xs opacity-50 uppercase font-bold">{c.label}</p>
              <p className="font-medium truncate">{c.value}</p>
            </div>
          </div>
        ))}

        <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10 mt-4">
          {contacts.github && (
            <a 
              href={`https://${contacts.github}`} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center gap-2 p-3 rounded-xl transition-colors hover:opacity-80"
              style={{ backgroundColor: theme.buttonBackground, color: theme.buttonText }}
            >
              <Github size={18} /> <span className="text-sm font-bold">GitHub</span>
            </a>
          )}
          
          {contacts.linkedin && (
            <a 
              href={`https://${contacts.linkedin}`} 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center gap-2 p-3 rounded-xl transition-colors hover:opacity-80"
              style={{ backgroundColor: theme.buttonBackground, color: theme.buttonText }}
            >
              <Linkedin size={18} /> <span className="text-sm font-bold">LinkedIn</span>
            </a>
          )}
        </div>
      </div>
    </main>
  );
}