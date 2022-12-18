import { styled } from '@mui/material/styles';
import OtherTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Cyclist, Team } from 'api/models';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: "#FFFE01",
        color: "black",
        fontWeight: "800",
        textTransform: "uppercase",
        fontSize: "18px"
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

interface Props {
    objects: Team[] | Cyclist[]
}

const Table = ({objects}: Props) => {
  return (
    
        <TableContainer component={Paper}>
                    <OtherTable sx={{ minWidth: 700 }} aria-label="table of teams">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>id</StyledTableCell>
                                {"name" in objects[0] ?
                                <StyledTableCell align="left">Name</StyledTableCell>
                                : 
                                <>
                                    <StyledTableCell align="left">FirstName</StyledTableCell>
                                    <StyledTableCell align="left">LastName</StyledTableCell>
                                    <StyledTableCell align="left">Age</StyledTableCell>
                                    <StyledTableCell align="left">Mountain Points</StyledTableCell>
                                    <StyledTableCell align="left">Sprint Points</StyledTableCell>
                                    <StyledTableCell align="left">Team</StyledTableCell>
                                    <StyledTableCell align="left">Total time</StyledTableCell>
                                </>
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {objects?.map((object) => (
                                <StyledTableRow key={object.id}>
                                    <StyledTableCell>
                                        {object.id}
                                    </StyledTableCell>
                                    {"name" in object ? 
                                    <StyledTableCell align="left">{object.name}</StyledTableCell>
                                    :
                                    <>
                                    <StyledTableCell align="left">{object.firstName}</StyledTableCell>
                                    <StyledTableCell align="left">{object.lastName}</StyledTableCell>
                                    <StyledTableCell align="left">{object.age}</StyledTableCell>
                                    <StyledTableCell align="left">{object.mountainPoints}</StyledTableCell>
                                    <StyledTableCell align="left">{object.sprintPoints}</StyledTableCell>
                                    <StyledTableCell align="left">{object.team.name}</StyledTableCell>
                                    <StyledTableCell align="left">{object.totalTime}</StyledTableCell>
                                    </>
                                    }
                                    
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </OtherTable>
                </TableContainer>
    
  )
}

export default Table