import Head from 'next/head'

export default function Home() {
  return (
    <div className={`
      h-screen 
      flex justify-center items-center
      text-4xl text-gray-300
      bg-gradient-to-r from-purple-500 to-blue-600
    `}>
      <Head>
        <title>CRUD NextJS</title>
        {/* Device meta tags */}
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* SEO Meta tags */}
        <meta name="author" content="Gabriel Santos Cardoso" />
        <meta name="description" content="Aplicação CRUD feita com NextJS, Typescript, TailwindCSS e Firebase" />
      </Head>

      <span>Teste de integração do TailwindCSS</span>
    </div>
  )
}
