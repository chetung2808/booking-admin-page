import "./table.scss"
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const List = () => {
  const rows = [
    {
      username: "ad_NVQViet",
      fullname: "Nguyễn Văn Quốc Việt",
      email: "vietnv@gmail.com",
      hotel: "Sunny House Da Lat",
      location: "Đà Lạt",
      date: "01-11-2022",
      status: "Đã thanh toán"
      
    },
    {
      username: "ad_CMTung",
      fullname: "Chế Nguyễn Minh Tùng",
      email: "tungcm@gmail.com",
      hotel: "Crystal Boutique Hotel",
      location: "Đà Nẵng",
      date: "25-10-2022",
      status: "Đã thanh toán"
    },
    {
      username: "ad_NQTuan",
      fullname: "Nguyễn Quốc Tùng",
      email: "tuannq@gmail.com",
      hotel: "Moc Hotel Sapa",
      location: "Lào Cai",
      date: "15-11-2022",
      status: "Chưa thanh toán"
    },

  ];

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tài khoản</TableCell>
            <TableCell className="tableCell">Họ và Tên</TableCell>
            <TableCell className="tableCell">Email</TableCell>
            <TableCell className="tableCell">Khách sạn</TableCell>
            <TableCell className="tableCell">Địa điểm</TableCell>
            <TableCell className="tableCell">Ngày giao dịch</TableCell>
            <TableCell className="tableCell">Tình trạng</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.username}>
              <TableCell className="tableCell">{row.username}</TableCell>
              <TableCell className="tableCell">{row.fullname}</TableCell>
              <TableCell className="tableCell">{row.email}</TableCell>
              <TableCell className="tableCell">{row.hotel}</TableCell>
              <TableCell className="tableCell">{row.location}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;