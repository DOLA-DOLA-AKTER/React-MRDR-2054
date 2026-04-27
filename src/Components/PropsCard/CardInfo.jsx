import reactLogo from '../../assets/react.svg'
import viteLogo from '../../assets/vite.svg'
import heroImg from '../../assets/hero.png'
import PropsCard from './PropsCard'

const CardInfo = () => {
  return (
    <div className='pb-15 container'>
      <h1 className=' text-center text-5xl font-semibold p-10'>Props Distructuring</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 padding'>

        <PropsCard img={heroImg} titleName="Props Card - 1" descText="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente deleniti aliquid saepe dolore sequi dignissimos nostrum alias non eaque culpa." />
        <PropsCard img={viteLogo} titleName="Props Card - 2" descText="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat voluptate dolor debitis impedit repellat rerum." />
        <PropsCard img={reactLogo} titleName="Props Card - 3" descText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, voluptatum." />
        
      </div>
    </div>
  )
}

export default CardInfo
