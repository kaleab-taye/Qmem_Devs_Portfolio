import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-regular-svg-icons';

export default function ThemeSwitchIcon() {
  const [initTheme,setInitTheme] = useState('light')
  const { systemTheme, theme, setTheme } = useTheme(initTheme);
  const [mounted, setMounted] = useState(false);

  async function switchTheme() {
    if (theme === 'light') {
      setTheme('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      setTheme(() => 'light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', initTheme);
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

    if (currentTheme === 'dark') {
      return (
        <div
          className=" text-textColor1Dark mr-auto grid w-fit  "
          role="button"
          // onClick={() => setTheme('light')}
        >
          <FontAwesomeIcon className="w-5 h-5" icon={faSun} />
        </div>
      );
    } else {
      return (
        <div
          className=" text-textColor1 ml-auto grid w-fit"
          role="button"
          // onClick={() => setTheme('dark')}
        >
          <FontAwesomeIcon className="w-5 h-5" icon={faMoon} />
        </div>
      );
    }
  };

  function handleClick(item) {
    console.log(item);
    localStorage.theme = item;
    document.documentElement.classList.add('dark');

    console.log(document.documentElement.classList.add('dark'));
  }

  return (
    <>
      <div
        className="opacity-60 hover:opacity-100  p-1 grid grid-flow-col gap-2 cursor-pointer"
        onClick={() => switchTheme()}
      >
        <div className="my-auto">{renderThemeChanger()}</div>{' '}
        <div className="lg:hidden my-auto">Theme</div>
      </div>
    </>
  );
}
