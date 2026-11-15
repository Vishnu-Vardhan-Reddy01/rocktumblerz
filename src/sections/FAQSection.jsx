import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ChevronDown, Search, BookOpen } from 'lucide-react';

function FadeIn({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const categories = [
  { id: 'all', label: 'All Questions' },
  { id: 'philosophy', label: 'Our Philosophy & Approach' },
  { id: 'readiness', label: 'School Readiness & Development' },
  { id: 'child', label: 'Understanding Every Child' },
  { id: 'safety', label: 'Freedom, Structure & Safety' },
];

const faqs = [
  {
    id: 1,
    category: 'philosophy',
    q: 'Why has Rock Tumblerz deliberately chosen a different approach to preschool education?',
    a: `We believe the earliest years of childhood deserve an educational approach designed specifically around how young children learn. Children develop through movement, exploration, observation, repetition and interaction. Their understanding of the world begins taking shape through experiences long before they enter formal schooling.

At Rock Tumblerz, we chose to build a preschool around these natural ways of learning rather than expecting young children to adapt too early to conventional classroom routines.

Our intention is not to accelerate education, but to nurture the developmental foundations that support future learning. We believe children should be prepared for the next stage of learning without being rushed into it.`,
  },
  {
    id: 2,
    category: 'philosophy',
    q: 'Why does Rock Tumblerz say “Movement is the Curriculum”?',
    a: `In early childhood, movement is much more than physical activity. It is an important way children experience their surroundings, discover their capabilities and develop foundations for learning.

As children climb, crawl, balance and explore, they develop strength, coordination, body awareness and greater control over their movements. These repeated experiences also support their developing ability to coordinate the body, respond to challenges and explore with growing independence.

As children become more physically capable, their opportunities to explore expand. Movement creates situations where they can investigate, make decisions, experiment and attempt unfamiliar challenges.

But movement does not work in isolation. Relationships, communication, imagination and purposeful interaction are equally important parts of a child's overall development.

At Rock Tumblerz, movement is central to our educational approach — from the open playscape to our imaginative Learning Worlds, where children encounter new ideas through active experiences, supported by purposeful teaching and educator guidance.

Movement is not something we add between lessons. It is woven into how children experience learning itself.`,
  },
  {
    id: 3,
    category: 'philosophy',
    q: 'Why does Rock Tumblerz focus specifically on children aged 1–4?',
    a: `The earliest years are a particularly important period of physical, cognitive, language and social-emotional development.

During this stage, children are developing control over their bodies, discovering language, building relationships, learning to navigate emotions and becoming increasingly independent. Much of their understanding emerges through direct experiences — moving, exploring, observing, experimenting and interacting with the world around them.

At Rock Tumblerz, we have deliberately chosen to focus on this stage of childhood. Our open playscape, movement-led learning experiences and educator-guided approach are designed around the developmental characteristics and learning needs of young children.

By nurturing these emerging abilities during the early years, we aim to help lay meaningful foundations for future learning, relationships and growing independence. Because the foundations for learning are built long before formal schooling begins.`,
    reference: 'American Academy of Pediatrics — The Power of Play',
  },
  {
    id: 4,
    category: 'philosophy',
    q: "How does the Rock Tumblerz approach reflect the principles of India's National Education Policy (NEP 2020)?",
    a: `India's National Education Policy recognises the importance of play-based, activity-based and discovery-oriented learning in early childhood education.

It emphasises holistic development, recognising the importance of physical, cognitive, language, social and emotional development.

At Rock Tumblerz, our educational approach reflects relevant principles of NEP 2020 and India's broader emphasis on early childhood care and education. Through movement-led exploration, imaginative learning experiences, purposeful teaching and attention to each child's individual development, we aim to create meaningful learning opportunities appropriate to the early years.`,
    reference: 'National Education Policy 2020 — Government of India',
  },
  {
    id: 5,
    category: 'philosophy',
    q: 'Is Rock Tumblerz a preschool or just a play area?',
    a: `Rock Tumblerz is a preschool built around a thoughtfully designed educational programme.

Our open playscape is the learning environment itself, where movement, exploration, imaginative Learning Worlds and purposeful teaching come together under the guidance of trained educators.

Each morning brings together opportunities for independent exploration, short educator-guided learning experiences, familiar routines and thoughtful observation of children's development.

Children experience the freedom and joy of play within a preschool programme intentionally designed to nurture important developmental foundations.`,
  },
  {
    id: 6,
    category: 'philosophy',
    q: 'If children have the freedom to explore, where does purposeful teaching happen?',
    a: `At Rock Tumblerz, freedom and purposeful teaching work together.

Children have opportunities to explore independently, while educators introduce short, age-appropriate learning experiences throughout the morning.

Our educators do more than supervise play. They observe, interact, encourage communication, introduce new experiences and guide children as they explore and learn.

Meaningful teaching does not always require children to remain seated in a classroom.`,
  },
  {
    id: 7,
    category: 'philosophy',
    q: 'Why are imaginative Learning Worlds an important part of the Rock Tumblerz curriculum?',
    a: `Young children are naturally drawn to stories, imagination and discovering new things.

At Rock Tumblerz, our imaginative Learning Worlds allow children to encounter new ideas through active experiences rather than simply listening to explanations.

Movement is woven into these experiences, creating opportunities for children to explore, interact, investigate and make connections as they discover unfamiliar concepts and ideas.

Through thoughtful educator guidance, these experiences encourage curiosity, language, imagination and a growing understanding of the world around them.

Learning is not limited to what children are told. It grows through what they experience and come to understand.`,
  },
  {
    id: 8,
    category: 'readiness',
    q: "Isn't learning to sit in a classroom the best way to prepare a child for school?",
    a: `Learning to sit, listen and participate in classroom activities is important, but school readiness involves much more.

Young children are developing physical strength, balance and body control alongside attention, communication, emotional regulation, social understanding and independence.

Physical development is one part of the wider foundation that helps children participate in different activities, including seated learning. But meaningful participation in a classroom also depends on understanding instructions, communicating needs, engaging with others and gradually developing the ability to concentrate.

These foundations develop through movement, play, supportive relationships, meaningful interactions and age-appropriate learning experiences.

At Rock Tumblerz, we nurture these interconnected areas through movement, exploration, purposeful teaching and familiar routines, creating opportunities for children to gradually participate in more focused learning experiences.

We believe preparing children for school begins with developing the foundations for learning, not simply introducing school routines earlier.`,
    reference: 'American Academy of Pediatrics — The Power of Play',
  },
  {
    id: 9,
    category: 'readiness',
    q: 'If children reach developmental milestones at different times, should they all be expected to meet the same classroom expectations?',
    a: `Children of the same age may be at different stages of physical, language, cognitive, social and emotional development.

One child may communicate confidently but need more time to develop concentration. Another may be physically independent but still need support with social interaction or emotional regulation.

We do not expect every child to demonstrate identical abilities at the same time. Children can participate in shared experiences while receiving different levels of encouragement, guidance and time according to their developmental needs.

At Rock Tumblerz, our educators observe children's emerging abilities and offer developmentally appropriate learning experiences that respect individual differences.

We believe educational expectations should respect a child's developmental readiness.`,
  },
  {
    id: 10,
    category: 'child',
    q: 'What if my child prefers observing rather than participating?',
    a: `Observation is also an important part of how young children learn.

Some children are eager to participate immediately, while others prefer to watch, become familiar with their surroundings and understand an activity before joining in.

At Rock Tumblerz, we respect these individual differences. Our educators offer reassurance and gentle encouragement, allowing children to participate in ways that reflect their comfort, interests and emerging confidence.

We believe confidence grows through supported experiences, not pressure to participate.`,
  },
  {
    id: 11,
    category: 'child',
    q: 'How does Rock Tumblerz accommodate children of different ages, abilities and temperaments?',
    a: `Children develop at different rates, and chronological age alone does not determine their interests, abilities or readiness for particular experiences.

At Rock Tumblerz, children may engage with the same environment in very different ways. An experience that feels familiar to one child may present a new challenge for another.

Our educators pay attention to these differences, offering encouragement, guidance and age-appropriate challenges while allowing children time to explore and become comfortable at their own pace.

Where a child may need additional support or adaptations, we work with families to understand their individual needs and discuss what can appropriately be provided within our setting.

Our aim is to respect each child's individuality while creating meaningful opportunities for exploration, participation and growth.`,
  },
  {
    id: 12,
    category: 'child',
    q: 'How do educators understand and recognise each child\'s individual progress?',
    a: `Children demonstrate learning in many ways, not all of which can be captured through conventional academic tasks.

At Rock Tumblerz, our educators observe how children explore, communicate, interact, respond to challenges and engage with new experiences.

Rather than judging children through a single activity or isolated observation, we consider their experiences and emerging abilities over time. These insights help educators understand individual interests, recognise developing strengths and offer more thoughtful guidance.

Through our Child Understanding Report, we share these observations with parents, offering a meaningful picture of their child's interests, growing confidence, participation, emerging abilities and progress over time.

Because understanding how a child is growing matters as much as recognising what they are learning.`,
    reference: 'NCERT — National Curriculum Framework for the Foundational Stage, Assessment and Observation',
    note: 'The Child Understanding Report is an educational observation and progress-reporting tool, not a clinical diagnosis or standardised developmental assessment.',
  },
  {
    id: 13,
    category: 'safety',
    q: 'How does Rock Tumblerz balance freedom to explore with routines, boundaries and safety?',
    a: `At Rock Tumblerz, freedom to explore is supported by clear boundaries, familiar routines and active educator supervision.

Children are encouraged to move, experiment and attempt new challenges, while educators guide them in using equipment appropriately for their age, abilities and comfort.

Our educators remain attentive during movement and exploration, offering assistance when needed, guiding the appropriate use of equipment and helping children navigate shared spaces.

Through everyday experiences, children also gradually learn to take turns, respect others, use shared spaces responsibly and respond to simple safety boundaries.

We believe children need both the freedom to discover and the security of thoughtful guidance.`,
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState([1]); // First FAQ open by default

  const toggleFaq = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#F5F0E7] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-10 w-96 h-96 rounded-full bg-[#E9A18A]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#F2D58A]/15 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header from PDF */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <FadeIn>
            <span className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#B9A17D] mb-3">
              Common Questions
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#3D2F1F] leading-tight tracking-tight">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mt-4 text-base sm:text-lg text-[#6B5B3E] leading-relaxed">
              Explore our philosophy, school readiness principles, observation methodology, and safety standards in detail.
            </p>
          </FadeIn>
        </div>

        {/* Search Bar & Category Filters */}
        <FadeIn delay={0.15} className="mb-10 space-y-4">
          <div className="relative max-w-md mx-auto">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#8B7355]" />
            <input
              type="text"
              placeholder="Search questions (e.g. readiness, safety, NEP, teaching)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-full bg-white border border-[#D8C9AD] text-sm text-[#3D2F1F] placeholder:text-[#B9A17D] focus:outline-none focus:ring-2 focus:ring-[#3D2F1F] shadow-xs"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-[#3D2F1F] text-white shadow-sm'
                    : 'bg-white/80 text-[#6B5B3E] border border-[#D8C9AD]/80 hover:bg-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Accordion FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, i) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <FadeIn key={faq.id} delay={0.03 * (i % 8)}>
                  <div
                    className={`rounded-2xl transition-all duration-200 border ${
                      isOpen
                        ? 'bg-white border-[#3D2F1F] shadow-sm'
                        : 'bg-white/70 border-[#D8C9AD]/80 hover:bg-white hover:border-[#D8C9AD]'
                    }`}
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-display font-bold text-sm text-[#B9A17D] shrink-0 mt-0.5">
                          {faq.id < 10 ? `0${faq.id}` : faq.id}.
                        </span>
                        <h3 className="font-display font-bold text-base sm:text-lg text-[#3D2F1F] leading-snug">
                          {faq.q}
                        </h3>
                      </div>
                      <span
                        className={`p-1.5 rounded-full bg-[#F5F0E7] text-[#3D2F1F] transition-transform duration-200 shrink-0 ${
                          isOpen ? 'rotate-180 bg-[#3D2F1F] text-white' : ''
                        }`}
                      >
                        <ChevronDown size={16} />
                      </span>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          <div className="px-5 pb-6 sm:px-6 sm:pb-7 pt-1 border-t border-[#D8C9AD]/30 text-sm sm:text-base text-[#6B5B3E] leading-relaxed whitespace-pre-line">
                            {faq.a}

                            {faq.reference && (
                              <div className="mt-4 p-3 rounded-xl bg-[#F5F0E7] border border-[#D8C9AD] text-xs font-medium text-[#3D2F1F] flex items-center gap-2">
                                <BookOpen size={14} className="text-[#8B7355] shrink-0" />
                                <span>
                                  <strong>Research / Educational Reference: </strong>
                                  <em className="text-[#8B7355]">{faq.reference}</em>
                                </span>
                              </div>
                            )}

                            {faq.note && (
                              <p className="mt-3 text-xs italic text-[#8B7355]">
                                <strong>Note: </strong>{faq.note}
                              </p>
                            )}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </FadeIn>
              );
            })
          ) : (
            <div className="p-10 text-center bg-white rounded-2xl border border-[#D8C9AD]">
              <p className="text-[#6B5B3E] text-sm">No questions match your search query.</p>
              <button
                onClick={() => { setSearchQuery(''); setActiveCategory('all'); }}
                className="mt-3 text-xs font-semibold text-[#3D2F1F] underline"
              >
                Clear search and view all
              </button>
            </div>
          )}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center text-xs sm:text-sm text-[#8B7355]">
          Have a specific question about your child's stage? We'd love to speak with you.{' '}
          <a
            href="mailto:hello@rocktumblerz.com?subject=Parent Question"
            className="text-[#3D2F1F] font-semibold underline hover:text-[#9A7B4F]"
          >
            Email our team
          </a>
        </div>

      </div>
    </section>
  );
}
