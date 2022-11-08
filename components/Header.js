import Head from 'next/head';
import icon from '../public/Logo.png';

export default function Header(props) {
  let url = process.env.url;
  return (
    <Head>
      <title>{props.title}</title>
      <meta name="keywords" content={props.content} />
      <link rel="icon" href={props.icon} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:image" content={'/Logo.png'} />
      <meta property="og:title" content={props.title} />
      <meta property="og:type" content={props.type} />
      <meta property="og:description" content={props.description} />
      <meta property="og:image:width" content="2400" />
      <meta property="og:image:height" content="1260" />
    </Head>
  );
}

Header.defaultProps = {
  title: 'Qmem-Developers',
  icon: '/Logo.png',
  content:
    'software, software developers,software developers from ethiopia, software developers from africa, content writing, software engineering, software engineers',
  type: 'article',
  description: 'A software development team based in Addis Ababa Ethiopia',
};
