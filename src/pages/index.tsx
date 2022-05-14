import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <div className={`
      h-screen
      flex justify-center items-center
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
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

      <Layout title="Cadastro Simples">
        <span>Content</span>
      </Layout>
    </div>
  )
}
