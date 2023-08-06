import './style.css'
import myImage from '../../assets/images/navneet.jpeg'

const Index = () => {
  return (
    <div className="section-about">
      <div className="section-about__img-box">
        <img src={myImage} alt="Nishant" />
      </div>
      <div className="section-about__content-box">
        <h1 className="heading-secondary">I'm a Full Stack Developer</h1>
        <p className="paragraph-primary">
          Hi! I'm Navneet, a passionate MERN stack developer based in India. I
          am currently pursuing my B.E. in Computer Science and Engineering.
          From a young age, I have been fascinated by technology, and that
          interest has led me to pursue a career in web development.
        </p>
        <p className="paragraph-primary">
          I have a strong foundation in the MERN stack, which comprises MongoDB,
          Express.js, React.js, and Node.js. I enjoy working on the full-stack,
          as it allows me to build robust and scalable web applications from the
          front-end to the back-end.
        </p>
        <p className="paragraph-primary">
          During my studies, I have gained practical experience by working on
          various projects, where I have developed responsive user interfaces
          using React.js, implemented server-side logic using Node.js and
          Express.js, and integrated databases with MongoDB. I am comfortable
          with both the front-end and back-end technologies and enjoy t '88he
          challenge of building efficient and user-friendly applications.
        </p>
        <p className="paragraph-primary">
          Apart from the MERN stack, I am also familiar with HTML, CSS,
          JavaScript, and Git. I have a strong problem-solving mindset and can
          quickly adapt to new technologies and frameworks.
        </p>
        <p className="paragraph-primary">
          In my free time, I like to explore new web development trends and
          technologies. I am a firm believer in continuous learning, and I am
          always seeking opportunities to expand my knowledge and skills. I am
          excited about the possibilities of web development and how it can
          positively impact the lives of people.
        </p>
        <p className="paragraph-primary">
          If you have any questions or would like to discuss potential
          collaborations, feel free to get in touch with me. I'm always open to
          new opportunities and look forward to connecting with fellow
          developers and professionals in the industry.
        </p>
      </div>
    </div>
  )
}

export default Index
