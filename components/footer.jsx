import {data} from '../edit/data'

const footer = ({ data }) => {
  return (
    <div className="flex flex-col justify-center items-center">
    <div className="text-main text-xs opacity-70 font-Space">Designed & Built by {data.firstName} {data.lastName}</div>
    <div className="text-main text-xs opacity-70 font-Space mb-6">Using NextJS & TailwindCSS</div>
    </div>
  )
}

export default footer