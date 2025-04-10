import React from 'react'

const contents = [
    {
        image: "/image/Equality.png",
        title: "ADVOCACY AND AWARENESS",
        description: "We advocate for inclusive policies and raise awareness about neurological differences, promoting acceptance and equal opportunities for all.",
        titleColor: "text-[#BF232E]",
        borderColor: "before:bg-[#BF232E]"
    },
    {
        image: "/image/Education.png",
        title: "EDUCATION AND EMPOWERMENT",
        description: "We provide resources, support, and skill-building programs to empower individuals with neurological differences to thrive independently.",
        titleColor: "text-[#6AA541]",
        borderColor: "before:bg-[#6AA541]"
    },
    {
        image: "/image/People Working Together.png",
        title: "COMMUNITY ENGAGEMENT",
        description: "Our goal is to build an inclusive community that celebrates neurodiversity, offers support, and promotes acceptance for individuals and their families.",
        titleColor: "text-[#2c7bbd]",
        borderColor: "before:bg-[#2c7bbd]"
    },
    {
        image: "/image/Innovation.png",
        title: "RESEARCH AND INNOVATION",
        description: "We support research to enhance understanding, develop effective interventions, and promote innovative approaches to improve the lives of individuals with neurological differences.",
        titleColor: "text-[#F9AE40]",
        borderColor: "before:bg-[#F9AE40]"
    }
]

function Operation() {
  return (
    <div className='max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-8'>
        <div className='text-center w-full mb-12 md:mb-20'>
            <h1 className='bg-[#2c7bbd] text-white inline-block p-2 px-6 rounded-full mb-6 text-sm md:text-lg font-semibold'>
                THEMATIC OPERATIONAL AREAS
            </h1>
            <p className='text-center font-semibold tracking-wide text-lg md:text-xl max-w-4xl mx-auto'>
                Through these focus areas, we ensure meaningful impact, fostering growth, independence, and a more inclusive society for all.
            </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
            {contents.map((content, index) => {
                const borderColor = content.titleColor.includes('[') 
                ? `before:bg-[${content.titleColor.split('[')[1].split(']')[0]}]`
                : content.titleColor.replace('text-', 'before:bg-');
                
                return (
                <div 
                    key={index} 
                    className={`group flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative
                    before:absolute before:left-0 before:top-1 before:bottom-1 before:w-0 before:rounded-l-lg
                    hover:before:w-0.5 ${borderColor}
                    transform hover:-translate-y-2 hover:scale-[1.02] transition-transform duration-300 ease-in-out`}
                >
                    <div className='mb-6 w-12 h-12 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300'>
                    <img 
                        src={content.image} 
                        alt={content.title} 
                        className='w-full h-full object-contain'
                    />
                    </div>
                    <h2 className={`text-xl font-bold mb-4 ${content.titleColor}`}>
                    {content.title}
                    </h2>
                    <p className='text-gray-700 text-sm group-hover:text-gray-900 transition-colors duration-300'>
                    {content.description}
                    </p>
                </div>
                )
            })}
        </div>
    </div>
  )
}

export default Operation