import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  Play, 
  ChevronRight, 
  Store, 
  ShoppingBag, 
  Rocket, 
  Search, 
  MessageSquare, 
  ShieldCheck,
  Palette, 
  Megaphone, 
  Code, 
  Video, 
  Scale, 
  FileText, 
  Sparkles, 
  Building2, 
  Menu, 
  ArrowRight,
  Globe,
  Instagram,
  Youtube,
  Facebook
} from 'lucide-react';

const KMONG_COLORS = {
  primary: '#92FA72',
  secondary: '#5DD877',
  black: '#000000',
  enterprise: '#1787FF',
  biz: '#01A77E',
  ai: 'linear-gradient(90deg, #E053DD 0%, #823CE6 100%)',
  gray: {
    50: '#F9FBFA',
    100: '#F2F7F2',
    200: '#E8F8E3',
    400: '#A1A1A1',
    800: '#28462F',
    900: '#181A1B'
  }
};

const App = () => {
  const [activeTab, setActiveTab] = useState('store');

  const diagnosisData = {
    store: {
      title: "매장 운영자",
      sections: [
        { label: "가게 홍보를 어떻게 해야 할지 모르겠어요", items: ["플레이스 홍보", "체험단", "인스타 관리", "카페 바이럴"], cta: "홍보 전문가 찾기" },
        { label: "가게 이미지를 깔끔하게 만들고 싶어요", items: ["음식 사진", "메뉴판 디자인", "로고 디자인", "전단지"], cta: "디자인 전문가 찾기" },
        { label: "세금, 노무 관리가 필요해요", items: ["세무 관리", "절세 문의", "노무 자문", "법무 자문"], cta: "비즈니스 상담하기" }
      ]
    },
    seller: {
      title: "온라인 셀러",
      sections: [
        { label: "쇼핑몰 초기 세팅이 필요해요", items: ["제품 사진", "숏폼영상", "상세페이지 제작", "리뷰 관리"], cta: "세팅 전문가 찾기" },
        { label: "더 많은 고객이 필요해요", items: ["순위 최적화", "SEO", "인스타 관리", "블로그 포스팅"], cta: "마케팅 전문가 찾기" },
        { label: "확실한 매출이 필요해요", items: ["핫딜 바이럴", "인플루언서 마케팅", "라이브커머스", "SNS광고"], cta: "매출 증대 솔루션" }
      ]
    },
    founder: {
      title: "초기 창업자",
      sections: [
        { label: "브랜드 초기 구축이 필요해요", items: ["로고 제작", "상표 출원", "홈페이지 제작", "프로필 사진"], cta: "브랜딩 시작하기" },
        { label: "마케팅 세팅이 필요해요", items: ["SEO", "리뷰 관리", "언론홍보", "영상 제작"], cta: "마케팅 전문가 매칭" },
        { label: "정부지원사업을 준비하고 있어요", items: ["기획", "MVP 개발", "사업계획서 컨설팅", "PPT 디자인"], cta: "컨설팅 전문가 찾기" }
      ]
    }
  };

  return (
    <div className="font-sans text-slate-900 bg-white min-h-screen relative overflow-x-hidden">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 md:px-8 h-16 flex items-center justify-between">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="font-black text-2xl italic">kmong</div>
          <div className="hidden md:flex items-center gap-8 text-sm font-bold">
            <a href="#" className="hover:text-[#3F7D4B]">서비스 탐색</a>
            <a href="#" className="hover:text-[#3F7D4B]">크몽biz</a>
            <a href="#" className="hover:text-[#3F7D4B]">엔터프라이즈</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-bold text-slate-800">로그인</button>
            <button className="bg-[#92FA72] px-4 py-2 rounded-lg text-sm font-bold hidden md:block hover:shadow-lg transition-shadow">회원가입</button>
            <Menu size={24} className="text-slate-800 md:hidden" />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-12 md:pt-32 pb-16 md:pb-32 px-5 md:px-8 bg-[#F9FBFA]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-[32px] md:text-[60px] font-black leading-[1.1] mb-6 tracking-tight break-keep">
              일 생기면, <br className="hidden md:block" />일단 <span className="text-black">크몽</span>
            </h1>
            <p className="text-base md:text-xl text-slate-600 mb-10 break-keep">
              비즈니스는 키우고 번거로운 일은 덜어내세요.
            </p>
            <button className="w-full md:w-auto md:px-12 bg-[#92FA72] text-black font-bold text-lg py-5 rounded-xl shadow-lg">
              무료로 시작하기
            </button>
          </div>
          <div className="md:w-[55%] w-full bg-gray-200 aspect-video rounded-[32px] flex items-center justify-center">
            <Play size={48} />
          </div>
        </div>
      </section>

      {/* Diagnosis Section */}
      <section className="py-20 md:py-32 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 mb-12 overflow-x-auto no-scrollbar md:justify-center pb-2">
            {['store', 'seller', 'founder'].map((id) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-bold border-2 ${
                  activeTab === id ? 'bg-black text-white border-black' : 'bg-white text-slate-500 border-gray-100'
                }`}
              >
                {id === 'store' ? '매장 운영자' : id === 'seller' ? '온라인 셀러' : '초기 창업자'}
              </button>
            ))}
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {diagnosisData[activeTab].sections.map((section, idx) => (
              <div key={idx} className="bg-[#F9FBFA] rounded-[32px] p-8 border border-gray-100 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold mb-6">{section.label}</h3>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {section.items.map((item, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white border border-gray-100 rounded-xl text-xs text-slate-500">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="font-bold text-sm">{section.cta} →</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-12 px-5 md:px-8 text-center md:text-left">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="font-black text-xl italic opacity-50">kmong</div>
           <div className="flex gap-6 text-slate-400">
             <Instagram size={24} />
             <Youtube size={24} />
             <Facebook size={24} />
           </div>
        </div>
      </footer>
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App;
