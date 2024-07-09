import React from 'react';
import './Practice.css';
import practiceImage from '../images/Practice.jpg';
const Practice = (): JSX.Element => {
  return (
    <div className="practice">
      <section className="practice-section">
        <h4>每日共修</h4>
        <p>
            学会成员在会长赵宇威居士的带领下每日线上通过Line社群平台共修，竭诚欢迎有意参加网上共修法会的志同道合同参道友们加入共修，请扫描二维码加入。共修时长一个半小时，共同诵经念佛45分钟，会长讲经45分钟。赵宇威会长日复一日，年复一年循环演讲净土经论，以五经一论为主，再加以《般若经》等，并将每晚讲经音频传送至Line社群平台上。
        </p>
        <img src={practiceImage} alt={`共修平台`} />
      </section>
    </div>
    
  );
}

export default Practice;
