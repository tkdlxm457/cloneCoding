import { Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import { Column } from "../interface/Column";
import { Data } from "../interface/Data";

export default function UserContent(props: { columns: Column[]; rows: Data[]; page: number; rowsPerPage: number; }) {
    let columns: Column[] = props.columns;
    let rows: Data[] = props.rows;
    let page: number = props.page;
    let rowsPerPage: number = props.rowsPerPage;

    return (
        <Table stickyHeader aria-label="sticky table">
            <TableHead>
                <TableRow>
                    <TableCell align="center">이름</TableCell>
                    <TableCell align="center">나이</TableCell>
                    <TableCell align="center">주소</TableCell>
                    <TableCell align="center">성별</TableCell>
                    <TableCell align="center">생성시간</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell align="center">김대현</TableCell>
                    <TableCell align="center">25</TableCell>
                    <TableCell align="center">서울시 광진구</TableCell>
                    <TableCell align="center">남자</TableCell>
                    <TableCell align="center">2020-10-10</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    )
}
