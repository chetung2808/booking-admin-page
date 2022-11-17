export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {
        field: "user", headerName:"Tên người dùng", width: 230, renderCell: (params) => {
            return (
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email", headerName:"Email", width: 230
    },
    {
        field: "isadmin", headerName:"Admin", width: 100
    }
];
export const userRows = [
    {
        id: "c_001",
        username: "binhan117",
        img: "https://i.pinimg.com/550x/8d/4f/44/8d4f442214edc01230b38228bad5226f.jpg",
        email: "BinhAnNguyen@gmail.com",
        isadmin: " ",

    },
    {
        id: "c_002",
        username: "annguyen99",
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F843228730240311176%2Fsent%2F%3Finvite_code%3Df6b00065105647ecbc42df472285280e%26sender%3D843228867639461410%26sfo%3D1&psig=AOvVaw1nhBGF3q1ACbHdtPyFd5yp&ust=1668756086279000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPjExtbXtPsCFQAAAAAdAAAAABAE",
        email: "BinhAnNguyen@gmail.com",
        isadmin: " ",

    },
]
