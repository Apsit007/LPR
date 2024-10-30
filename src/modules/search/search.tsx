import { Typography, SelectChangeEvent, FormControlLabel, Checkbox, Button, Pagination, Select } from "@mui/material"
import TextBox from "../../components/text-box/TextBox"
import { useCallback, useState } from "react";
import SelectBox from "../../components/select-box/SelectBox";
import DatePicker from "../../components/date-picker/DatePicker";
import dayjs, { Dayjs } from "dayjs";
import SearchIcon from '@mui/icons-material/Search';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';
import HumbleiconsEyeClose from '~icons/humbleicons/eye-close?width=1.2em&height=1.2em';
import RefreshIcon from '@mui/icons-material/Refresh';
import LsiconFileCsvFilled from '~icons/lsicon/file-csv-filled?width=2em&height=2em';
import VscodeIconsFileTypePdf2 from '~icons/vscode-icons/file-type-pdf2?width=2em&height=2em';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MdiKeyboardArrowDown from '~icons/mdi/keyboard-arrow-down?width=1.2em&height=1.2em';
import MdiEdit from '~icons/mdi/edit?width=1.2em&height=1.2em';
import MdiFileDocumentBoxOutline from '~icons/mdi/file-document-box-outline?width=2em&height=2em';
import MdiFolderMultipleImage from '~icons/mdi/folder-multiple-image?width=1em&height=1em';
import MdiPrinterOutline from '~icons/mdi/printer-outline?width=1.2em&height=1.2em';
import './search.css'

// const columns: GridColDef<(typeof rows)[number]>[] = [
//     {
//         field: 'select',
//         headerName: 'เปรียบเทียบ',
//         width: 120,
//         sortable: false,
//         headerAlign: 'center',
//         align: 'center',
//         renderCell: (params) => <Checkbox checked={params.row.isSelected} />
//     },

//     {
//         field: 'licenseplate',
//         headerName: 'ป้ายทะเบียน',
//         editable: true,
//         headerAlign: 'center',
//         sortable: true,
//         flex: 1,
//         renderHeader: () => (
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//                 ป้ายทะเบียน <FilterAltIcon style={{ marginLeft: '4px' }} />
//             </div>
//         ),
//     },
//     {
//         field: 'image',
//         headerName: 'รูป',
//         editable: true,
//         headerAlign: 'center',
//         flex: 1,
//         renderCell: (params) => <div className="flex items-center justify-center"><img src={params.row.image} width={50} /></div>

//     },
//     {
//         field: 'carrount',
//         headerName: 'เส้นทางรถ',
//         editable: true,
//         headerAlign: 'center',
//         flex: 2,
//         renderCell: (params) => <div className="flex text-wrap h-fit">
//             {params.row.carrount}
//         </div>
//     },
//     {
//         field: 'datetime',
//         headerName: 'ช่วงวัน/เวลา',
//         editable: true,
//         headerAlign: 'center',
//         align: 'center',
//         flex: 2
//     },
//     {
//         field: 'detail',
//         headerName: 'รายละเอียด',
//         headerAlign: 'center',
//         flex: 1,
//         renderCell: (params) => (
//             <div className="flex justify-center items-center h-full">
//                 <Button variant="outlined" onClick={() => handleMoreDetail(params.row.id)}>
//                     <MdiKeyboardArrowDown />
//                 </Button>
//             </div>
//         )
//     },
//     {
//         field: 'edit',
//         headerName: '',
//         flex: 1,
//         resizable: false,
//         renderCell: () => <div className="flex justify-center items-center h-full w-full">
//             <MdiEdit /></div>
//     },
// ];
const rows = [
    { id: 1, licenseplate: '3กฎ 5458 กรุงเทพมหานคร', image: '/icons/settings.png', carrount: "NSB 4_ขก_บ้านไผ่_ออก >NSB 3_บัวลายหนองแวง_ออก >NSB 5_ลพ_วังดิน_เข้า >NSB 5_นน_เฉลิมพระเกียรติ_เข้า>NSB 6_กพ_คลองน้ำไหล_เข้า >NSB 7_สพ_พระยาบันลือ_เข้า >NSB 8_สฎ_พรุกะแชง_เข้า  ", datetime: "10/10/2567 (03:00:00) - 10/10/2567 (17:00:00)", isSelected: false },
    { id: 2, licenseplate: 'I5 2511 กรุงเทพมหานคร', image: '/icons/settings.png', carrount: 14, datetime: 14, isSelected: false },
    { id: 3, licenseplate: 'I5 2511 กรุงเทพมหานคร', image: '/icons/settings.png', carrount: 14, datetime: 14, isSelected: false },
    { id: 4, licenseplate: 'I5 2511 กรุงเทพมหานคร', image: '/icons/settings.png', carrount: 14, datetime: 14, isSelected: false },
    { id: 5, licenseplate: 'I5 2511 กรุงเทพมหานคร', image: '/icons/settings.png', carrount: 14, datetime: 14, isSelected: false },
    { id: 6, licenseplate: 'I5 2511 กรุงเทพมหานคร', image: '/icons/settings.png', carrount: 14, datetime: 14, isSelected: false },
    { id: 7, licenseplate: 'I5 2511 กรุงเทพมหานคร', image: '/icons/settings.png', carrount: 14, datetime: 14, isSelected: false },
    { id: 8, licenseplate: 'I5 2511 กรุงเทพมหานคร', image: '/icons/settings.png', carrount: 14, datetime: 14, isSelected: false },
];

