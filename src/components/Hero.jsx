import React from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight, Sparkles } from 'lucide-react';
import heroImg from '../assets/hero/hero_primary.jpg';
import altImg from '../assets/hero/hero_secondary.jpg';

export default function Hero() {
  return (
    <section 
      id="hero" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: '120px', 
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Gradient Blobs */}
      <div 
        style={{
          position: 'absolute',
          top: '10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(232, 59, 77, 0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(99, 58, 135, 0.06) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid-2" style={{ alignItems: 'center' }}>
          {/* Hero Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: 'left' }}
          >
            <div 
              className="glass-panel"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: 'var(--radius-full)',
                marginBottom: '20px',
                border: '1px solid rgba(232, 59, 77, 0.25)',
                background: 'rgba(232, 59, 77, 0.05)'
              }}
            >
              <Sparkles size={16} color="var(--color-primary)" />
              <span 
                style={{ 
                  fontSize: '0.825rem', 
                  fontWeight: '700', 
                  color: 'var(--color-primary)',
                  fontFamily: 'var(--font-heading)',
                  letterSpacing: '0.5px'
                }}
              >
                CLB GUITAR ĐẠI HỌC TÔN ĐỨC THẮNG
              </span>
            </div>

            <h1 style={{ marginBottom: '20px' }}>
              Nơi kết nối đam mê <br />
              <span className="gradient-text">Lan tỏa âm nhạc</span>
            </h1>

            <p 
              style={{ 
                fontSize: '1.125rem', 
                color: 'var(--color-text-light)', 
                marginBottom: '36px',
                maxWidth: '520px'
              }}
            >
              Chào mừng bạn đến với mái nhà chung G4U. Chúng mình cùng chung nhịp đập âm nhạc, nơi những tiếng đàn guitar hòa nhịp với nhiệt huyết tuổi trẻ của sinh viên TDTU.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <a href="#music-room" className="btn btn-primary">
                <span>Nghe G4U Đàn</span>
                <Play size={16} fill="white" />
              </a>
              <a href="#about" className="btn btn-secondary">
                <span>Tìm hiểu về CLB</span>
                <ArrowRight size={16} />
              </a>
            </div>

            {/* Micro details */}
            <div 
              style={{ 
                display: 'flex', 
                flexWrap: 'wrap',
                gap: '24px 40px', 
                marginTop: '48px',
                borderTop: '1px solid var(--color-border)',
                paddingTop: '24px'
              }}
            >
              <div>
                <h4 style={{ fontSize: '1.75rem', color: 'var(--color-primary)' }}>2011</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>Năm thành lập</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.75rem', color: 'var(--color-secondary)' }}>10+</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>Năm hoạt động</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.75rem', color: 'var(--color-accent)' }}>500+</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>Thành viên thế hệ</p>
              </div>
              <div>
                <h4 style={{ fontSize: '1.75rem', color: '#06b6d4' }}>18K+</h4>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-light)' }}>Người theo dõi</p>
              </div>
            </div>
          </motion.div>

          {/* Hero Right Images (Creative Stack) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ position: 'relative', width: '100%', height: '450px' }}
            className="hero-image-container"
          >
            {/* Primary Big Card */}
            <div 
              className="glass-panel"
              style={{
                position: 'absolute',
                width: '75%',
                height: '350px',
                top: '0',
                right: '0',
                overflow: 'hidden',
                borderRadius: 'var(--radius-lg)',
                border: '4px solid #fff',
                boxShadow: 'var(--shadow-lg)',
                zIndex: 2,
                transform: 'rotate(2deg)'
              }}
            >
              <img 
                src={heroImg} 
                alt="G4U Performance 1" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Overlapping Small Card */}
            <div 
              className="glass-panel"
              style={{
                position: 'absolute',
                width: '55%',
                height: '240px',
                bottom: '0',
                left: '0',
                overflow: 'hidden',
                borderRadius: 'var(--radius-md)',
                border: '4px solid #fff',
                boxShadow: 'var(--shadow-md)',
                zIndex: 3,
                transform: 'rotate(-4deg)'
              }}
            >
              <img 
                src={altImg} 
                alt="G4U Performance 2" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Decorative Floating Circle */}
            <div 
              className="btn-primary"
              style={{
                position: 'absolute',
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                top: '50%',
                left: '40%',
                zIndex: 4,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: 'var(--shadow-glow)',
                animation: 'float-circle 4s ease-in-out infinite'
              }}
            >
              <Sparkles size={24} color="#fff" />
            </div>
          </motion.div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float-circle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @media (max-width: 768px) {
          .hero-image-container {
            height: 350px !important;
            margin-top: 40px;
          }
          #hero {
            text-align: center;
          }
          #hero .grid-2 {
            display: flex;
            flex-direction: column;
          }
        }
      `}} />
    </section>
  );
}
