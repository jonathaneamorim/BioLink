import { Profile } from '@/components/Profile';
import data from '@/data/user.json';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { ReturnButton } from '@/components/ReturnButton';

export default async function ShowCasePage({ params }: { params: Promise<{ id: string }> }) {
  const { showCases, theme } = data;
  const { id } = await params;
  const showCase = showCases.find(sc => Number(sc.id) === Number(id));

  return (
    <main 
      className="min-h-screen flex flex-col items-center p-6 relative transition-colors duration-300"
      style={{ backgroundColor: theme.pageBackground, color: theme.pageText }}>

      <ReturnButton/>
      
      <section className="w-full max-w-md mt-12">
         <Profile />
        
        <div className='text-center mb-8'>
          <h1 className="text-3xl font-bold mb-4">{showCase?.showCaseName}</h1>
          <p className="text-lg opacity-80">{showCase?.showCaseDescription}</p>
        </div>

        <div>
          {showCase?.showCaseItems.length && (
            <div className="flex flex-col gap-4">
              {showCase.showCaseItems.map((item, index) => (
                <Link key={index} href={item.link}>
                  <div 
                    className="p-4 border rounded flex justify-between items-center group gap-4" 
                    style={{ backgroundColor: theme.cardBackground, color: theme.cardText, borderColor: 'rgba(255,255,255,0.05)' }}>
                      <div className="relative w-[30%] h-[70px]">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>

                    <div>
                      <h3 className="text-xl font-semibold">{item.name}</h3>
                      <p className="opacity-80">{item.description}</p>
                    </div>

                    <div>
                      <ArrowRight size={18} className="opacity-50 group-hover:opacity-100 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}