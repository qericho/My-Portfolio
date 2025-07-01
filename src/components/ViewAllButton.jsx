
const ViewAllButton = ({title,onClick}) => {
  return (
    <button className="px-8 py-2 uppercase text-[15px] text-[#8cb0d9] tracking-widest duration-500
     rounded-full border-2 border-[#303f50] hover:border-[#8cb0d9] cursor-pointer hover:bg-[#8cb0d9] hover:text-black ">
        {title}</button>
  )
}

export default ViewAllButton
