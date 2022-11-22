import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";

const Datatable = () => {
 // const{data,loading, error} = useFetch("/users")

  const Delete =(id) => {

  }
  const actionColumn =[
    {
      field: "action", headerName: "Action", width: 200, renderCell:()=>{
        return (
          <div className="cellAction">
            <div className="viewButton">Xem</div>
            <div className="deleteButton">Xóa</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
