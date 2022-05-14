import Client from '../core/Client'
import Head from 'next/head'
import Layout from '../components/Layout'
import Table from '../components/Table'

export default function Home() {

  const clients = [
    new Client('1', 'Gabriel Santos Cardoso', 20),
    new Client('2', 'Fabiana Pantoja Barreto', 23),
    new Client('3', 'Leonardo Ferreira Gaia', 21)
  ]

  function selectedClient(client: Client) {
    console.log('Editar: ' + client.name)
  }

  function deletedClient(client: Client) {
    console.log('Excluir: ' + client.name)
  }

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
        <Table 
          clients={clients}
          selectedClient={selectedClient}
          deletedClient={deletedClient}
        ></Table>
      </Layout>
    </div>
  )
}
