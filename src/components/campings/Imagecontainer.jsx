const Imagecontainer = ({image,name}) => {
    console.log(image,name)
  return (
    <section className="h-[360px] md:h-[500px] mt-2 rounded-md">
        <img src={image}
        alt={name}
        className="w-full h-full object-cover"/>
    </section>
  )
}
export default Imagecontainer