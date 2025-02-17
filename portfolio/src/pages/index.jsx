import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Link } from 'react-router-dom'

import Header from '../layouts/header'
import Cursor from '../components/cursor'

import '../styles/index.css'

gsap.registerPlugin(ScrollTrigger);

const Index = () => {

    const containerRef = useRef(null);

    useEffect(() => {
        const sections = gsap.utils.toArray(".section");

        gsap.to(sections, {
            yPercent: -100 * (sections.length - 1), // 전체 높이 이동
            ease: "none",
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: () => `+=${window.innerHeight * (sections.length)}`,
                scrub: true, // 부드러운 스크롤
                pin: true, // 고정
                anticipatePin: 1, // pin 버그 방지
                snap: 1 / (sections.length - 1), // 스냅 효과
            },
        });
    }, []);

    return (
        <main>

            <Header />

            <article ref={containerRef}>
                <section id="home" className="section">
                    <p>main</p>
                </section>

                <section id="about" className="section">
                    <p>about</p>
                </section>

                <section id="skills" className="section">
                    <p>skills</p>
                </section>

                <section id="projects" className="section">
                    <p>projects</p>
                </section>
            </article>

            <Cursor />

        </main>
    )
}

export default Index