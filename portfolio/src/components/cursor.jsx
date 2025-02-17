import React, { useEffect, useState } from "react";
import gsap from "gsap";
import "../styles/cursor.css";

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const moveCursor = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        document.addEventListener("mousemove", moveCursor);

        return () => {
            document.removeEventListener("mousemove", moveCursor);
        };
    }, []);

    useEffect(() => {
        const cursor = document.querySelector(".cursor");
        const follower = document.querySelector(".cursorFollower");

        gsap.to({}, 0.016, {
            repeat: -1,
            onRepeat: function () {
                gsap.set(follower, {
                    css: {
                        left: position.x - 12,
                        top: position.y - 12,
                    },
                });

                gsap.set(cursor, {
                    css: {
                        left: position.x,
                        top: position.y,
                    },
                });
            },
        });
    }, [position]);

    useEffect(() => {
        const links = document.querySelectorAll(".link");

        links.forEach((link) => {
            link.addEventListener("mouseenter", () => setIsHovered(true));
            link.addEventListener("mouseleave", () => setIsHovered(false));
        });

        return () => {
            links.forEach((link) => {
                link.removeEventListener("mouseenter", () => setIsHovered(true));
                link.removeEventListener("mouseleave", () => setIsHovered(false));
            });
        };
    }, []);

    return (
        <>
            <div className={`cursor ${isHovered ? "active" : ""}`} />
            <div className={`cursorFollower ${isHovered ? "active" : ""}`} />
        </>
    );
};

export default Cursor;