function Search() {
    const [age, setAge] = useState('');
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(dayjs());
    const [isFullWidth, setIsFullWidth] = useState(false);

    const handleMoreDetail = (id: number) => {
        setIsFullWidth((prev) => !prev);
    };


    const handleChange = (event: SelectChangeEvent<any>) => {
        setAge(event.target.value as string);
    };

    const options = [
        { value: 10, label: 'Ten' },
        { value: 20, label: 'Twenty' },
        { value: 30, label: 'Thirty' },
    ];
    return (
        <div className={`main-content pe-6 ${isFullWidth ? "expanded" : ""}`}>
            <div className={`main-form ${isFullWidth ? "w-full" : "w-[75%]"} transition-all duration-500`}>


                <div className="w-full">
                    <Typography variant='h5' color="white">ตรวจหาทะเบียน แบบก่อน/หลัง ผ่านด่าน</Typography>
                    <div className="w-full flex flex-col gap-3">
                        <div className="flex w-full flex-row gap-28">
                            <div className="w-1/2 flex gap-2">
                                <TextBox id="outlined-basic" label="ผ่านในพื้นที่" className="w-full" />
                                <SelectBox
                                    className="!w-full"
                                    value={age}
                                    onChange={handleChange}
                                    label="จังหวัด"
                                    options={options}
                                />
                            </div>
                            <div className="w-1/2 ">
                                <SelectBox
                                    id="2"
                                    className="!w-full"
                                    value={age}
                                    onChange={handleChange}
                                    label="สถานี"
                                    options={options}
                                />
                            </div>
                        </div>
                        <div className="flex w-full flex-row gap-28">
                            <div className="w-1/2  flex gap-2">
                                <SelectBox
                                    id="3"
                                    className="!w-full"
                                    value={age}
                                    onChange={handleChange}
                                    label="จุดตรวจ/ชื่อด่าน"
                                    options={options}
                                />
                                <div className="w-10 h-10 mt-7 bg-[#797979] rounded-md flex justify-center items-center cursor-pointer">
                                    <img src="/icons/pin_google-maps.png" alt="pin_google-map" width={30} />
                                </div>
                            </div>
                            <div className="w-1/2 ">
                                <SelectBox
                                    id="2"
                                    className="!w-full"
                                    value={age}
                                    onChange={handleChange}
                                    label="ลักษณะการผ่านด่าน"
                                    options={options}
                                />
                            </div>
                        </div>

                        <div className="flex w-full flex-row gap-28">
                            <div className="w-1/2  flex gap-2">
                                <SelectBox
                                    id="3"
                                    className="!w-full"
                                    value={age}
                                    onChange={handleChange}
                                    label="ช่วงเวลาการค้นหา"
                                    options={options}
                                />

                                <DatePicker
                                    value={selectedDate}
                                    onChange={(newDate) => setSelectedDate(newDate)}
                                    label="วัน/เวลา เริ่มต้น"
                                />


                            </div>
                            <div className="w-1/2 ">
                                <div className="w-1/2 ">
                                    <DatePicker
                                        value={selectedDate}
                                        onChange={(newDate) => setSelectedDate(newDate)}
                                        label="วัน/เวลา สิ้นสุด"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full flex-row gap-28">
                            <FormControlLabel control={<Checkbox defaultChecked />} label="ซ่อนรูปภาพ" className="text-white" />
                        </div>
                    </div>
                </div>
                <div className="flex justify-end gap-3">
                    <Button variant="contained" startIcon={<SearchIcon />}>
                        ค้นหา
                    </Button>
                    <Button variant="contained" className="!bg-[#BCBCBC] !text-black" >
                        ตั้งค่า
                    </Button>
                </div>

                {/* data grid */}
                <div className="flex justify-end gap-3 mt-4">
                    <Button variant="contained" className="!bg-[#BCBCBC] !text-black" startIcon={<ContentPasteSearchIcon />}>
                        เปรียบเทียบ
                    </Button>
                    <Button variant="contained" className="!bg-[#BCBCBC] !text-black" startIcon={<HumbleiconsEyeClose />} >
                        ซ่อนรายการ
                    </Button>
                    <Button variant="contained" className="!bg-[#BCBCBC] !text-black" startIcon={<RefreshIcon />} >
                        Refresh
                    </Button>
                    <div className="h-full w-[40px] !bg-[#BCBCBC] !text-black rounded-md items-center justify-center flex p-[2px] cursor-pointer"  >
                        <LsiconFileCsvFilled />
                    </div>
                    <div className="h-full w-[40px] !bg-[#BCBCBC] !text-black rounded-md items-center justify-center flex p-[2px] cursor-pointer"  >
                        <VscodeIconsFileTypePdf2 />
                    </div>
                </div>
                <div className="w-full mt-4 h-fit">
                    <DataGrid
                        autoHeight={true}
                        rows={rows}
                        columns={[
                            {
                                field: 'select',
                                headerName: 'เปรียบเทียบ',
                                width: 120,
                                sortable: false,
                                headerAlign: 'center',
                                align: 'center',
                                renderCell: (params) => <Checkbox checked={params.row.isSelected} />
                            },

                            {
                                field: 'licenseplate',
                                headerName: 'ป้ายทะเบียน',
                                editable: true,
                                headerAlign: 'center',
                                sortable: true,
                                flex: 1,
                                renderHeader: () => (
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        ป้ายทะเบียน <FilterAltIcon style={{ marginLeft: '4px' }} />
                                    </div>
                                ),
                            },
                            {
                                field: 'image',
                                headerName: 'รูป',
                                editable: true,
                                headerAlign: 'center',
                                flex: 1,
                                renderCell: (params) => <div className="flex items-center justify-center"><img src={params.row.image} width={50} /></div>

                            },
                            {
                                field: 'carrount',
                                headerName: 'เส้นทางรถ',
                                editable: true,
                                headerAlign: 'center',
                                flex: 2,
                                renderCell: (params) => <div className="flex text-wrap h-fit">
                                    {params.row.carrount}
                                </div>
                            },
                            {
                                field: 'datetime',
                                headerName: 'ช่วงวัน/เวลา',
                                editable: true,
                                headerAlign: 'center',
                                align: 'center',
                                flex: 2
                            },
                            {
                                field: 'detail',
                                headerName: 'รายละเอียด',
                                headerAlign: 'center',
                                flex: 1,
                                renderCell: (params) => (
                                    <div className="flex justify-center items-center h-full">
                                        <Button variant="outlined" onClick={() => handleMoreDetail(params.row.id)}>
                                            <MdiKeyboardArrowDown />
                                        </Button>
                                    </div>
                                )
                            },
                            {
                                field: 'edit',
                                headerName: '',
                                flex: 1,
                                resizable: false,
                                renderCell: () => <div className="flex justify-center items-center h-full w-full">
                                    <MdiEdit /></div>
                            },
                        ]}

                        sx={{
                            border: 0,
                            "& .MuiDataGrid-columnHeaders": {
                                backgroundColor: "#242727",
                                color: "white",
                            },
                            "& .MuiDataGrid-container--top [role=row]": {
                                backgroundColor: "#242727",
                                color: "white",
                                barder: "none",
                            },
                            "& .MuiDataGrid-cell": {
                                "&:nth-of-type(even)": {
                                    backgroundColor: "#393B3A",
                                },
                                "&:nth-of-type(odd)": {
                                    backgroundColor: "#48494B",
                                },
                                color: "white",
                            },
                            "& .MuiDataGrid-footerContainer": {

                                display: "content",
                            },
                            // "& .MuiDataGrid-scrollbar": {

                            //     display: "none",
                            // },
                            // "& .MuiDataGrid-scrollbarFiller": {

                            //     display: "none",
                            // },
                            // "& .MuiDataGrid-filler": {

                            //     display: "none",
                            // },

                        }}
                        getRowHeight={() => 'auto'}
                        disableColumnMenu
                        disableColumnSorting
                        disableColumnFilter
                        disableColumnResize
                        pagination
                        hideFooterPagination
                        pageSizeOptions={[5]}
                        disableRowSelectionOnClick
                    />
                </div>
                <div className="w-full py-3 flex justify-between">
                    <div className="flex items-center gap-2">
                        <Typography variant="subtitle1" color="white">แสดง</Typography>
                        <Select className="w-[100px] h-[35px]"></Select>
                    </div>
                    <div className="flex items-center gap-2">

                        <Pagination count={10} variant="outlined" shape="rounded" />
                        <Typography variant="subtitle1" color="white">หน้า</Typography>
                        <Select className="w-[100px] h-[35px]"></Select>
                    </div>
                </div>
                {/* data grid */}
            </div>
            {/* sideinfo */}
            {(


                <div id="detail-form" className={`w-[22%] bg-[#384043] h-screen fixed right-0 top-0 pt-[60px] overflow-auto infoside ${isFullWidth ? "right-[-500px] none" : "!right-0 block"} transition-all duration-500`}>
                    <div className="w-full h-[80px] bg-[#11212D] flex justify-between items-center py-4 px-3">
                        <Typography variant="h5" color="white">รายละเอียด</Typography>
                        <Button size="medium" variant="contained" className="!bg-[#797979]"><MdiFileDocumentBoxOutline /></Button>
                    </div>
                    <div className="w-full flex bg-[#797979]">
                        <Button size="medium" variant="contained" className="!bg-[#797979] w-[34%]" startIcon={<MdiFolderMultipleImage />}>แผนที่เส้นทาง</Button>
                        <Button size="medium" variant="contained" className="!bg-[#797979] w-[33%]" startIcon={<MdiFolderMultipleImage />}>ข้อมูลรถ</Button>
                        <Button size="medium" variant="contained" className="!bg-[#797979] w-[33%]" startIcon={<MdiFolderMultipleImage />}>ข้อมูลขนส่ง</Button>
                    </div>
                    {/* หา map มาใส่เอานะฮัฟ */}
                    <div className="w-full h-fit">
                        <img src="/images/map.png" alt="" className="w-full" />
                    </div>
                    {/* หา map มาใส่เอานะฮัฟ */}

                    <div className="w-full h-[250px] p-3 flex flex-col gap-2">
                        <div className="w-full bg-black h-[200px] flex justify-center">
                            <img src="/images/car_test.png" alt="" className="h-full" />
                        </div>
                        <div className="w-full bg-black text-center">
                            <Typography variant="h6" color="white">3กฏ 5456  กรุงเทพมหานคร</Typography>
                        </div>
                    </div>
                    <div className="w-full p-3">
                        <div className="inline-flex gap-2 text-white">
                            <MdiFileDocumentBoxOutline />
                            <Typography variant="h6">ลำดับการเดินทางผ่านจุดตรวจ/ด่านตรวจ</Typography>
                        </div>
                        {/* grid */}
                        <div className="w-full">
                            {/* header */}
                            <div className="flex flex-row bg-[#242727] text-white">
                                <div className="w-[60%] text-center ">
                                    <Typography variant="h6">ด่านตรวจ/จุดตรวจ</Typography>
                                </div>
                                <div className="w-[40%] text-center">
                                    <Typography variant="h6">เวลา</Typography>
                                </div>
                            </div>
                            {/* header */}

                            {/* content */}
                            {Array.from({ length: 5 }).map(() => (
                                <div className="flex flex-row  text-white border-b-[1px] border-gray-500">
                                    <div className="w-[60%]  py-1 px-3 bg-[#393B3A]">
                                        <Typography variant="subtitle1">NSB 4_ขก_บ้านไผ่_ออก</Typography>
                                    </div>
                                    <div className="w-[40%]  p-1 bg-[#48494B] flex items-center justify-start">
                                        <Typography variant="subtitle2">10/10/2567 (12:00:00)</Typography>
                                    </div>
                                </div>
                            ))
                            }
                            {/* content */}
                            <div className="flex justify-end gap-2 mt-2">
                                <Button variant="contained" className="!bg-[#BCBCBC] !text-black" startIcon={<ContentPasteSearchIcon />}>
                                    เปรียบเทียบ
                                </Button>
                                <Button variant="contained" className="!bg-[#BCBCBC] !text-black" startIcon={<MdiPrinterOutline />}>
                                    พิมพ์รายงาน
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* sideinfo */}
        </div>
    )
}
export default Search

