'use client';
import React from 'react';
import Navbar from '@/components/Navbar2';
import Footer from '@/components/Footer';
import Aries from '@/lib/Aries.png';
import Taurus from '@/lib/Taurus.png';
import Gemini from '@/lib/Gemini.png';
import Cancer from '@/lib/Cancer.png';
import Leo from '@/lib/Leo.png';
import Virgo from '@/lib/Virgo.png';
import Libra from '@/lib/Libra.png';
import Scorpio from '@/lib/Scorpio.png';
import Sagittarius from '@/lib/Sagittarius.png';
import Capricorn from '@/lib/Capricorn.png';
import Aquarius from '@/lib/Aquarius.png';
import Pisces from '@/lib/Pisces.png';


const zodiacData = [
    {
        name: 'Aries',
        dateRange: 'March 21 - April 19',
        image: Aries,
        description: '2025 will be a transformative year for Aries, marked by bold decisions and remarkable achievements. Your natural leadership skills will shine as you take charge of challenges with confidence and resilience. Expect periods of intense activity balanced by moments of reflection.',
        love: 'Your love life will be vibrant and fulfilling. For those in relationships, deeper emotional understanding will strengthen bonds. Singles may encounter a passionate connection that could evolve into something meaningful. Trust your instincts, but be mindful of impulsiveness in matters of the heart.',
        career: 'The professional landscape will bring major breakthroughs. Opportunities to take on leadership roles will arise, and your efforts will be recognized by peers and superiors. Consider investing time in learning new skills that will amplify your career growth.',
        health: 'With high energy levels, it’s essential to avoid overexertion. Maintain a healthy exercise routine and prioritize mental wellness through mindfulness or meditation. Regular check-ups will help you stay on track.',
    },
    {
        name: 'Taurus',
        dateRange: 'April 20 - May 20',
        image: Taurus,
        description: 'Stability and growth define 2025 for Taurus. You’ll feel a strong urge to create secure foundations in your personal and professional life. Your patience and practicality will lead to significant accomplishments.',
        love: 'Communication and honesty will be crucial in relationships. Those in partnerships may find 2025 ideal for making long-term commitments, such as moving in together or marriage. Singles might connect with someone who shares their values and aspirations.',
        career: 'This year, focus on building a solid career path. Consistent effort will pay off, especially in fields requiring meticulous planning. Financial growth is likely, but avoid impulsive investments.',
        health: 'Mental well-being will be a top priority. Incorporate activities that bring peace, like yoga or journaling. Pay attention to diet and avoid stress-related health issues by maintaining a work-life balance.',
    },
    {
        name: 'Gemini',
        dateRange: 'May 21 - June 20',
        image: Gemini,
        description: 'Intellectual growth and social connections will dominate 2025 for Gemini. Your natural curiosity will lead you to explore new hobbies, ideas, and relationships. Flexibility will be your superpower.',
        love: 'Exciting changes are on the horizon. Singles may find themselves drawn to charismatic individuals, while those in relationships will enjoy a renewed spark. Communication will play a pivotal role in resolving conflicts.',
        career: 'Creative ventures will thrive this year. Collaborations will open doors to new opportunities, and networking will play a key role in career advancements. Stay open to learning and adapting to changing circumstances.',
        health: 'Focus on maintaining a balanced diet and regular exercise. Include activities like dance or sports to keep things fun. Mental clarity can be achieved through puzzles, reading, or meditation.',
    },
    {
        name: 'Cancer',
        dateRange: 'June 21 - July 22',
        image: Cancer,
        description: 'Emotional depth and nurturing relationships will be central themes for Cancer in 2025. You’ll find yourself reconnecting with loved ones and building stronger support systems.',
        love: 'A year of emotional fulfillment awaits. Singles may meet someone who feels like home, while couples will enjoy harmony and mutual understanding. Family will also play an important role in your love life.',
        career: 'Teamwork and collaborations will be the focus. You may take on a mentorship role or start a project that brings people together. Financial stability will improve if you stick to long-term planning.',
        health: 'Focus on holistic wellness. Pay attention to your emotional health by surrounding yourself with supportive people. Consider activities like swimming or yoga for both mental and physical well-being.',
    },
    {
        name: 'Leo',
        dateRange: 'July 23 - August 22',
        image: Leo,
        description: '2025 will bring recognition and opportunities to Leo. This is your year to shine in both personal and professional domains. Confidence and creativity will lead you to new heights.',
        love: 'Romantic adventures await. Singles may encounter a whirlwind romance, while couples will find joy in celebrating milestones together. Be open to expressing your vulnerabilities.',
        career: 'Your charisma will attract exciting opportunities. Leadership roles will come naturally, and your ideas will gain traction. Financial growth is likely through innovative projects.',
        health: 'Focus on heart health with regular cardio and a balanced diet. Incorporate mindfulness practices to manage stress and maintain emotional balance.',
    },
    {
        name: 'Virgo',
        dateRange: 'August 23 - September 22',
        image: Virgo,
        description: 'A year of meticulous planning and execution awaits Virgo in 2025. Your analytical nature will help you navigate complex situations and achieve your goals.',
        love: 'Practicality in love will lead to meaningful relationships. Singles might meet someone through shared interests, while couples will strengthen their bonds by focusing on shared goals.',
        career: 'Attention to detail will set you apart. This year, you’ll excel in projects that require organization and precision. Financially, it’s a good year for saving and smart investments.',
        health: 'Avoid overworking yourself. Include relaxation techniques like deep breathing or nature walks to maintain balance. Digestive health should also be a priority.',
    },
    {
        name: 'Libra',
        dateRange: 'September 23 - October 22',
        image: Libra,
        description: '2025 will be about striking balance and fostering connections for Libra. Focus on harmonizing relationships and creating stability.',
        love: 'Romantic partnerships will deepen through mutual respect and compromise. Singles may meet someone with a balanced and charming personality.',
        career: 'Collaboration will lead to success. Seek partnerships that align with your goals and values. Financially, focus on balancing savings and expenditures.',
        health: 'Incorporate calming activities like meditation to maintain inner harmony. Focus on maintaining a healthy posture and avoid stress-related ailments.',
    },
    {
        name: 'Scorpio',
        dateRange: 'October 23 - November 21',
        image: Scorpio,
        description: 'Scorpio’s transformative journey continues in 2025. Embrace your inner strength and determination to achieve profound personal and professional growth.',
        love: 'Intense connections will define your love life. Singles might meet someone who changes their perspective on relationships, while couples will undergo emotional renewal.',
        career: 'Trust your instincts and take calculated risks. This is a great year to pursue ambitious goals and explore new territories in your field.',
        health: 'Pay attention to mental health by practicing mindfulness. Physical fitness will benefit from activities like martial arts or high-intensity training.',
    },
    {
        name: 'Sagittarius',
        dateRange: 'November 22 - December 21',
        image: Sagittarius,
        description: 'Adventure and learning will be central themes for Sagittarius in 2025. Expand your horizons through travel and knowledge.',
        love: 'New relationships may blossom during your adventures. Existing partnerships will grow stronger with shared experiences and open communication.',
        career: 'Focus on projects that allow you to explore new ideas and territories. Financial gains are likely through entrepreneurial ventures.',
        health: 'Stay active and adventurous, but don’t forget to rest. Pay attention to joint health, especially during outdoor activities.',
    },
    {
        name: 'Capricorn',
        dateRange: 'December 22 - January 19',
        image: Capricorn,
        description: '2025 is a year of steady progress and achievement for Capricorn. Focus on building a strong foundation for future success.',
        love: 'Relationships will thrive with mutual trust and shared goals. Singles may meet someone reliable and grounded.',
        career: 'Your discipline and hard work will lead to recognition. This is a good year to take on leadership roles and invest in long-term projects.',
        health: 'Prioritize spine and joint health by incorporating strength training into your routine. Balance work with adequate relaxation.',
    },
    {
        name: 'Aquarius',
        dateRange: 'January 20 - February 18',
        image: Aquarius,
        description: 'Aquarius will find 2025 to be a year of innovation and community building. Your creative ideas will inspire others and bring positive change.',
        love: 'Unconventional relationships might intrigue you this year. Focus on building connections that allow for individuality and growth.',
        career: 'Your innovative approach will lead to breakthroughs. Networking and collaborative projects will open up exciting opportunities.',
        health: 'Stay hydrated and focus on maintaining a balanced diet. Activities like cycling or group fitness classes will keep you energized.',
    },
    {
        name: 'Pisces',
        dateRange: 'February 19 - March 20',
        image: Pisces,
        description: 'Spiritual growth and creative exploration will be central to Pisces in 2025. Trust your intuition to guide you through the year.',
        love: 'Romantic relationships will deepen with emotional connection. Singles may find a soulful partner who aligns with their values.',
        career: 'Creative projects will flourish, especially those that involve artistic expression or empathy-driven initiatives. Financially, tread cautiously and avoid unnecessary risks.',
        health: 'Mental clarity will come through meditation and creative expression. Focus on foot health and ensure proper footwear during activities.',
    },
];
  

