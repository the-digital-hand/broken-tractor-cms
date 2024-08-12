type PageHeaderProps = {
  title: string
}

const PageHeader = ({ title }: PageHeaderProps) => {
  return (
    <div className="flex h-[70vh] w-full flex-col justify-end bg-[#bf0] px-40">
      <div>
        <h1 className="text-6xl">{title}</h1>
      </div>
    </div>
  
  )
}

export default PageHeader
