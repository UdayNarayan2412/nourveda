import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeUp } from './Animations';
import '../styles/testimonials.css';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Vanya Malhotra",
    text: "Got my hands on their Anmol Walnuts recently and I was shocked to see the size they were actually jumbo and the taste was actually very different from others. Must say superb quality!",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    id: 2,
    name: "Rahul Sharma",
    text: "The Kashmiri Saffron is absolutely authentic. Just a few strands give such a rich color and aroma to my dishes. Highly recommended for anyone looking for genuine spices.",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    id: 3,
    name: "Priya Kapoor",
    text: "I've been buying dry fruits from various places, but NourVeda's quality is unmatched. The cashews are so crunchy and fresh. Will definitely order again.",
    image: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    id: 4,
    name: "Amit Patel",
    text: "Ordered the gift box for Diwali and my family loved it. The packaging is premium and the products inside are top-notch. Great value for money.",
    image: "https://randomuser.me/api/portraits/men/86.jpg"
  },
  {
    id: 5,
    name: "Sneha Reddy",
    text: "Finally found a place that sells organic turmeric that actually smells like turmeric. The quality speaks for itself. Fast delivery too!",
    image: "https://randomuser.me/api/portraits/women/22.jpg"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const { name, text, image } = TESTIMONIALS[currentIndex];

  const handleDragEnd = (event, info) => {
    if (info.offset.x < -50) {
      nextTestimonial();
    } else if (info.offset.x > 50) {
      prevTestimonial();
    }
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <FadeUp>
          <h2 className="section-title">Client Testimonials</h2>
        </FadeUp>
        
        <div className="testimonial-carousel">
          <button className="nav-btn prev" onClick={prevTestimonial} aria-label="Previous Testimonial">
            <ChevronLeft size={24} />
          </button>

          <div className="carousel-track-container">
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentIndex}
                className="testimonial-card"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                whileTap={{ cursor: "grabbing" }}
              >
                <div className="testimonial-image">
                  <img src={image} alt={name} />
                </div>
                <div className="testimonial-content">
                  <Quote size={40} className="quote-icon" />
                  <p className="testimonial-text">{text}</p>
                  <h4 className="testimonial-author">{name}</h4>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <button className="nav-btn next" onClick={nextTestimonial} aria-label="Next Testimonial">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="carousel-indicators">
          {TESTIMONIALS.map((_, index) => (
            <span 
              key={index} 
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
