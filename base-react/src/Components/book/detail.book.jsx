import { Button, Drawer } from "antd"

const DataBookDetail = (props) => {

    const {dataBookDetail, setDataBookDetail,isModelBookDetail,setIsModelBookDetail,loadAllDataBook} = props;

    const onClose = () => {
        setDataBookDetail(null);
        setIsModelBookDetail(false);
    }

    return (
        <>
            <Drawer
                title="Detail"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={onClose}
                open={isModelBookDetail}
            >
                {
                    dataBookDetail ? <>
                        <p>ID: {dataBookDetail._id}</p>
                        <p>Name: {dataBookDetail.name}</p>
                        <p>Email: {dataBookDetail.description}</p>
                        <p>Age: {dataBookDetail.quantity}</p>
                        <p>Gender: {dataBookDetail.price}</p>
                        <div className="img-upload">
                            <div className="img-avarta">
                                {/* <img src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} width={"300px"} height={"120px"} alt="" /> */}
                                <div>
                                    <label htmlFor="btn-Upload" style={{
                                        display: "block",
                                        width: "fit-content",
                                        marginTop: "10px",
                                        backgroundColor: "orange",
                                        borderRadius: "5px",
                                        cursor: "pointer",
                                        padding: "5px 10px"
                                    }}>Upload File</label>
                                    <input type="file" hidden id="btn-Upload" />
                                </div>
                            </div>
                            {/* {preview &&
                                <>
                                    <div className="img-avarta" style={{ padding: "10px 0" }}>
                                        <img src={preview} width={"300px"} height={"120px"} alt="" />
                                    </div>
                                    <Button type="primary">Save</Button>
                                </>
                            } */}
                        </div>
                    </>
                        :
                        <>
                            <p>Không có data nào cả</p>
                        </>
                }
            </Drawer>

        </>
    )
}

export default DataBookDetail;