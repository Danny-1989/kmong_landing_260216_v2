import React, { useState } from 'react';
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
          <img 
            src="kmong_프로필_블랙_투명.png" 
            alt="kmong" 
            className="h-[20px] md:h-[22px]"
            onError={(e) => { e.target.src = 'https://via.placeholder.com/100x20?text=kmong'; }}
          />
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

      {/* Hero Section - PC Split Layout */}
      <section className="pt-12 md:pt-32 pb-16 md:pb-32 px-5 md:px-8 bg-[#F9FBFA]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left: Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-[32px] md:text-[60px] font-black leading-[1.1] mb-6 tracking-tight break-keep">
              일 생기면, <br className="hidden md:block" />일단 <span className="text-black">크몽</span>
            </h1>
            <p className="text-base md:text-xl text-slate-600 mb-10 break-keep">
              비즈니스는 키우고 번거로운 일은 덜어내세요. <br className="hidden md:block" />
              이미 수많은 기업들이 크몽에서 성공을 만들고 있습니다.
            </p>
            <button className="w-full md:w-auto md:px-12 bg-[#92FA72] text-black font-bold text-lg py-5 rounded-xl shadow-[0_8px_20px_rgba(146,250,114,0.3)] active:scale-95 hover:shadow-[0_12px_24px_rgba(146,250,114,0.4)] transition-all">
              무료로 시작하기
            </button>
          </div>

          {/* Right: Video Visual */}
          <div className="md:w-[55%] w-full">
            <div className="w-full aspect-[16/9] bg-gray-200 rounded-[32px] overflow-hidden relative shadow-2xl group cursor-pointer">
              <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Play fill="black" size={24} className="ml-1" />
                </div>
              </div>
              <div className="absolute bottom-6 left-6 text-white text-left opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-xs md:text-sm font-bold bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full w-fit mb-2">크몽 가이드 영상</p>
                <h3 className="text-sm md:text-lg font-bold">크몽으로 전문가를 만나는 가장 똑똑한 방법</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnosis Section */}
      <section className="py-20 md:py-32 px-5 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 md:text-center">
            <span className="bg-[#E8F8E3] text-[#3F7D4B] px-3 py-1 rounded-full text-xs md:text-sm font-bold mb-4 inline-block">맞춤 진단</span>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">어떤 고민이 있으신가요?</h2>
            <p className="text-sm md:text-lg text-slate-500">고민을 선택하시면 딱 맞는 전문가를 추천해 드릴게요</p>
          </div>

          <div className="flex gap-3 mb-12 overflow-x-auto no-scrollbar md:justify-center pb-2">
            {[
              { id: 'store', label: '매장 운영자', icon: <Store size={20} /> },
              { id: 'seller', label: '온라인 셀러', icon: <ShoppingBag size={20} /> },
              { id: 'founder', label: '초기 창업자', icon: <Rocket size={20} /> }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 rounded-2xl font-bold transition-all whitespace-nowrap text-sm md:text-base border-2 ${
                  activeTab === tab.id 
                    ? 'bg-black text-white border-black shadow-lg translate-y-[-2px]' 
                    : 'bg-white text-slate-500 border-gray-100 hover:border-gray-200 hover:bg-gray-50'
                }`}
              >
                {tab.icon}
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {diagnosisData[activeTab].sections.map((section, idx) => (
              <div 
                key={idx} 
                className="group bg-[#F9FBFA] rounded-[32px] p-8 border border-gray-100 hover:border-[#92FA72] hover:bg-white active:scale-[0.98] transition-all cursor-pointer shadow-sm hover:shadow-xl flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <h3 className="text-lg md:text-xl font-bold break-keep leading-tight text-slate-800 pr-6">
                      {section.label}
                    </h3>
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-300 group-hover:text-[#3F7D4B] shadow-sm transition-colors">
                      <ChevronRight size={20} />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {section.items.map((item, i) => (
                      <span key={i} className="px-3 py-1.5 bg-white border border-gray-100 rounded-xl text-xs text-slate-500 font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-[#3F7D4B]">
                  {section.cta} <ArrowRight size={16} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facts Section */}
      <section className="py-20 md:py-28 bg-black text-white px-5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-12">
          {[
            { label: '누적 거래', value: '600만+' },
            { label: '누적 회원', value: '400만+' },
            { label: '누적 서비스', value: '70만+' },
            { label: '고객만족도', value: '98.6%' }
          ].map((stat, i) => (
            <div key={i} className="text-center md:border-l border-white/10 first:border-0">
              <p className="text-gray-500 text-xs md:text-sm mb-2 uppercase tracking-widest">{stat.label}</p>
              <h4 className="text-3xl md:text-5xl font-black text-[#92FA72] tracking-tight">{stat.value}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 md:py-32 px-5 bg-[#F9FBFA]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-4 break-keep">비즈니스의 모든 것 다 됩니다.</h2>
            <p className="text-sm md:text-lg text-slate-500">디자인부터 개발, 마케팅, 세무까지 필요한 전문가를 한곳에서 만나보세요</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { icon: <Palette size={28} />, title: '디자인', desc: '로고, 상세페이지 등' },
              { icon: <Megaphone size={28} />, title: '마케팅', desc: 'SNS 관리, 바이럴 등' },
              { icon: <Code size={28} />, title: 'IT 개발', desc: '홈페이지, 앱 등' },
              { icon: <Video size={28} />, title: '영상, 사진', desc: '촬영, 편집 등' },
              { icon: <Scale size={28} />, title: '세무 법무', desc: '세무, 노무 자문 등' },
              { icon: <FileText size={28} />, title: '번역, 문서', desc: '통번역, 문서작성 등' }
            ].map((cat, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-[32px] border border-gray-100 hover:border-[#92FA72] transition-all hover:shadow-lg group cursor-pointer">
                <div className="mb-6 text-slate-300 group-hover:text-black transition-colors">{cat.icon}</div>
                <h4 className="font-bold text-sm md:text-base mb-2">{cat.title}</h4>
                <p className="text-[11px] md:text-xs text-slate-400 leading-tight">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Section */}
      <section className="py-20 md:py-32 px-5 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-[10px] md:text-xs font-bold text-[#3F7D4B] mb-3 uppercase tracking-widest">이용 가이드</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-4">3단계로 간단하게</h2>
            <p className="text-sm md:text-lg text-slate-500">처음 이용하시나요? 걱정 마세요, 크몽이 안내해 드릴게요</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 md:gap-24 relative">
            <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-[1px] bg-gray-100 z-0"></div>
            
            {[
              {
                step: '1',
                title: '탐색',
                icon: <Search size={24} className="text-[#3F7D4B]" />,
                desc: '간편하게 검색하고, 실제 후기와 포트폴리오로 실력을 비교해 보세요',
                checks: ['실제 후기 확인', '포토폴리오 비교']
              },
              {
                step: '2',
                title: '문의',
                icon: <MessageSquare size={24} className="text-[#3F7D4B]" />,
                desc: '결제 전 전문가와 무료로 상담하며 상세한 요구사항을 조율할 수 있어요',
                checks: ['무료 상담', '요구사항 조율']
              },
              {
                step: '3',
                title: '거래',
                icon: <ShieldCheck size={24} className="text-[#3F7D4B]" />,
                desc: '작업 완료까지 대금을 안전하게 보호하는 에스크로 결제로 안심하고 거래하세요',
                checks: ['에스크로 결제', '안전 보장']
              }
            ].map((item, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-[#92FA72] rounded-[28px] flex items-center justify-center font-black text-2xl shadow-xl mb-8 transform hover:rotate-6 transition-transform">
                  {item.step}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-3">
                  {item.title} {item.icon}
                </h3>
                <p className="text-sm md:text-base text-slate-500 mb-8 leading-relaxed break-keep px-4">{item.desc}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {item.checks.map((check, ci) => (
                    <div key={ci} className="flex items-center gap-2 text-[11px] md:text-xs font-bold text-slate-800 bg-[#F2F7F2] py-2 px-4 rounded-xl border border-[#DDF4D7]">
                      <span className="text-[#3F7D4B]">✔</span> {check}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 px-5 bg-[#F2F7F2]">
        <div className="max-w-7xl mx-auto space-y-6">
          {/* Coupon CTA */}
          <div className="bg-white rounded-[40px] p-8 md:p-16 border border-[#C1F2B1] shadow-xl flex flex-col md:flex-row justify-between items-center gap-10 active:scale-[0.99] transition-all">
            <div className="text-center md:text-left">
              <div className="inline-block bg-[#FF4DDF] text-white px-3 py-1 rounded-lg text-xs font-bold mb-6">첫구매 전용 혜택</div>
              <h3 className="text-2xl md:text-4xl font-black mb-4 leading-tight tracking-tight">지금 가입하고<br className="md:hidden" /> 1만원 할인 쿠폰 받기</h3>
              <p className="text-sm md:text-lg text-slate-500">가입 즉시 크몽의 모든 비즈니스 카테고리에서 사용하실 수 있어요</p>
            </div>
            <button className="w-full md:w-auto bg-black text-white px-12 py-6 rounded-2xl font-bold text-lg md:text-xl shadow-2xl hover:bg-slate-800 transition-colors">
              쿠폰 받고 시작하기
            </button>
          </div>

          {/* Service Grid CTA */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-[40px] p-10 border border-blue-100 hover:shadow-2xl transition-all flex flex-col justify-between h-full group cursor-pointer">
              <div>
                <div className="flex items-center gap-2 text-[#1787FF] font-bold text-sm md:text-base mb-6">
                  <Building2 size={24} />
                  크몽 엔터프라이즈
                </div>
                <h3 className="text-xl md:text-3xl font-bold mb-4 break-keep leading-tight">기업 전담 매니저가<br />최적의 전문가를 매칭해 드려요</h3>
                <p className="text-slate-500 text-sm md:text-base mb-8">대규모 프로젝트부터 정부지원사업까지 전문가 매칭과 관리를 한 번에 해결하세요</p>
              </div>
              <div className="flex items-center font-bold text-sm md:text-lg text-black group-hover:gap-4 transition-all">
                전문 매칭 상담하기 <ChevronRight size={24} />
              </div>
            </div>

            <div className="bg-white rounded-[40px] p-10 border border-purple-100 hover:shadow-2xl transition-all relative overflow-hidden flex flex-col justify-between h-full group cursor-pointer">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-50 rounded-full blur-3xl opacity-40"></div>
              <div>
                <div className="flex items-center gap-2 font-bold text-sm md:text-base mb-6" style={{ color: '#823CE6' }}>
                  <Sparkles size={24} />
                  AI 전문가 검색
                </div>
                <h3 className="text-xl md:text-3xl font-bold mb-4 break-keep leading-tight">필요한 작업을 문장으로 말하면<br />AI가 딱 맞는 전문가를 추천해요</h3>
                <p className="text-slate-500 text-sm md:text-base mb-8">"가게 홍보를 위한 인스타그램 광고 전문가를 찾아줘"와 같이 편하게 말씀해 보세요</p>
              </div>
              <div className="flex items-center font-bold text-sm md:text-lg text-black group-hover:gap-4 transition-all">
                AI 전문가 찾기 <ChevronRight size={24} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-12 px-5 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-20">
            <div className="col-span-2 md:col-span-1">
              <img 
                src="kmong_프로필_블랙_투명.png" 
                alt="kmong" 
                className="h-[20px] mb-8" 
                onError={(e) => { e.target.src = 'https://via.placeholder.com/80x18?text=kmong'; }}
              />
              <div className="flex gap-4">
                <Instagram size={20} className="text-slate-400 hover:text-black cursor-pointer transition-colors" />
                <Youtube size={20} className="text-slate-400 hover:text-black cursor-pointer transition-colors" />
                <Facebook size={20} className="text-slate-400 hover:text-black cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h5 className="font-bold text-sm mb-6">크몽 소개</h5>
              <ul className="text-xs text-slate-500 space-y-4">
                <li className="hover:text-black cursor-pointer">회사소개</li>
                <li className="hover:text-black cursor-pointer font-bold text-black">채용공고</li>
                <li className="hover:text-black cursor-pointer">미디어센터</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-sm mb-6">서비스</h5>
              <ul className="text-xs text-slate-500 space-y-4">
                <li className="hover:text-black cursor-pointer">크몽마켓</li>
                <li className="hover:text-black cursor-pointer">엔터프라이즈</li>
                <li className="hover:text-black cursor-pointer">크몽biz</li>
                <li className="hover:text-black cursor-pointer">전화운세</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-sm mb-6">전문가 지원</h5>
              <ul className="text-xs text-slate-500 space-y-4">
                <li className="hover:text-black cursor-pointer">전문가 등록</li>
                <li className="hover:text-black cursor-pointer">전문가 교육센터</li>
                <li className="hover:text-black cursor-pointer">전문가 가이드</li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-sm mb-6">고객센터</h5>
              <ul className="text-xs text-slate-500 space-y-4 font-bold text-slate-800">
                <li className="hover:text-black cursor-pointer">1544-6254</li>
                <li className="text-xs font-normal text-slate-400">평일 10:30~18:00 (점심 13:00~14:00)</li>
                <li className="hover:text-black cursor-pointer">자주 묻는 질문</li>
              </ul>
            </div>
          </div>

          <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between gap-10">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-xs font-bold text-slate-800">
                <a href="#" className="hover:underline">이용약관</a>
                <a href="#" className="hover:underline text-black font-black">개인정보처리방침</a>
                <a href="#" className="hover:underline">전문가약관</a>
                <a href="#" className="hover:underline">윤리경영</a>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed break-keep">
                (주)크몽 | 대표이사 박현호 | 서울특별시 서초구 강남대로 311 드림플러스 강남 12층<br />
                사업자등록번호 214-88-82815 | 통신판매업신고 2018-서울서초-0551 | <a href="#" className="underline hover:text-black">사업자 정보 확인</a><br />
                호스팅사업자 (주)크몽 | 이메일 help@kmong.com<br /><br />
                (주)크몽은 통신판매중개자이며 서비스 거래의 당사자가 아닙니다. 따라서 (주)크몽은 상품·거래정보 및 거래에 대하여 책임을 지지 않습니다.
              </p>
            </div>
            <div className="flex items-center gap-4 shrink-0">
              <div className="flex flex-col items-end">
                <p className="text-[10px] text-slate-400 mb-2 uppercase tracking-widest">Global Service</p>
                <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg text-xs font-bold text-slate-600 cursor-pointer hover:bg-gray-50 transition-colors">
                  <Globe size={14} /> 한국어
                </div>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-slate-400 mt-12">© 2024 kmong Inc. All rights reserved.</p>
        </div>
      </footer>

      {/* Mobile Floating CTA */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[calc(100%-40px)] max-w-[440px] z-50 md:hidden">
        <button className="w-full bg-black text-[#92FA72] py-5 rounded-full font-black text-base shadow-2xl flex items-center justify-center gap-2 active:scale-95 transition-transform">
          무료 상담 시작하기 <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

// --- 실행 코드 (이 부분까지 모두 복사하세요) ---
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

export default App;