function HomePage() {
return (
    <div className="bg-gray-200 min-h-screen">
        <Navbar />
        <header className="bg-black opacity-70 text-white text-center py-10 mt-16">
            <h1 className="text-4xl font-bold">AstroSphere 2025 Horoscopes</h1>
            <p className="mt-4 text-lg">Discover what the stars have in store for you this year.</p>
        </header>
        <main className="container mx-auto py-10 px-4">
            {zodiacData.map((sign) => (
                <section
                    key={sign.name}
                    className="bg-white rounded-lg shadow-lg mb-10 overflow-hidden"
                >
                    <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/2 p-8">
                            <img
                                src={sign.image.src}
                                alt={sign.name}
                                className="w-full h-64 object-contain shadow-md rounded-lg"
                            />
                        </div>
                        <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                            <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
                                {sign.name}
                            </h2>
                            <p className="text-center text-gray-600 mb-4">{sign.dateRange}</p>
                            <p className="text-gray-700 mb-6">{sign.description}</p>
                        </div>
                    </div>
                    <div className="p-8">
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-xl font-semibold mb-2 text-purple-700">Career</h3>
                            <p className="text-gray-700 mb-4">{sign.career}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md mb-6">
                            <h3 className="text-xl font-semibold mb-2 text-purple-700">Health</h3>
                            <p className="text-gray-700">{sign.health}</p>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-md ">
                            <h3 className="text-xl font-semibold mb-2 text-purple-700">Love</h3>
                            <p className="text-gray-700 mb-4">{sign.love}</p>
                        </div>
                    </div>
                </section>
            ))}
        </main>
        <Footer />
    </div>
);
}

export default HomePage;
