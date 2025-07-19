import { useEffect, useState } from "react";
import BookTable from "../Components/book/book.table";
import { getAllBookAPI } from "../services/api.service";
import BookForm from "../Components/book/book.form";

const BookPage = () => {

    const [bookData, setBookData] = useState([]);

    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const [total, setTotal] = useState(0);

    useEffect(() => { loadAllDataBook() }, [current, pageSize])


    const loadAllDataBook = async () => {
        const response = await getAllBookAPI(current, pageSize);
        if (response.data) {
            setBookData(response.data.result);
            setCurrent(response.data.meta.current);
            setPageSize(response.data.meta.pageSize);
            setTotal(response.data.meta.total);
        }

    }
    return (
        <>
            <BookForm loadAllDataBook={loadAllDataBook}/>
            
            <BookTable
                bookData={bookData}
                loadAllDataBook={loadAllDataBook}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
            />
        </>
    )
}

export default BookPage;