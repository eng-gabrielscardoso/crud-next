import { EditIcon, TrashIcon } from '../assets/icons/BaseIcons'
import Client from '../core/Client'


interface TableProps {
  clients: Client[]
  selectedClient?: (client: Client) => void
  deletedClient?: (client: Client) => void
}

export default function Table(props: TableProps) {
  const showActions = props.selectedClient || props.deletedClient

  function renderHeader() {
    return (
      <thead className={`
        bg-gradient-to-r from-purple-500 to-purple-800
        text-gray-100
      `}>
        <tr>
          <th className={`
            p-4
            text-left
          `}>
            Código
          </th>
          <th className={`
            p-4
            text-left
          `}>
            Nome
          </th>
          <th className={`
            p-4
            text-left
          `}>
            Idade
          </th>
          { showActions ? (
            <th className={`
              p-4
              text-left
            `}>
              Ações
            </th>
          ) : false}
        </tr>
      </thead>
    )
  }

  function renderBody() {
    return (
      <tbody>
        { renderData() }
      </tbody>
    )
  }

  function renderData() {
    return props.clients?.map((client, i) => {
      return (
        <tr key={ client.id }
          className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`}
        >
          <td className={`
            p-4
            text-left
          `}>
            { client.id }
          </td>
          <td className={`
            p-4
            text-left
          `}>
            { client.name }
          </td>
          <td className={`
            p-4
            text-left
          `}>
            { client.age }
          </td>
          { showActions ? (
            renderActions(client)
          ) : false }
        </tr>
      )
    })
  }

  function renderActions(client: Client) {
    return (
      <td className={`
        p-4
        flex justify-center items-center
      `}>
        { props.selectedClient ? (
          <button 
            onClick={() => props.selectedClient?.(client)}
            className={` 
            w-6
            flex justify-center items-center
            text-xs
            text-green-600
            hover:bg-purple-50
            rounded-full
          `}>
            { EditIcon }
          </button>
        ) : false}
        { props.deletedClient ? (
          <button 
            onClick={() => props.deletedClient?.(client)}
            className={`
            w-6
            flex justify-center items-center
            text-xs
            text-red-500
            hover:bg-purple-50
            rounded-full
          `}>
            { TrashIcon }
          </button>
        ) : false}
      </td>
    )
  }

  return (
    <table className={`
      w-full
      rounded-xl
      overflow-hidden
    `}>
      { renderHeader() }
      { renderBody() }
    </table>
  )
}
