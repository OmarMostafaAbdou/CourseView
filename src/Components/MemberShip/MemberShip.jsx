import Accordion from './Accordion'
import AppInMobile from './AppInMobile'
import BecomeCard from './BecomeCard'
import Carousel from './Carousel'
// import Carousel2 from './Carousel2'
import Plans from './Plans/Plans'


function MemberShip() {
  return (
    <>
    <Plans/>
    {/* <Online/> // online componenet from cources page (saleh) */}
    <div className='items'>
    <p className='mx-auto' style={{color:'#2D3436', fontSize:'36px', fontWeight:'bold',marginTop:'100px' }}>Online coaching lessons for remote learning</p>
    </div>
    <Accordion />
    <Carousel/>
    <AppInMobile/>
    <BecomeCard/>
    </>
  )
}

export default MemberShip