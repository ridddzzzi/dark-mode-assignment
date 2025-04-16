import React, {useState,useEffect} from 'react'
import Hero from "./components/Hero.jsx";

const App = () => {
    const [darkMode,setDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem("theme")

        // return savedTheme === 'dark' ? true : false;
        return savedTheme ==='dark' //shortcut of writing above line
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    }

    useEffect(() => {
        if (darkMode) {
            // setDarkMode(false);
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark");

        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light");
        }
    },[darkMode])
    return (
        <div className='relative min-h-screen bg-neutral-100 dark:bg-neutral-950
        transition-colors duration-300 isolate'>

            <div className='inset-0 absolute -z-10'>
                <div
                    className="absolute opacity-30 inset-0 dark:hidden"
                    style={{
                        backgroundImage: `
      linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
    `,
                        backgroundSize: '40px 40px',
                    }}
                ></div>

                <div
                    className="absolute inset-0 dark:hidden"
                    style={{
                        backgroundImage: 'radial-gradient(rgba(0,0,0,0.1) 1px, transparent 0)',
                        backgroundSize: '20px 20px',
                    }}
                ></div>


            </div>
            <button onClick={toggleDarkMode} className='fixed top-3 lg:top-4 right-4 lg:right
            w-9 h-9 lg:w-10 lg:h-10
            flex justify-center items-center rounded-full
            bg-amber-500 text-neutral-950
            shadow-lg hover:bg-amber-600
            transition-colors z-10'>
                <i className= {`bx bx-${darkMode ? 'sun' : 'moon'} text-lg lg:text-xl`}></i>
            </button>
        <Hero/>
        </div>
    )
}
export default App