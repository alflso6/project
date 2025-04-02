import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      {/* 헤더: 로고와 네비게이션 메뉴 */}
      <header className="header">
        <div className="logo">
          <h1>가구모아</h1>
        </div>
        <nav className="nav">
          <ul>
            <li><a href="#">홈</a></li>
          </ul>
        </nav>
      </header>

      {/* 메인 콘텐츠: Hero 섹션 */}
      <main className="main-content">
        <section className="hero">
          <h2>봄맞이 인테리어 제안</h2>
          <p>당신의 공간을 새롭게 변신시켜보세요!</p>
          <button>지금 둘러보기</button>
        </section>
      </main>

      {/* 푸터 */}
      <footer className="footer">
        <p>&copy; 2025 가구모아</p>
      </footer>
    </div>
  );
}

export default App;
