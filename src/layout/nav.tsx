function Nav() {
    return (
        <>
           <div className='fixed  z-50 h-15 w-full nav-shadow '>
                <div className='oblique w-3/6 z-50'>
                    <div id='Nev' className="fixed    z-50 h-14 w-[99%] bg-gradient-to-r from-primary-orange  from-10% via-[#7e4a07] via-30% to-black to-50% border-b-4  border-[#EC8B0E] nav">
                        <div className="trapezoid-border"></div>
                        <div className='flex gap-4 h-full ps-2 pt-2'>
                            <img className="rounded-full object-center h-11 w-11" src="src\assets\AutoLane_Logo.png"></img>

                        </div>

                    </div>
                </div>
                <div className='fixed z-[49] top-0 right-0 w-[53%] h-[60px]  bg-black  flex items-center justify-between p-3 '>
                </div>
            </div>
        </>
    )
}
export default Nav