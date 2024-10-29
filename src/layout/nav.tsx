import Typography from '@mui/material/Typography/Typography'
import './nav.css'
import { FormControl, Select, MenuItem, OutlinedInput, ListItemIcon, ListItemText, SelectChangeEvent } from '@mui/material'
import { SetStateAction, useCallback, useState } from 'react'
import TwemojiFlagThailand from '~icons/twemoji/flag-thailand?width=1.2em&height=1.2em';


function Nav() {
    const [languageSelected, setLanguageSelect] = useState("th");
    const handleLanguageChange = useCallback((e: SelectChangeEvent<string>) => {
        setLanguageSelect(e.target.value)
    }, [languageSelected])
    return (
        <>
            <div className='fixed h-16 w-full inline-flex '>

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
                <div className='absolute right-0 top-0 inline-flex w-[28%] z-[48]' >
                    <div className='oblique-end h-28 w-[60px] '></div>
                    <div className='border-b-2 border-b-primary-bule  h-28 w-full z-[49]'>
                        <div className='w-full h-full p-2 flex gap-3 items-center  bg-black ms-12'>
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
                </div>
            </div >

        </>
    )
}
export default Nav