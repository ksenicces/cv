import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div className="resume-container">
      <header className="header">
        <div className="header-content">
          <div className="name-title">
            <h1 id="header-text-main">KSENIYA YURCHUK</h1>
            <p id="header-text">Web developer</p>
          </div>
          <div class="contact">
            <div class="vertical-line"></div>
            <div class="contact-info">
              <div class="contact-item">
                <img class="icon" src="/img/envelope-icon.png" alt="Email" />
                <p class="contact-text">ksusha06.by@gmail.com</p>
              </div>
              <div class="contact-item">
                <img
                  class="icon"
                  src="/img/telegram-icon.png"
                  alt="Telegram"
                />
                <p class="contact-text"> ksenicces</p>
              </div>
              <div class="contact-item">
                <img
                  class="icon"
                  src="./img/location-icon.png"
                  alt="Location"
                />
                <p class="contact-text">Minsk</p>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div class="about">
        <img className="profile-pic" src="public/img/myPhoto.jpg" alt="Kseniya" />
        <p class="about-text">
        Hello! My name is Kseniya, and I am a second-year student at BSU. I have experience in programming with C++ and JavaScript, and I am actively developing my skills in web development using React.

Additionally, I am proficient with tools like Tilda, Figma, and Photoshop, which allow me to create both functional and visually appealing projects. I also speak English at a B2 level, which helps me learn new technologies and collaborate with international teams.

I am always open to new opportunities and eager to learn to become an even more qualified specialist in my field.
        </p>
      </div>

      <section className="education">
        <h2 class="education-text">EDUCATION</h2>
        <div className="university">
          <h3>BSU</h3>
          <p class="year">2023-2027</p>
        </div>
      </section>

      <section className="work-expirience">
        <h2 class="expirience-text">WORK-EXPIRIENCE</h2>
        <div className="expirience">
          <p class="expirience-text-2">Freelance Developer</p>
          <p class="expirience-text-2">self-employment</p>
        </div>
      </section>

      <section class="skills">
        <h2 class="skills-text">SKILLS</h2>
        <div class="skills-list">
          <div class="skill-item">
            <img class="skill-icon" src="./img/figma-icon.png" alt="Figma" />
            <p>Figma</p>
          </div>
          <div class="skill-item">
            <img
              class="skill-icon"
              src="./img/photoshop-icon.png"
              alt="Photoshop"
            />
            <p>Photoshop</p>
          </div>
          <div class="skill-item">
            <img class="skill-icon" src="./img/cpp-icon.png" alt="C++" />
            <p>C++</p>
          </div>
          <div class="skill-item">
            <img class="skill-icon" src='img/cpp-icon.png' alt="React" />
            <p>React</p>
          </div>
          <div class="skill-item">
            <img
              class="skill-icon"
              src="./img/javascript-icon.png"
              alt="JavaScript"
            />
            <p>JavaScript</p>
          </div>
          <div class="skill-item">
            <img class="skill-icon" src="./img/tilda-icon.png" alt="Tilda" />
            <p>Tilda</p>
          </div>
        </div>
      </section>
      <section class="works">
    <h2 class="works-text">WORKS</h2>
    <div class="works-list">
        <div class="work-item">
            <img class="work-image" src="./img/work1.png" alt="Lamoda" />
            <h3 class="work-title">Lamoda</h3>
            <p class="work-description">Analogue of "Lamoda" with filtering by price, color, category.</p>
            <a href="https://github.com/ksenicces/lamoda.git" class="href-work">Ссылка на Git</a>
        </div>
        <div class="work-item">
            <img class="work-image" src="./img/work2.png" alt="Router" />
            <h3 class="work-title">Router</h3>
            <p class="work-description">Multi-page application with users and photos.</p>
            <a href="https://github.com/ksenicces/router.git" class="href-work">Ссылка на Git</a>
        </div>
        <div class="work-item">
            <img class="work-image" src="./img/work3.png" alt="Notion" />
            <h3 class="work-title">Notion</h3>
            <p class="work-description">Multi-page registration application that allows you to create, edit and delete notes.</p>
            <a href="https://github.com/ksenicces/notion.git" class="href-work">Ссылка на Git</a>
        </div>
        <div class="work-item">
            <img class="work-image" src="./img/work4.png" alt="ToDo List" />
            <h3 class="work-title">ToDo List</h3>
            <p class="work-description">An application that allows you to add and delete notes with descriptions.</p>
            <a href="https://github.com/ksenicces/ToDo-List.git" class="href-work">Ссылка на Git</a>
        </div>
    </div>
</section>
    </div>
  );
};

export default Resume;
