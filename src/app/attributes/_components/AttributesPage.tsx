import React from 'react';
// import Head from 'next/head';

const MemorialPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      {/* <Head>
        <title>In Loving Memory - Phebean Durodola Adewunmi Aderinboye</title>
        <meta name="description" content="Tribute to our beloved mother, grandmother and great grandmother" />
      </Head> */}

      {/* Hero Section */}
      <header className="relative h-96 overflow-hidden bg-gradient-to-br from-[#2c7bbd] to-[#6a3093]">
        {/* Animated floating circles */}
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-1/4 w-32 h-32 rounded-full bg-[#2c7bbd] opacity-20 animate-float1"></div>
            <div className="absolute top-40 right-1/3 w-24 h-24 rounded-full bg-white opacity-15 animate-float2"></div>
            <div className="absolute bottom-20 left-1/3 w-40 h-40 rounded-full bg-[#6a3093] opacity-15 animate-float3"></div>
            <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full bg-[#2c7bbd] opacity-20 animate-float4"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-serif drop-shadow-lg">
            <span className="inline-block animate-softBounce">Phebean Durodola Adewunmi Aderinboye</span>
            </h1>
            <p className="text-xl text-white opacity-90 mb-6">1930 - 1995</p>
            
            {/* Animated scroll indicator */}
            <div className="mt-6 animate-bounce">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
            </div>
        </div>
    </header>

      {/* Main Content */}
      <main className=" py-12 px-10">
        {/* Timeline Section */}
        <section className="mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 font-serif">A Life Well Lived</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 w-1 h-full bg-blue-200 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-8">
              <TimelineItem 
                year="1930" 
                title="Birth" 
                content="Born in Nigeria, a blessing to her family" 
                position="left"
              />
              <TimelineItem 
                year="1950s" 
                title="Marriage & Family" 
                content="Started her own family, becoming a devoted wife and mother" 
                position="right"
              />
              <TimelineItem 
                year="1960s" 
                title="Career & Service" 
                content="Worked as a skilled seamstress and educator, touching many lives" 
                position="left"
              />
              <TimelineItem 
                year="1995" 
                title="Passing" 
                content="Joined the saints triumphant on January 9, 1995" 
                position="right"
              />
            </div>
          </div>
        </section>

        {/* Tributes Section */}
        <section className="mb-16 max-w-screen-xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 font-serif">Family Tributes</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
                {/* Tribute 1 */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
                <div className="flex items-center mb-4">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    </div>
                    <h3 className="text-xl font-semibold">A Mother&apos;s Legacy</h3>
                </div>
                <p className="text-gray-700 mb-4 italic">
                &ldquo;Thirty years ago yes I mean thirty years. Indeed it was on the 9th of January 1995 that our mother Phebean Aderinboye 
                lost the battle against illness and joined the Saints Triumphant. Her loss was very painful because all her life she laboured on 
                her children and fostered others in the knowledge industry. Death did not afford her the opportunity to reap her blue chip investment 
                on her seeds. However, today her legacies remain; not written in the combustible pages of exercise books but in the annals of history and 
                the minds of the erstwhile pupils that passed through her tutelage plus we, her noble family. She was a beauty personified a humble and caring woman of valour. 
                She never betrayed the heavy marital challenges that conspired against her well being but served the Lord in the beauty of His holiness. There indeed was a Phebian, 
                aya Aderinboye the iconic organist, whence cometh another? Soun reeeee ooooo iye wa nudo aya nwon nipele. Adieu.&rdquo;
                </p>
                <div className="text-right text-sm text-gray-500">— Otunba Oladele Olusegun, Brother</div>
                </div>

                {/* Tribute 2 */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-purple-500">
                <div className="flex items-center mb-4">
                    <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    </div>
                    <h3 className="text-xl font-semibold">A Special Breed</h3>
                </div>
                <p className="text-gray-700 mb-4 italic">
                    &ldquo;30 years ago today, a special breed of a mother, grandmother and great grandmother departed this sinful world leaving a remarkable legacy behind! Maami, 
                    Phebean Durodola Adewunmi Aderinboye, thank you and thank God for the gifts you gave to each and every one of your children. The gift of life, love, compassion 
                    and selflessness! We can not thank you enough therefore we, your children, grandchildren and great grandchildren humbly ask the Heavens to thank you on our behalf! Didun,
                    didun, ni iranti awon olododo. Sleep on mom, a mother like no other! From all your heirs on this side of the clouds!&rdquo;
                </p>
                <div className="text-right text-sm text-gray-500">— Dr. Omolara Aderinboye</div>
                </div>

                {/* Tribute 3 */}
                <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-500 md:col-span-2">
                <div className="flex items-center mb-4">
                    <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    </div>
                    <h3 className="text-xl font-semibold">A Beacon of Love</h3>
                </div>
                <p className="text-gray-700 mb-4 italic">
                &ldquo;A Tribute to My Beloved Mother. Thirty years ago today, my heart broke. My mother, Phebean Durodola, left this world, 
                but her love and legacy continue to shine brightly. She was more than just a mother; she was a beacon of love, compassion, and strength. 
                Her nurturing spirit extended beyond her own children, embracing everyone with warmth and kindness. She had a unique ability to make everyone 
                feel seen and valued. As a skilled seamstress, she created beautiful garments with her own hands, a testament to her creativity and talent. Her entrepreneurial 
                spirit led her to pursue her passions, inspiring us to follow our own dreams. Though she is physically gone, her memory lives on in our hearts. Her love, her laughter, 
                and her wisdom continue to guide us. We cherish the memories we shared, from simple moments to grand adventures. Today, I remember her with a grateful heart and a tearful smile.&rdquo;
                </p>
                <div className="text-right text-sm text-gray-500">— Yinka Dada, Daughter. Amb.</div>
                </div>
            </div>
        </section>

        {/* Photo Gallery */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800 font-serif">Memory Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400">Photo {item}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legacy Section */}
        <section className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 font-serif">Her Enduring Legacy</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <LegacyItem 
              icon="👨‍👩‍👧‍👦" 
              title="Family" 
              content="Mother of 5, grandmother of 12, great-grandmother of 8" 
            />
            <LegacyItem 
              icon="🧵" 
              title="Seamstress" 
              content="Created beautiful garments with her own hands" 
            />
            <LegacyItem 
              icon="📚" 
              title="Educator" 
              content="Mentored countless children in her community" 
            />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="mb-4">&ldquo;Her love, her laughter, and her wisdom continue to guide us&rdquo;</p>
          <p className="text-sm text-gray-400">In loving memory • 1930 - 1995</p>
        </div>
      </footer>
    </div>
  );
};

// Timeline Component
const TimelineItem = ({ year, title, content, position }: { year: string; title: string; content: string; position: 'left' | 'right' }) => {
  return (
    <div className={`relative flex ${position === 'left' ? 'justify-start' : 'justify-end'}`}>
      <div className={`w-full md:w-5/12 p-6 bg-white rounded-lg shadow-md ${position === 'left' ? 'md:mr-auto' : 'md:ml-auto'}`}>
        <div className="absolute top-5 -ml-14 md:-ml-14 text-lg font-bold text-blue-600">{year}</div>
        <h3 className="text-xl font-bold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
};

// Legacy Component
const LegacyItem = ({ icon, title, content }: { icon: string; title: string; content: string }) => {
  return (
    <div className="text-center">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default MemorialPage;