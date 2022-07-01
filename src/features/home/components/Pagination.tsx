import PaginationMUI from '@mui/material/Pagination';
import { PaginationInterface } from '../interfaces';

interface Props {
    pagination: PaginationInterface,
    onChange: (e: React.ChangeEvent<unknown>, value: number) => void
}

export const Pagination = ({ onChange, pagination:{total, page} }: Props) => (
    <PaginationMUI onChange={onChange} page={page} count={total} variant="outlined" shape="rounded" />
)