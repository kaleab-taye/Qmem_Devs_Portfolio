import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className="bg-background1 dark:bg-background1Dark font-sans tracking-wide">
      <Header />
      {children}
    </div>
  );
}
