import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="bg-background1 dark:bg-red-400 font-sans tracking-wide">
   
  <Header />
      {children}
    </div>
  );
}
