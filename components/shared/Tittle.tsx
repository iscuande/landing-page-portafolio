interface TitleProps {
    title: string
    subtitle: string
    }

const Tittle = ( props: TitleProps) => {
    const { title, subtitle } = props
    return (
    <div className='flex flex-col items-center'>
      <h3 className='text-gray-400'>{title}</h3>
      <h2 className='text-3xl'>{subtitle}</h2>    
    </div>
  )
}

export default Tittle;