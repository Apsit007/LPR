import Typography from '@mui/material/Typography/Typography'
import './nav.css'
import { FormControl, Select, MenuItem, OutlinedInput, ListItemIcon, ListItemText, SelectChangeEvent } from '@mui/material'
import { useCallback, useEffect, useState } from 'react'
import TwemojiFlagThailand from '~icons/twemoji/flag-thailand?width=1.2em&height=1.2em';
import MenuIcon from './menu-icon/menuicon';
import { NavLink } from 'react-router-dom';
// import { Icon } from '@mui/material';
// import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import RiArrowUpSFill from '~icons/ri/arrow-up-s-fill?width=2.5em&height=2.5em';
import RiArrowDownSFill from '~icons/ri/arrow-down-s-fill?width=2.5em&height=2.5em';

function Nav() {
    const [languageSelected, setLanguageSelect] = useState("th");
    const [sidePosition, setSidePosition] = useState(0);
    const handleLanguageChange = useCallback((e: SelectChangeEvent<string>) => {
        setLanguageSelect(e.target.value)
    }, [languageSelected])
    const handleSlideUp = useCallback(() => {
        console.log('2222');
        setSidePosition((prev: number) => Math.min(prev + 68, 0));

        console.log(sidePosition);
    }, []);

    const handleSlideDown = () => {
        setSidePosition((prev: number) => Math.max(prev - 68, -200)); // limit the down scroll
    };
    useEffect(() => { console.log(sidePosition); }, [sidePosition])
    return (
        <>
            {/* top nav */}
            <div className='fixed h-16 w-full inline-flex z-[100] shadow-nav'>

                <div className='inline-flex  w-[75%] z-[50]'>
                    <div className='border-b-4 border-b-primary-bule h-full w-full z-50 relative'>
                        <div className='w-full h-full p-2 flex gap-3 bg-black'>
                            <img className="rounded-full object-center h-11 w-11" src="lpr_logo.png"></img>
                            <Typography variant="h4" color='white'>
                                License Plate Recognition
                            </Typography>
                        </div>
                    </div>
                    <div className='oblique h-full w-[40px] z-[49] right-1'></div>
                </div>
                <Typography className='absolute left-[45%] top-4 text-[#23EDFA] z-[101]' variant='h6' >2024-06-28  20:10:23</Typography>
                {/* <div className='absolute right-2 top-0 inline-flex w-[28%] z-[48]' >
                    <div className='oblique-end h-24 w-[60px] '></div>
                    <div className='border-b-2 border-b-primary-bule  h-24 w-full z-[49]'>
                        <div className='w-full h-full p-2 flex gap-3 items-center  bg-black ps-12'>
                            <Typography variant="h5" color='white'>
                                นางสาวธรพร ศรีสมร
                            </Typography>
                            <div className=' rounded-full w-14 h-14 border-primary-bule border-2 items-center flex overflow-hidden '>
                                <img className='w-14 h-14' src="https://s3-alpha-sig.figma.com/img/3e41/5ccd/a9902249c4d9aba9b923088dc6189602?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Az1SgbbYm10Lc7tvQDVfN8gUi8XSg9nvP4aVYHk8AI2FOPBmbkiuzkenlbEwySWf52JU0RD2icgMOlAFBkLZFlTrUqBb0FQ6q99czWG49n24ND2EYk6pXBco9DBfvHX6ZrWM8GZpRcksk5XXvm4cFuIp06K3AMWeUq72PzQv~sAdPPbPrR8Vl4zJOQ2m7u5qo5MBNdhjqJyk-J3B69dlvwfIGcDWIL~~ppr5cltwp76GcepFRRebTy19i11MaEI2xv55cbvGbILgAL4lQb1RcFnh6V~P25VVXDBLflpPl7x9lFe3fHkoLslzyoGPrF~WBPQhHystohbWdjXbgANrjQ__" alt="" />
                            </div>
                            <FormControl sx={{
                                '.MuiSelect-icon': {
                                    color: 'white', // Set the SVG icon color to white
                                },
                            }}>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={languageSelected}
                                    onChange={handleLanguageChange}
                                    input={<OutlinedInput label="" />}
                                    className="bg-transparent !text-white !border-white border-2 w-[120px] h-[40px] "
                                    renderValue={(selected) => (
                                        <div className="flex items-center">
                                            {selected === 'th' && <TwemojiFlagThailand style={{ width: '1.2em', height: '1.2em', marginRight: '0.5em' }} />}
                                            {selected === 'en' && <TwemojiFlagThailand style={{ width: '1.2em', height: '1.2em', marginRight: '0.5em' }} />}
                                            <span>{selected === 'th' ? 'TH' : 'EN'}</span>
                                        </div>
                                    )}
                                >
                                    <MenuItem value={'th'}>
                                        <ListItemIcon>
                                            <TwemojiFlagThailand />
                                        </ListItemIcon>
                                        <ListItemText primary="TH" /></MenuItem>
                                    <MenuItem value={'en'}>
                                        <ListItemIcon>
                                            <TwemojiFlagThailand />
                                        </ListItemIcon>
                                        <ListItemText primary="EN" />
                                    </MenuItem>

                                </Select>
                            </FormControl>

                        </div>
                    </div>
                </div> */}
                <div className='absolute right-0 top-0 inline-flex h-16 w-[28%] z-[48] bg-gradient-to-r from-[#2c5372] to-black border-b-2 border-primary-bule ps-28'>
                    <div className='w-full h-full p-2 flex gap-3 items-center  '>
                        <Typography variant="h6" color='white'>
                            นางสาวธรพร ศรีสมร
                        </Typography>
                        <div className=' rounded-full w-14 h-14 border-primary-bule border-2 items-center flex overflow-hidden bg-slate-900'>
                            <img className='w-14 h-14' src="https://s3-alpha-sig.figma.com/img/3e41/5ccd/a9902249c4d9aba9b923088dc6189602?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Az1SgbbYm10Lc7tvQDVfN8gUi8XSg9nvP4aVYHk8AI2FOPBmbkiuzkenlbEwySWf52JU0RD2icgMOlAFBkLZFlTrUqBb0FQ6q99czWG49n24ND2EYk6pXBco9DBfvHX6ZrWM8GZpRcksk5XXvm4cFuIp06K3AMWeUq72PzQv~sAdPPbPrR8Vl4zJOQ2m7u5qo5MBNdhjqJyk-J3B69dlvwfIGcDWIL~~ppr5cltwp76GcepFRRebTy19i11MaEI2xv55cbvGbILgAL4lQb1RcFnh6V~P25VVXDBLflpPl7x9lFe3fHkoLslzyoGPrF~WBPQhHystohbWdjXbgANrjQ__" alt="" />
                        </div>
                        <FormControl sx={{
                            '.MuiSelect-icon': {
                                color: 'white', // Set the SVG icon color to white
                            },
                        }}>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={languageSelected}
                                onChange={handleLanguageChange}
                                input={<OutlinedInput label="" />}
                                className="bg-transparent !text-white !border-white border-2 w-[120px] h-[40px] "
                                renderValue={(selected) => (
                                    <div className="flex items-center">
                                        {selected === 'th' && <TwemojiFlagThailand style={{ width: '1.2em', height: '1.2em', marginRight: '0.5em' }} />}
                                        {selected === 'en' && <TwemojiFlagThailand style={{ width: '1.2em', height: '1.2em', marginRight: '0.5em' }} />}
                                        <span>{selected === 'th' ? 'TH' : 'EN'}</span>
                                    </div>
                                )}
                            >
                                <MenuItem value={'th'}>
                                    <ListItemIcon>
                                        <TwemojiFlagThailand />
                                    </ListItemIcon>
                                    <ListItemText primary="TH" /></MenuItem>
                                <MenuItem value={'en'}>
                                    <ListItemIcon>
                                        <TwemojiFlagThailand />
                                    </ListItemIcon>
                                    <ListItemText primary="EN" />
                                </MenuItem>

                            </Select>
                        </FormControl>

                    </div>
                </div>
            </div >

            {/* side nav  */}
            <div className='fixed h-4/6 w-[80px] bg-black left-7 mt-24 border-2 border-primary-bule rounded-lg px-2 py-12 '>
                <div className='absolute top-3 left-0 w-full flex justify-center'>
                    {(sidePosition != 0) && <RiArrowUpSFill className='text-white cursor-pointer' onClick={handleSlideUp} />}
                </div>
                <div className='  overflow-hidden h-[540px] ' >
                    <div style={{ transform: `translateY(${sidePosition}px)` }} className='flex flex-col gap-2 transition-transform duration-300 ease-out'>


                        <NavLink to="/" className="hover:bg-white rounded-full">{({ isActive }) => { return <MenuIcon iconUrl={`/icons/checking${isActive ? '' : ''}.png`} menuName='checking' /> }}</NavLink>
                        <NavLink to="/chart" className="hover:bg-white rounded-full">{({ isActive }) => { return <MenuIcon iconUrl={`/icons/bar-chart${isActive ? '' : ''}.png`} menuName='bar-chart' /> }}</NavLink>
                        <NavLink to="/user-manage" className="hover:bg-white rounded-full">{({ isActive }) => { return <MenuIcon iconUrl={`/icons/add-user${isActive ? '' : ''}.png`} menuName='add-user' /> }}</NavLink>
                        <NavLink to="/car" className="hover:bg-white rounded-full">{({ isActive }) => { return <MenuIcon iconUrl={`/icons/car${isActive ? '' : ''}.png`} menuName='car' /> }}</NavLink>
                        <NavLink to="/cctv" className="hover:bg-white rounded-full">{({ isActive }) => { return <MenuIcon iconUrl={`/icons/cctv${isActive ? '' : ''}.png`} menuName='cctv' /> }}</NavLink>
                        <NavLink to="/search" className="hover:bg-white rounded-full">{({ isActive }) => { return <MenuIcon iconUrl={`/icons/search${isActive ? '' : ''}.png`} menuName='search' /> }}</NavLink>
                        <NavLink to="/setting" className="hover:bg-white rounded-full">{({ isActive }) => { return <MenuIcon iconUrl={`/icons/settings${isActive ? '' : ''}.png`} menuName='settings' /> }}</NavLink>
                        <NavLink to="/user" className="hover:bg-white rounded-full">{({ isActive }) => { return <MenuIcon iconUrl={`/icons/user-images${isActive ? '' : ''}.png`} menuName='user-images' /> }}</NavLink>
                        <NavLink to="/user" className="hover:bg-white rounded-full">{({ isActive }) => { return <MenuIcon iconUrl={`/icons/user-images${isActive ? '' : ''}.png`} menuName='user-images' /> }}</NavLink>
                        <NavLink to="/user" className="hover:bg-white rounded-full">{({ isActive }) => { return <MenuIcon iconUrl={`/icons/user-images${isActive ? '' : ''}.png`} menuName='user-images' /> }}</NavLink>
                        {/* acitve เปลี่ยน icon เป็นสีขาว ต้องมี icon สีขาว*/}
                        {/* <NavLink to="/user" className="hover:bg-white rounded-full">{({ isActive }) => { return <MenuIcon iconUrl={`/icons/user-images${isActive ? '' : '-white'}.png`} menuName='user-images' /> }}</NavLink> */}
                    </div>
                </div>
                <div className='absolute bottom-3 left-0 w-full flex justify-center '>
                    {(sidePosition != -200) && <RiArrowDownSFill className='text-white cursor-pointer' onClick={handleSlideDown} />}

                </div>
            </div>
        </>
    )
}
export default Nav