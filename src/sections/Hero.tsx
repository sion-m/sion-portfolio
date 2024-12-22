export default function Hero() {
    return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20"> {/* py-20 → py-32 */}
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-6">
            안녕하세요 👋
            <br />
            프론트엔드 개발자
            <br />
            <span className="text-blue-600">쬬닝이</span>입니다
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            사용자 경험을 중요시하는 웹 개발자입니다
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="#contact" 
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="bg-gray-100 px-6 py-3 rounded-lg hover:bg-gray-200 transition"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>
    );
  }