import React from 'react';
import { motion } from 'framer-motion';
import { Flame, Zap, Palette, Handshake } from 'lucide-react';

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Departments() {
  const departmentsData = [
    {
      id: 'chuyen-mon',
      name: 'Ban Chuyên môn',
      subtitle: 'Trình diễn nhạc cụ & Vocal',
      description: 'Nơi quy tụ những ngón đàn điêu luyện (Guitar, Bass, Keyboard, Cajon...) và những giọng hát đầy nội lực. Ban chuyên môn không chỉ tuyển guitar mà còn chào đón mọi mảnh ghép trong band nhạc để tạo nên những phần trình diễn bùng nổ.',
      image: '/departments/chuyen_mon.jpg',
      gradient: 'linear-gradient(135deg, var(--color-secondary), var(--color-accent))',
      shadowColor: 'rgba(99, 58, 135, 0.25)',
      icon: <Flame size={30} strokeWidth={2.2} />,
      tasks: [
        'Dàn dựng, tập luyện các tiết mục hòa thanh nhạc cụ đa dạng (Guitar, Vocal, Cajon, Keyboard, Bass...) cho các sự kiện.',
        'Giao lưu đàn hát, chia sẻ kinh nghiệm biểu diễn và kiến thức âm nhạc thực chiến giữa các thành viên.',
        'Tổ chức sinh hoạt chuyên môn hàng tuần giúp nâng cao khả năng hòa phối band nhạc và làm chủ sân khấu.'
      ]
    },
    {
      id: 'su-kien',
      name: 'Ban Sự kiện',
      subtitle: 'Ý tưởng & Quản lý hậu cần',
      description: 'Đội ngũ đứng sau hậu trường để hiện thực hóa những sân khấu lung linh. Phụ trách lập kế hoạch và vận hành sự kiện trơn tru.',
      image: '/departments/su_kien.jpg',
      gradient: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
      shadowColor: 'rgba(232, 59, 77, 0.25)',
      icon: <Zap size={30} strokeWidth={2.2} />,
      tasks: [
        'Lên ý tưởng kịch bản, viết kế hoạch và điều phối hoạt động hậu cần cho liveshow thường niên.',
        'Thiết kế, dàn dựng sân khấu, chuẩn bị đạo cụ biểu diễn và quản lý quy trình chạy chương trình.',
        'Quản lý hệ thống trang thiết bị kỹ thuật, nhạc cụ và phòng sinh hoạt câu lạc bộ.'
      ]
    },
    {
      id: 'truyen-thong',
      name: 'Ban Truyền thông',
      subtitle: 'Sáng tạo nội dung & Hình ảnh',
      description: 'Những người lưu trữ khoảnh khắc và lan tỏa câu chuyện của G4U. Phụ trách thiết kế ấn phẩm và phủ sóng mạng xã hội.',
      image: '/departments/truyen_thong.jpg',
      gradient: 'linear-gradient(135deg, var(--color-primary), #f97316)',
      shadowColor: 'rgba(232, 59, 77, 0.25)',
      icon: <Palette size={30} strokeWidth={2.2} />,
      tasks: [
        'Quay phim, chụp ảnh lưu giữ các hoạt động, sự kiện và sản xuất các video recap biểu diễn.',
        'Quản lý và biên tập nội dung trên các nền tảng mạng xã hội chính thức (Facebook Fanpage, Instagram, TikTok).',
        'Thiết kế ấn phẩm truyền thông số (banner, avatar, poster) phục vụ tuyển thành viên mới và tổ chức liveshow.'
      ]
    },
    {
      id: 'doi-ngoai',
      name: 'Ban Đối ngoại',
      subtitle: 'Kết nối cộng đồng & Đối tác',
      description: 'Cầu nối đưa hình ảnh G4U vượt ra ngoài khuôn viên trường. Phụ trách kêu gọi tài trợ và mở rộng mối quan hệ hợp tác.',
      image: '/departments/doi_ngoai.jpg',
      gradient: 'linear-gradient(135deg, #f97316, #eab308)',
      shadowColor: 'rgba(249, 115, 22, 0.25)',
      icon: <Handshake size={30} strokeWidth={2.2} />,
      tasks: [
        'Kết nối giao lưu nghệ thuật với các CLB, đội nhóm trong trường và các trường Đại học bạn.',
        'Liên hệ và làm việc với các nhà tài trợ, bảo trợ truyền thông để gây quỹ hoạt động cho CLB.',
        'Đại diện hình ảnh G4U trong các chương trình liên kết cấp khoa, trường và xã hội.'
      ]
    }
  ];

  return (
    <section id="departments" style={{ background: 'var(--color-bg-base)', padding: '80px 0' }}>
      <div className="container">
        <div className="section-header">
          <h2>
            Các ban <span className="gradient-text-alt">Hoạt động tại G4U</span>
          </h2>
          <p>4 mảnh ghép hoàn hảo phối hợp chặt chẽ để tạo nên một tập thể câu lạc bộ chuyên nghiệp và tràn đầy năng lượng</p>
        </div>

        <div 
          className="grid-2" 
          style={{ 
            maxWidth: '1000px', 
            margin: '0 auto', 
            gap: '32px',
            alignItems: 'stretch'
          }}
        >
          {departmentsData.map((dept, index) => (
            <motion.div
              key={dept.id}
              className="glass-panel dept-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: 'var(--color-bg-white)',
                borderRadius: 'var(--radius-lg)',
                padding: '0',
                textAlign: 'left',
                boxShadow: 'var(--shadow-md)',
                border: '1px solid rgba(255, 255, 255, 0.6)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                justifyContent: 'space-between',
                transition: 'var(--transition)'
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                {/* Department Image Banner */}
                <div style={{ position: 'relative', height: '220px', overflow: 'hidden', width: '100%' }}>
                  <img 
                    src={dept.image} 
                    alt={dept.name} 
                    className="dept-image"
                    style={{ 
                      width: '100%', 
                      height: '100%', 
                      objectFit: 'cover',
                      transition: 'var(--transition)'
                    }}
                  />
                </div>

                {/* Content Body */}
                <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                  <div>
                    {/* Header info */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                      {/* Glowing Icon wrapper */}
                      <div 
                        className="dept-icon-box"
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '16px',
                          background: dept.gradient,
                          color: '#fff',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: `0 10px 20px ${dept.shadowColor}`,
                          transition: 'var(--transition)',
                          flexShrink: 0
                        }}
                      >
                        {dept.icon}
                      </div>

                      <div>
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text-title)', margin: 0, fontWeight: 800 }}>
                          {dept.name}
                        </h3>
                        <span 
                          style={{ 
                            fontSize: '0.85rem', 
                            fontWeight: '700', 
                            color: 'var(--color-accent)',
                            fontFamily: 'var(--font-heading)',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                          }}
                        >
                          {dept.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p 
                      style={{ 
                        fontSize: '0.925rem', 
                        color: 'var(--color-text)', 
                        lineHeight: '1.6', 
                        marginBottom: '24px' 
                      }}
                    >
                      {dept.description}
                    </p>

                    {/* Tasks List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {dept.tasks.map((task, idx) => (
                        <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                          <div style={{ marginTop: '3px' }}>
                            <CheckIcon />
                          </div>
                          <span style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', lineHeight: '1.4' }}>
                            {task}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .dept-card {
          position: relative;
        }
        .dept-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-lg) !important;
          border-color: var(--color-primary) !important;
        }
        .dept-card:hover .dept-icon-box {
          transform: scale(1.1) rotate(4deg);
        }
        .dept-card:hover .dept-image {
          transform: scale(1.06);
        }
      `}} />
    </section>
  );
}
